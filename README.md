# 🧑‍🤝‍🧑 **Buddify**  
**Buddify** es una aplicación tipo red social diseñada para facilitar la creación y participación en actividades grupales con personas que aún no conoces. Fomenta nuevas conexiones, experiencias compartidas y actividades enriquecedoras, todo en una plataforma moderna y segura.

---

## 📖 Tabla de Contenidos

- [Características](#✨-características)
- [Tecnologías](#🛠-tecnologías)
- [Instalación](#⚙️-instalación)
  - [Requisitos Previos](#requisitos-previos)
  - [Configuración Backend](#backend)
  - [Configuración Frontend](#frontend)
- [Capturas de Pantalla](#📸-capturas-de-pantalla)
- [Ejemplos de Uso (API)](#📡-ejemplos-de-uso-api)
- [Roadmap](#🚧-roadmap)
- [Licencia](#📄-licencia)
- [Contribuciones](#🤝-contribuciones)
- [Testeo](#🧪-testeo)
- [Agradecimientos](#🙏-agradecimientos)

---

## ✨ Características

- **Crea Actividades**: Configura eventos con detalles personalizados como horario, lugar y límite de participantes.
- **Explora Eventos**: Encuentra actividades abiertas según tus intereses y ubicación.
- **Unión Fácil**: Únete a actividades con un clic.
- **Gestión de Perfiles**: Personaliza tu perfil y comparte tus intereses.
- **Interfaz Moderna**: Rápida, intuitiva y responsiva.

---

## 🛠 Tecnologías

### Backend:
- [NestJS](https://nestjs.com/) - Framework robusto para aplicaciones backend.
- [TypeORM](https://typeorm.io/) - ORM para gestionar bases de datos relacionales.
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto de JavaScript con tipado estático.
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional.

### Frontend:
- [Next.js](https://nextjs.org/) - Framework para aplicaciones React con renderizado del lado del servidor.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para JavaScript.
- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para estilos rápidos y consistentes.

---

## ⚙️ Instalación

### Requisitos Previos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [PostgreSQL](https://www.postgresql.org/) (v13 o superior)
- [Git](https://git-scm.com/)

### Backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Lisandro85/Buddify

   ```bash
2. Instala las dependencias:
   
npm install

Configura las variables de entorno en un archivo .env:

env
Copiar código
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=tu_usuario
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=buddify
JWT_SECRET=tu_clave_secreta
PORT=3000

Inicia el servidor:

npm run start:dev
Frontend
Clona el repositorio:

bash
Copiar código
git clone https://github.com/Lisandro85/Buddify
Instala las dependencias:
npm install
Inicia el servidor:


npm run dev
