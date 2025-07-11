function openWhatsApp() {
  const phone = "9838514662";
  const message = encodeURIComponent("Hi! I'm interested in your website design services.");
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}
