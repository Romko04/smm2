new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  },
  breakpoints: {
    1189: {
      slidesPerView: 3
    }
  }
});

const acc = document?.querySelectorAll('.accordeon');
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
  acc[i].querySelector('.moduls__accordeon-btn').classList.toggle("active")
  acc[i].querySelector('.panel').classList.toggle("panelActive")
  });
}