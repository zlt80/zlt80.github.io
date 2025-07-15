var totalItems = $('#bigCarousel .item').length;
var currentIndex = $('#bigCarousel div.active').index() + 1;

$('#bigCarousel').carousel({
    interval: 4000,
})

$('#smallCarousel').carousel({
    interval: 5000
})

$('#bigCarousel .num').html('' + currentIndex + '/' + totalItems + '');

$('#bigCarousel').bind('slid', function () {
    currentIndex = $('#bigCarousel div.active').index() + 1;
    $('#bigCarousel .num').html('' + currentIndex + '/' + totalItems + '');
});

$('#bigCarousel').on('slide.bs.carousel', function () {
    currentIndex = $('#bigCarousel div.active').index() + 1;
    $('#bigCarousel .num').html('' + currentIndex + '/' + totalItems + '');
});

// $('#bigCarousel').carousel({
//     interval: 2000
// });

var totalItems2 = $('#smallCarousel .item').length;
var currentIndex2 = $('#smallCarousel div.active').index() + 1;

$('#smallCarousel .num').html('' + currentIndex2 + '/' + totalItems2 + '');

$('#smallCarousel').bind('slid', function () {
    currentIndex2 = $('#smallCarousel div.active').index() + 1;
    $('#smallCarousel .num').html('' + currentIndex2 + '/' + totalItems2 + '');
});

$('#smallCarousel').on('slide.bs.carousel', function () {
    currentIndex2 = $('#smallCarousel div.active').index() + 1;
    $('#smallCarousel .num').html('' + currentIndex2 + '/' + totalItems2 + '');
});

// $('#smallCarousel').carousel({
//     interval: 2000
// });
