let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const bullets = document.getElementsByClassName('bullet');
const totalSlides = slides.length;

document.getElementById('carousel_button--next')
.addEventListener("click", function() {
    moveToNextSlide();
}),
document.getElementById('carousel_button--prev')
.addEventListener("click", function() {
    moveToPrevSlide();
})

function updateSlidePosition(){
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible')
        slide.classList.add('carousel_item--hidden')
    }

    slides[slidePosition].classList.add('carousel_item--visible')

    for (let bullet of bullets){
        bullet.classList.remove('bull-active')
    }
    bullets[slidePosition].classList.add('bull-active')
}

function moveToSlide(pos){
    console.log(pos);
    slidePosition = pos
    updateSlidePosition()
}

function moveToNextSlide() {
    if (slidePosition == totalSlides -1){
        slidePosition = 0;
    }
    else{
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition == 0){
        slidePosition = totalSlides - 1;
    }
    else{
        slidePosition--;
    }
    updateSlidePosition();
}