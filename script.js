const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 100,
        slidesPerView: "auto",
        grabCursor: true,
        speed: 3000,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        }
    });
}

swiperAnimation()