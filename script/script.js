// Menambahkan kelas "scrolled" pada navbar saat di-scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
// AOS.init({
//     duration: 1000, // Durasi animasi dalam milidetik
//     once: false // Animasi terjadi
// });

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the button based on scroll position
window.onscroll = function() {
  const button = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
};

