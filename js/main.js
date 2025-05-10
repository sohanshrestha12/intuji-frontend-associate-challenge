function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");

  if (window.innerWidth <= 768) {
    const content = document.getElementById("main-content");
    if (sidebar.classList.contains("collapsed")) {
      content.style.marginLeft = "0";
    } else {
      content.style.marginLeft = "250px";
    }
  }
}

function checkScreenSize() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
  } else {
    sidebar.classList.remove("collapsed");
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
