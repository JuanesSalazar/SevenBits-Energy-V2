// Obtener referencias a los elementos del DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.getElementById('loginForm');
const links = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.main-content .content');

// Manejador de eventos para el botón de registro
registerBtn.addEventListener('click', () => {
    // Agrega la clase "active" al contenedor para mostrar el formulario de registro
    container.classList.add("active");
});

// Manejador de eventos para el botón de inicio de sesión
loginBtn.addEventListener('click', () => {
    // Quita la clase "active" del contenedor para ocultar el formulario de registro
    container.classList.remove("active");
});

// Función para manejar el envío del formulario de inicio de sesión
function iniciarSesion() {
  // Obtener los valores de los campos de usuario y contraseña
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Simulación de la autenticación (reemplazar con tu lógica real)
  if (username === 'admin' && password === 'password123') {
    // Redirigir a la página de inicio (reemplazar con tu lógica de redirección)
    window.location.href = "inicio.html";
  } else {
    // Mostrar un mensaje de error si las credenciales son incorrectas
    alert("Credenciales incorrectas");
  }
}

// Manejador de eventos para los enlaces de navegación
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Obtener el ID del contenido a mostrar
        const targetId = link.getAttribute('data-target');

        // Ocultar todas las secciones de contenido
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección de contenido correspondiente
        document.getElementById(targetId).classList.add('active');

        // Marcar el enlace activo
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});