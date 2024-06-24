$(document).ready(function() {
    // Función para guardar datos en caché
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        let full_name = $('#full_name').val();
        let identification = $('#identification').val();
        let email = $('#email').val();
        let address = $('#address').val();
        let phone_number = $('#phone_number').val();
        let suggestions = $('#suggestions').val();

        // Validar que todos los campos sean obligatorios
        if (!full_name || !identification || !email || !address || !phone_number || !suggestions) {
            Swal.fire({
                icon: 'error',
                title: 'CAMPOS REQUERIDOS',
                text: 'Todos los campos son obligatorios. Por favor, complete todos los campos.',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        let contactData = {
            full_name: full_name,
            identification: identification,
            email: email,
            address: address,
            phone_number: phone_number,
            suggestions: suggestions
        };

        // Guardar los datos en caché
        let cachedData = JSON.parse(localStorage.getItem('contactData')) || [];
        cachedData.push(contactData);
        localStorage.setItem('contactData', JSON.stringify(cachedData));

        Swal.fire({
            icon: 'success',
            title: 'DATOS GUARDADOS',
            text: 'Los datos han sido guardados en caché.',
            confirmButtonText: 'Aceptar'
        });

        // Resetear el formulario
        this.reset();
    });

    // Función para sincronizar datos
    $('#syncButton').on('click', function() {
        let cachedData = JSON.parse(localStorage.getItem('contactData')) || [];
        let recordCount = cachedData.length;

        if (recordCount === 0) {
            Swal.fire({
                icon: 'info',
                title: 'SIN DATOS',
                text: 'No hay datos para sincronizar.',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        Swal.fire({
            title: 'CONFIRMAR SINCRONIZACIÓN',
            text: `Se van a sincronizar ${recordCount} registros. ¿Desea continuar?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sincronizar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'SINCRONIZANDO...',
                    text: 'Por favor, espere mientras se sincronizan los datos.',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                // Simulación de la sincronización con una base de datos online
                $.ajax({
                    url: window.location+'api/sync', // URL de la API de sincronización
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(cachedData),
                    success: function(response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'SINCRONIZACIÓN EXITOSA',
                            text: 'Datos sincronizados exitosamente.',
                            confirmButtonText: 'Aceptar'
                        });
                        localStorage.removeItem('contactData');
                    },
                    error: function(error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'ERROR',
                            text: 'Error al sincronizar los datos.',
                            confirmButtonText: 'Aceptar'
                        });
                    }
                });
            }
        });
    });

    $('#generateExcelButton').on('click', function() {
        Swal.fire({
            title: 'GENERANDO EXCEL...',
            text: 'Por favor, espere mientras se genera el archivo Excel.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        
        $.ajax({
            url: window.location+'api/generate-excel', // URL de la API para generar el Excel
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            success: function(data) {
                Swal.close(); // Cerrar el swal al éxito
                var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'contactos.xlsx';
                link.click();
                Swal.fire({
                    icon: 'success',
                    title: 'ARCHIVO DESCARGADO',
                    confirmButtonText: 'Aceptar'
                });
            },
            error: function(error) {
                Swal.close(); // Cerrar el swal al éxito
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al generar el archivo Excel.',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    });
});
