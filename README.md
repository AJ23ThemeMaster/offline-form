### Descripción del Proyecto

Este proyecto es un formulario de contacto desarrollado con Bootstrap 5 y jQuery para la interfaz de usuario, y Laravel para el backend. Los datos se guardan en caché localmente y se sincronizan con una base de datos online al hacer clic en un botón. Además, se incluye una funcionalidad para generar y descargar un archivo Excel con los datos almacenados en la base de datos.

### Instalación y Configuración

Sigue estos pasos para instalar y configurar el proyecto:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/AJ23ThemeMaster/offline-form.git
   cd offline-form
   ```

2. **Instalar dependencias del backend**:
   ```bash
   composer install
   ```

3. **Configurar el archivo `.env`**:
   Copia el archivo `.env.example` a `.env` y configura la base de datos y otras variables necesarias.
   ```bash
   cp .env.example .env
   ```

4. **Generar la clave de la aplicación**:
   ```bash
   php artisan key:generate
   ```

5. **Migrar la base de datos**:
   ```bash
   php artisan migrate
   ```

6. **Instalar dependencias del frontend**:
   ```bash
   npm install
   npm run dev
   ```

7. **Configurar el servidor web**:
   Configura tu servidor web para apuntar al directorio `public` de Laravel.

8. **Iniciar el servidor de desarrollo**:
   ```bash
   php artisan serve
   ```

### Uso

1. **Formulario de Contacto**:
   - Rellena el formulario y guarda los datos en caché localmente.
   - Haz clic en "Sincronizar" para enviar los datos al servidor y guardarlos en la base de datos.

2. **Generar y Descargar Excel**:
   - Haz clic en el botón "Generar Excel" para descargar un archivo Excel con los datos de contacto almacenados en la base de datos.

### Dependencias

- Laravel 9
- Bootstrap 5
- jQuery
- SweetAlert2
- Maatwebsite Excel

### Enlaces Útiles

- [Documentación de Laravel](https://laravel.com/docs)
- [Bootstrap 5](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Maatwebsite Excel](https://docs.laravel-excel.com/3.1/getting-started/)

---

Este proyecto proporciona una solución completa para manejar formularios de contacto con sincronización offline/online y exportación de datos a Excel, utilizando tecnologías modernas y prácticas recomendadas de desarrollo web.