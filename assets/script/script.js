$(document).ready(function() {

    $("#main_carousel").owlCarousel({
        navigation : true,
        items : 6,
        loop:false,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 24,
        navText : ["<img src=\"./assets/img/prev.svg\">","<img src=\"./assets/img/next.svg\">"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 2,
            },
            // breakpoint from 480 up
            480 : {
                items : 4,
            },
            // breakpoint from 768 up
            768 : {
                items : 4,
            },
            900 : {
                items : 6,
            }
        }

    });

});

$(document).ready(function() {

    $(".content_slider").owlCarousel({
        navigation : true,
        items : 6,
        loop:true,
        nav:true,
        dots:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 24,
        navText : ["<img src=\"./assets/img/icons/arrowLeft.svg\">","<img src=\"./assets/img/icons/arrowRight.svg\">"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 2,
            },
            // breakpoint from 480 up
            480 : {
                items : 4,
            },
            // breakpoint from 768 up
            768 : {
                items : 4,
            },
            900 : {
                items : 6,
            }
        }

    });

});
$(function(){
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "./assets/img/calendar.svg",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });
});

$(function(){
    $("#datepicker1").datepicker({
        showOn: "button",
        buttonImage: "./assets/img/icons/calendar2.svg",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });
});

$(function(){
    $("#datepicker2").datepicker({
        showOn: "button",
        buttonImage: "./assets/img/icons/calendar2.svg",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });
});


/* Локализация datepicker */
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$('.btn_open_m').on('click', function () {
    $(this).toggleClass('active');
    $(".header-mobile-bot").toggleClass('active');
});
$('.search_mobile').on('click', function () {
    $(".header-mobile-bot").removeClass('active');
    $(".btn_open_m").removeClass('active');
    $(".header-mobile-search").toggleClass('active');
    $(".btn_open_m").toggleClass('d-none');
    $(".btn_back_m").toggleClass('d-none');
});
$('.btn_back_m').on('click', function () {
    $(".btn_open_m").removeClass('d-none');
    $(".header-mobile-search").removeClass('active');
    $(this).toggleClass('d-none');
});