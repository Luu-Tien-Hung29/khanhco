// const $  = document.querySelector
$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:2000,
  prevArrow:'  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button> ',
  nextArrow:'<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',
});