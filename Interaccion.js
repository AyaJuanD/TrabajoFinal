alert("Hola Bienvenido a mi sitio web ")

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var caja = document.querySelector('.caja');
    var logo = document.getElementById('logo');

    if (window.scrollY > 1) { // Puedes ajustar el valor según tus necesidades
        header.classList.add('scroll');
        caja.classList.add('scroll');
        logo.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
        caja.classList.remove('scroll');
        logo.classList.remove('scroll');
}});


