import {
  Body,
  Controller,
  Get,
  HttpException,
  NotFoundException,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dtos/login-user.dto';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import * as dotenv from 'dotenv';
import { MailService } from '../mail/mail.service';
import { ChangePswDto } from '../users/dtos/change-psw.dto';
import { AuthGuard } from '../../guards/auth.guard';
dotenv.config({ path: './.env' });
import { JwtService } from '@nestjs/jwt';
import { CompleteProfileDto } from '../users/dtos/complete-profile.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
    private jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}
  @Post('signup')
  register(@Body() newUser: CreateUserDto): Promise<{ message: string }> {
    return this.userService.register(newUser);
  }

  @Post('signin')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('/google/login')
  googleLogin() {}
  @UseGuards(GoogleAuthGuard)
  @Get('/google/callback')
  async googleCallback(@Req() req, @Res() res) {
    const user = req.user;

    if (!user) {
      throw new UnauthorizedException('No se pudo autenticar con Google');
    }

    const profileComplete = user.profileComplete;

    const payload = {
      name: user.name,
      sub: user.id,
      isPremium: user.isPremium,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
    };

    const token = this.jwtService.sign(payload);

    const redirectUrl = `${process.env.URL_FRONT}?token=${token}&profileComplete=${profileComplete}`;

    return res.redirect(redirectUrl);
  }

  @Post('generate-reset-token')
  async generateResetPassword(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    try {
      const user = await this.userService.findByEmail(email);
      if (!user) {
        throw new NotFoundException('No se encontró un usuario con ese email');
      }

      await this.mailService.sendPasswordResetEmail(email, user.name);
      return {
        message: 'Se ha enviado un correo para restablecer la contraseña',
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  @Patch('reset-password')
  async resetPassword(
    @Query('token') token: string,
    @Body('newPassword') newPassword: string,
  ): Promise<{ message: string }> {
    await this.authService.resetPassword(token, newPassword);

    const email = await this.authService.validateResetToken(token);
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    await this.mailService.sendPasswordUpdatedEmail(user.email, user.name);

    return { message: 'Contraseña actualizada con éxito' };
  }

  @Post('change-password')
  @UseGuards(AuthGuard)
  async changePassword(@Request() req, @Body() changePswDto: ChangePswDto) {
    const userId = req.user.sub;
    await this.authService.changePassword(userId, changePswDto);

    const user = await this.userService.findById(userId);
    if (!user) {
      throw new NotFoundException('Usuario no encontraod');
    }

    await this.mailService.sendPasswordUpdatedEmail(user.email, user.name);

    return { message: 'Nontraseña actualizada con éxito' };
  }

  @UseGuards(AuthGuard)
  @Put('/completeprofile')
  async completeProfile(
    @Body() completeUserDto: CompleteProfileDto,
    @Req() req,
    @Res() res,
  ) {

    const userId = req.user.sub;

    if (!userId) {
      return res.status(400).json({
        message: 'No se pudo identificar al usuario',
      });
    }

    const updatedUser = await this.authService.updateUserProfile(
      userId,
      completeUserDto,
    );

    return res.status(200).json({
      message: 'Perfil actualizado con éxito',
      user: updatedUser,
    });
  }
}
