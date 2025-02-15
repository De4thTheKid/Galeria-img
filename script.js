let imagenActual;

function agregarImagen(event) {
    event.preventDefault();

    const urlImagen = document.getElementById("url-imagen").value;
    const descripcionImagen = document.getElementById("descripcion-imagen").value;

    // Validación de la URL
    if (!isValidUrl(urlImagen)) {
        alert("Por favor ingrese una URL válida.");
        return;
    }

    // Crear un nuevo div para la imagen
    const imagenDiv = document.createElement("div");
    imagenDiv.classList.add("imagen");

    // Crear la etiqueta de imagen
    const imagen = document.createElement("img");
    imagen.src = urlImagen;
    imagen.alt = descripcionImagen;
    imagen.onclick = () => abrirModal(imagen);

    // Crear la descripción
    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion");
    descripcion.innerText = descripcionImagen;

    // Crear el botón de eliminación
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("eliminar");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.onclick = () => eliminarImagen(imagenDiv);

    // Crear el botón de modificar
    const botonModificar = document.createElement("button");
    botonModificar.classList.add("modificar");
    botonModificar.innerText = "Modificar";
    botonModificar.onclick = () => abrirModal(imagen);

    // Agregar todo al div de la imagen
    imagenDiv.appendChild(imagen);
    imagenDiv.appendChild(descripcion);
    imagenDiv.appendChild(botonEliminar);
    imagenDiv.appendChild(botonModificar);

    // Agregar la nueva imagen a la galería
    document.getElementById("galeria").appendChild(imagenDiv);

    // Limpiar los campos del formulario
    document.getElementById("url-imagen").value = '';
    document.getElementById("descripcion-imagen").value = '';
}

function isValidUrl(url) {
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i;
    return regex.test(url);
}

function abrirModal(imagen) {
    imagenActual = imagen;
    document.getElementById("imgemodo").src = imagen.src;
    document.getElementById("nueva-descripcion").value = imagen.alt;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function guardarDescripcion() {
    const nuevaDescripcion = document.getElementById("nueva-descripcion").value;

    if (nuevaDescripcion) {
        imagenActual.alt = nuevaDescripcion;
        imagenActual.nextElementSibling.innerText = nuevaDescripcion;
    }
    cerrarModal();
}

function eliminarImagen(imagenDiv) {
    imagenDiv.remove();
}