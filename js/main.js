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

document.querySelectorAll(".nav-item").forEach((item) => {
  if (!item.classList.contains("logout")) {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".nav-item:not(.logout)")
        .forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  }
});

function checkScreenSize() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
  } else {
    sidebar.classList.remove("collapsed");
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
