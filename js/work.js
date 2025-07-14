var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;

$('.num').html('' + currentIndex + '/' + totalItems + '');

$('#workCarousel').bind('slid', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});

$('#workCarousel').on('slide.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});

// $('#workCarousel').carousel({
//     interval: 2000
// });
