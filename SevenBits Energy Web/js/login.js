//       ***************************** PÁGINA DE INICIO DE SESIÓN *****************************       


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.getElementById('loginForm'); // Assuming you have a form with this ID

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function iniciarSesion() {
  const username = loginForm.username.value; // Assuming the username input has the ID "username"
  const password = loginForm.password.value; // Assuming the password input has the ID "password"

  // Simulación de validación (reemplazar con tu lógica real)
  if (username === 'admin' && password === 'password123') {
    // Aquí deberías hacer una solicitud al servidor para verificar las credenciales
    // Si las credenciales son válidas, redirige a index.html
    window.location.href = "inicio.html"; /* ANTERIORMENTE DECÍA INDEX.HTML */
  } else {
    alert("Credenciales incorrectas");
  }
}

const links = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.main-content .content');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

function openNav() {
  let width = document.getElementById("sideNavigation").getAttribute("open");
  console.log(width);
  if(width === null){
    document.getElementById("sideNavigation").setAttribute("open","true");
    document.getElementById("sideNavigation").style.width   = "250px";
  }else{
    document.getElementById("sideNavigation").removeAttribute("open");
    document.getElementById("sideNavigation").style.width = "0px";
  }
    // document.getElementById("sideNavigation").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
