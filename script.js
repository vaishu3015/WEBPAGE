document.querySelector('.btn-red').addEventListener('click', function() {
    alert('Redirecting to seller signup!');
  });
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const fixedFooter = document.querySelector('.fixed-bottom-footer');

    // Adjust the scroll threshold as needed (e.g., when 50% of the page is scrolled)
    if (scrollPosition > windowHeight * 0.5) {
        fixedFooter.style.display = 'block';
    } else {
        fixedFooter.style.display = 'none';
    }
});