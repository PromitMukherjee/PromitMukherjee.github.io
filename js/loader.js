// js/loader.js

document.addEventListener("DOMContentLoaded", () => {
  const introLoader = document.getElementById("intro-loader");
  
  // 1. Handle Intro Loading Screen
  // Simulate an artificial delay to allow the intro animation (logo and text) to play.
  setTimeout(() => {
    // Fade out the intro screen
    introLoader.classList.add("hidden");
    
    // 2. Handle Skeleton Removal
    // Simulate data fetching delay for the actual content
    setTimeout(() => {
      removeSkeletons();
    }, 800); // 800ms after intro finishes, reveal actual content
    
  }, 2500); // Intro screen stays for 2.5 seconds total
});

function removeSkeletons() {
  // Find all elements with the .skeleton class
  const skeletons = document.querySelectorAll('.skeleton');
  
  skeletons.forEach(element => {
    // Remove the skeleton styling
    element.classList.remove('skeleton');
    element.classList.remove('skeleton-text');
    element.classList.remove('skeleton-text-lg');
    element.classList.remove('skeleton-nav');
    
    // If it's an image placeholder, we might want to swap styles or trigger an image load
    if (element.classList.contains('skeleton-img')) {
      element.classList.remove('skeleton-img');
      // For this static demo, we just apply a subtle background to represent the loaded image container
      element.style.backgroundColor = "var(--bg-tertiary)";
      // Real implementation would set a background-image URL here
    }
    
    // Make children visible again (they were hidden in CSS during skeleton state)
    const children = element.querySelectorAll('*');
    children.forEach(child => {
      child.style.visibility = 'visible';
    });
  });
}
