document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Параметры слайдера
        direction: 'horizontal', // или 'vertical'
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

        // Автопрокрутка (необязательно)
        autoplay: {
            delay: 2500, // Задержка между слайдами в миллисекундах
            disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия пользователя
        },
    });
});