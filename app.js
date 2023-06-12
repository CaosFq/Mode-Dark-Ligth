const boton = document.getElementById("boton");

const configUser = window.matchMedia("(prefers-color-scheme: dark)");

boton.addEventListener("click", () => {
  console.log(configUser.matches);
  if (configUser.matches) {
    //Entramos con modo oscuro
    document.body.classList.toggle("Ligth-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});
