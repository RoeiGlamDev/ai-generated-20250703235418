// Get all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window scroll
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through all fade-in elements
  fadeInElements.forEach((element) => {
    // Get the element's offset top
    const offsetTop = element.offsetTop;

    // Check if the element is in view
    if (scrollPosition >= offsetTop - window.innerHeight + 100) {
      // Add the "smooth-transition" class to the element
      element.classList.add('smooth-transition');

      // Remove the "fade-in" class from the element
      element.classList.remove('fade