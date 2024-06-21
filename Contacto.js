document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    // Aquí puedes agregar código para enviar el formulario a través de AJAX o realizar alguna otra acción

    // Por ejemplo, mostrar un mensaje de confirmación
    alert("¡Gracias por contactarnos!");
    // O redirigir a otra página
    // window.location.href = "pagina-de-agradecimiento.html";
}