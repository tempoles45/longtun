// Menambahkan kelas "scrolled" pada navbar saat di-scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: false // Animasi terjadi
});