<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Formulario de Contacto</h2>
        <hr>
        <form id="contactForm">
            <div class="mb-3">
                <label for="full_name" class="form-label">Nombre Completo</label>
                <input type="text" class="form-control" id="full_name" required>
            </div>
            <div class="mb-3">
                <label for="identification" class="form-label">Identificación</label>
                <input type="text" class="form-control" id="identification" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="address" required>
            </div>
            <div class="mb-3">
                <label for="phone_number" class="form-label">Número de Contacto</label>
                <input type="text" class="form-control" id="phone_number" required>
            </div>
            <div class="mb-3">
                <label for="suggestions" class="form-label">Sugerencias</label>
                <textarea class="form-control" id="suggestions" rows="3" required></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-success">Guardar</button>
            </div>
            
        </form>
        <hr>
        <div class="btn-group mt-3" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-dark" id="syncButton">Sincronizar Data</button>
            <button type="button" class="btn btn-success" id="generateExcelButton">Generar Excel</button>
          </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
