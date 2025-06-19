function agregarImagen() {
  const urlImg = document.getElementById("imagenUrl").value;
  const urlLink = document.getElementById("enlaceUrl").value || "#";
  const texto = document.getElementById("textoImagen").value;

  if (!urlImg || !texto) {
    alert("Por favor ingresa la URL de la imagen y un texto.");
    return;
  }

  const galeria = document.getElementById("galeria");

  const contenedor = document.createElement("div");
  contenedor.className = "imagen-contenedor";

  const enlace = document.createElement("a");
  enlace.href = urlLink;
  enlace.target = "_blank";

  const imagen = document.createElement("img");
  imagen.src = urlImg;
  imagen.alt = texto;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = texto;

  enlace.appendChild(imagen);
  enlace.appendChild(overlay);
  contenedor.appendChild(enlace);
  galeria.appendChild(contenedor);
}
