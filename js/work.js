var totalItems = $('#workCarousel .item').length;
var currentIndex = $('#workCarousel div.active').index() + 1;

$('#workCarousel .num').html('' + currentIndex + '/' + totalItems + '');

$('#workCarousel').bind('slid', function () {
    currentIndex = $('#workCarousel div.active').index() + 1;
    $('#workCarousel .num').html('' + currentIndex + '/' + totalItems + '');
});

$('#workCarousel').on('slide.bs.carousel', function () {
    currentIndex = $('#workCarousel div.active').index() + 1;
    $('#workCarousel .num').html('' + currentIndex + '/' + totalItems + '');
});

// $('#workCarousel').carousel({
//     interval: 2000
// });

var totalItems2 = $('#brandCarousel .item').length;
var currentIndex2 = $('#brandCarousel div.active').index() + 1;

$('#brandCarousel .num').html('' + currentIndex2 + '/' + totalItems2 + '');

$('#brandCarousel').bind('slid', function () {
    currentIndex2 = $('#brandCarousel div.active').index() + 1;
    $('#brandCarousel .num').html('' + currentIndex2 + '/' + totalItems2 + '');
});

$('#brandCarousel').on('slide.bs.carousel', function () {
    currentIndex2 = $('#brandCarousel div.active').index() + 1;
    $('#brandCarousel .num').html('' + currentIndex2 + '/' + totalItems2 + '');
});

// $('#brandCarousel').carousel({
//     interval: 2000
// });
