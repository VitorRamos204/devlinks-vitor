function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do personagem Guts, em frente ao pôr do sol")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
