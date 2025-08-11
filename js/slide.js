var switchButtons = document.querySelectorAll('.workarea__switch');
var slides = document.querySelectorAll('.workarea__slide');

for (var switchButton of switchButtons) {
    var targetElementId = switchButton.dataset.switch;
    switchButton.addEventListener('click',
        function (e) {
            toggleWorkAreaSlide(this.dataset.switch)
        },
        true);
}

function toggleWorkAreaSlide(slideId) {
    for (var slide of slides) {
        slide.classList.remove('active');
    }
    document.getElementById(slideId).classList.add('active');
}