document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // 检查当前模式
  const isDarkMode = () => document.body.classList.contains("dark");

  // 更新图标
  const updateIcon = () => {
    if (isDarkMode()) {
      themeIcon.src = "assets/icons/moon-icon.png"; // 暗模式图标
      themeIcon.alt = "Moon Icon";
    } else {
      themeIcon.src = "assets/icons/sun-icon.png"; // 亮模式图标
      themeIcon.alt = "Sun Icon";
    }
  };

  // 切换模式
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // 保存当前模式到 localStorage
    localStorage.setItem("theme", isDarkMode() ? "dark" : "light");
    updateIcon();
  });

  // 初始化模式
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  updateIcon();
});