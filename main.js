// Selecciona el elemento con la clase .main_img
const main_img = document.querySelector('.main_img');

// Selecciona todos los elementos con la clase .thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');

// Itera sobre cada miniatura y agrega un evento de clic
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        // Encuentra el elemento activo actual
        const active = document.querySelector('.active');
        // Remueve la clase 'active' del elemento activo
        active.classList.remove('active');
        // Agrega la clase 'active' al elemento de miniatura clicado
        thumb.classList.add('active');
        // Actualiza la fuente de la imagen principal con la fuente de la miniatura clicada
        main_img.src = thumb.src;
    });
});