const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
const btnClick = document.querySelector(".btn-click");
const listItem = document.querySelectorAll(".list-item");

btnClick.addEventListener("click", () => {
  sidebar.style.display = "block";
});
closeSidebar.addEventListener("click", () => {
  sidebar.style.display = "none";
});

listItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.style.display = "none";
    }
    return;
  });
});
