document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function() {

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();


        if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
            alert('Rellena todos los campos.');
        } else {

            alert('Formulario enviado con éxito');

            form.reset();
        }
    });
});