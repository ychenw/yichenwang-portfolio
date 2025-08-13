document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const layoutToggleIcon = document.getElementById("layoutToggleIcon");

  // Check current mode
  const isDarkMode = () => document.body.classList.contains("dark");

  // Update icon
  const updateIcon = () => {
    if (isDarkMode()) {
      themeIcon.src = "assets/icons/moon-icon.png"; // Dark mode icon
      themeIcon.alt = "Moon Icon";
      if (layoutToggleIcon) {
        layoutToggleIcon.src = "assets/icons/layout-dark.png";
      }
    } else {
      themeIcon.src = "assets/icons/sun-icon.png"; // Light mode icon
      themeIcon.alt = "Sun Icon";
      if (layoutToggleIcon) {
        layoutToggleIcon.src = "assets/icons/layout-light.png";
      }
    }
  };

  // Toggle mode
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // Save current theme to localStorage
    localStorage.setItem("theme", isDarkMode() ? "dark" : "light");
    updateIcon();
  });

  // Initialize mode
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  updateIcon();

  // Scroll event to hide/show the top bar
  const topBar = document.querySelector('.top-bar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down -> hide
      topBar.classList.add('hidden');
      topBar.classList.remove('visible');
    } else {
      // Scrolling up -> show
      topBar.classList.add('visible');
      topBar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
  });
});