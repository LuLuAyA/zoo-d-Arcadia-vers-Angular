function createSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
}

createSlider('slider1');
//createSlider('slider2');//
//createSlider('slider3');//

// Script to handle the dropdown menu//
//document.querySelectorAll('.dropdown').forEach(function(dropdown) {//
   // dropdown.addEventListener('click', function() {//
      //this.classList.toggle('active');//
   // });//
  //});// Script to handle the dropdown menu//
  //document.querySelectorAll('.dropdown').forEach(function(dropdown) {//
    //dropdown.addEventListener('click', function() {//
      //this.classList.toggle('active');//
    //});//
  //});//
