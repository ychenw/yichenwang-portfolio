// ============================
// 1. Initialize layout from saved preference
// ============================
// Read saved layout from localStorage and apply corresponding class to body
const savedLayout = localStorage.getItem("layout");
if (savedLayout === "two") {
  document.body.classList.add("two-column");
} else {
  document.body.classList.add("one-column");
}

// ============================
// 2. Initialize overlay visibility based on layout
// ============================
// .hide-default hides the frosted glass overlay; show/hide based on layout
const initOverlays = document.querySelectorAll(".project-card-info");
if (document.body.classList.contains("two-column")) {
  initOverlays.forEach(overlay => {
    overlay.classList.add("hide-default");
  });
} else {
  initOverlays.forEach(overlay => {
    overlay.classList.remove("hide-default");
  });
}

// ============================
// 3. Initialize titles/descriptions visibility based on layout
// ============================
// Fade in/out project titles and descriptions based on layout
const isTwoColumnInit = document.body.classList.contains("two-column");
const elementsInit = document.querySelectorAll(".project-grid-title, .project-card-info");
elementsInit.forEach(el => {
  if (isTwoColumnInit) {
    el.classList.add("fade-out");
    el.classList.remove("fade-in");
  } else {
    el.classList.add("fade-in");
    el.classList.remove("fade-out");
  }
});

// ============================
// 4. Layout toggle click handler
// ============================
layoutToggle.addEventListener("click", () => {
  // Toggle between one-column and two-column layout classes on body
  if (document.body.classList.contains("one-column")) {
    document.body.classList.remove("one-column");
    document.body.classList.add("two-column");
    localStorage.setItem("layout", "two");
  } else {
    document.body.classList.remove("two-column");
    document.body.classList.add("one-column");
    localStorage.setItem("layout", "one");
  }

  // Show/hide frosted glass overlay in two-column mode (hide by default, show on hover)
  const overlays = document.querySelectorAll(".project-card-info");
  if (document.body.classList.contains("two-column")) {
    overlays.forEach(overlay => {
      overlay.classList.add("hide-default");
    });
  } else {
    overlays.forEach(overlay => {
      overlay.classList.remove("hide-default");
    });
  }

  // Fade-in animation for main content; trigger reflow to restart animation
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.classList.remove("fade-in");
    void mainContent.offsetWidth; // force reflow
    mainContent.classList.add("fade-in");
  }

  // Bind hover effects for project cards (enlarge/shrink behavior depends on layout)
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (document.body.classList.contains("two-column")) {
        const info = card.querySelector(".project-card-info");
        if (info) {
          info.classList.remove("hide-default");
        }
        card.classList.add('active-hover');
      } else {
        card.classList.add('active-hover');
        projectCards.forEach(other => {
          if (other !== card) {
            other.classList.add('dimmed');
          }
        });
      }
    });
    card.addEventListener('mouseleave', () => {
      if (document.body.classList.contains("two-column")) {
        const info = card.querySelector(".project-card-info");
        if (info) {
          info.classList.add("hide-default");
        }
        card.classList.remove('active-hover');
      } else {
        card.classList.remove('active-hover');
        projectCards.forEach(other => {
          other.classList.remove('dimmed');
        });
      }
    });
  });
});

// ============================
// 5. Hover effect handlers for project cards
// ============================
// Global hover logic for project cards to enlarge/shrink based on layout
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (document.body.classList.contains("two-column")) {
      const info = card.querySelector(".project-card-info");
      if (info) {
        info.classList.remove("hide-default");
      }
      card.classList.add('active-hover');
    } else {
      card.classList.add('active-hover');
      projectCards.forEach(other => {
        if (other !== card) {
          other.classList.add('dimmed');
        }
      });
    }
  });
  card.addEventListener('mouseleave', () => {
    if (document.body.classList.contains("two-column")) {
      const info = card.querySelector(".project-card-info");
      if (info) {
        info.classList.add("hide-default");
      }
      card.classList.remove('active-hover');
    } else {
      card.classList.remove('active-hover');
      projectCards.forEach(other => {
        other.classList.remove('dimmed');
      });
    }
  });
});