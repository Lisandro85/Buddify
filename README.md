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

Clona el repositorio:

 ```env
 git clone https://github.com/Lisandro85/Buddify
 ```

Instala las dependencias:

```env
npm install
```

---
 Configura las variables de entorno en un archivo .env:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=tu_usuario
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=buddify
JWT_SECRET=tu_clave_secreta
PORT=3000
```
---
Inicia el servidor:
```env
npm run start
```
---
### Frontend

Clona el repositorio:
```env
git clone https://github.com/Lisandro85/Buddify
```
 Configura las variables de entorno en un archivo .env:
 
```env
URL_BACK=http://localhost:3001
URL_FRONT=http://localhost:3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu password
DB_DATABASE=buddifydb
EMAIL_USER="email usuario"
EMAIL_PASS="contraseña usuario"
JWT_SECRET=tu password
GOOGLE_CLIENTE_ID=preguntePORWSP
GOOGLE_SECRET=preguntePORWSP
GOOGLE_CALLBACK_URL=preguntePORWSP
```
Instala las dependencias:
```env
npm install
```
Inicia el servidor:
```env
npm run dev
```
