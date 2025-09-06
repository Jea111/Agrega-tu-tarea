// Si no existe, inicializa UsuariosRegistrados como []
let UsuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

function ConfirmarUsuario(event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const passw = document.querySelector("#password").value;

  let nuevoUser = { nombre: nombre, passw: passw };

  // Verificar si ya existe
  const existe = UsuariosRegistrados.some(
    (u) => u.nombre === nuevoUser.nombre && u.passw === nuevoUser.passw
  );

  if (existe) {
    // Usuario encontrado → redirigir a index.html
    window.location.href = "loginUser/tareas.html";
  } else {
    // Usuario nuevo → lo agregamos al array
    UsuariosRegistrados.push(nuevoUser);

    // Guardamos el array actualizado en localStorage
    localStorage.setItem("usuarios", JSON.stringify(UsuariosRegistrados));

    // Redirigir al formulario de login
    alert("Usuario registrado con éxito. Ahora inicia sesión.");
    window.location.href = "loginUser/tareas.html";
  }
}
