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
  createSlider('slider2');
  createSlider('slider3');
  createSlider('slider4');

  // methode de payement en ligne //
  
  function updateCartSummary() {
    const adultQuantity = parseInt(document.getElementById("adult-quantity").value);
    const childQuantity = parseInt(document.getElementById("child-quantity").value);
    const adultPrice = adultQuantity * 30;
    const childPrice = childQuantity * 15;
    const totalPrice = adultPrice + childPrice;

    document.getElementById("adult-total").textContent = adultQuantity;
    document.getElementById("child-total").textContent = childQuantity;
    document.getElementById("adult-price").textContent = adultPrice.toFixed(2) + "€";
    document.getElementById("child-price").textContent = childPrice.toFixed(2) + "€";
    document.getElementById("total-price").textContent = totalPrice.toFixed(2) + "€";
  }

  function processPayment(method) {
    updateCartSummary();
    // Logique de traitement du paiement ici
    // Selon le mode de paiement sélectionné (carte, Visa, Mastercard, PayPal)
    console.log(`Paiement par ${method} en cours...`);
    // Envoyer les informations de paiement à un système de paiement sécurisé
  }

  // Mise à jour du résumé du panier à chaque changement des quantités
  document.getElementById("adult-quantity").addEventListener("input", updateCartSummary);
  document.getElementById("child-quantity").addEventListener("input", updateCartSummary);

  // formulaire de contact //

  // Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });