document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Параметры слайдера
        direction: 'horizontal', // 
        loop: true, // Бесконечный слайдер

        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Навигация (стрелки)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Автопрокрутка 
        autoplay: {
            delay: 2500, // Задержка между слайдами в миллисекундах
            disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия пользователя
        },
    });
});