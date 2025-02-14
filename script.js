const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("main");

menu.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menu.classList.toggle("active");
});

body.addEventListener("click", () => {
  navigation.classList.remove("open");
  menu.classList.remove("active");
});

navigation.addEventListener("click", () => {
  navigation.classList.remove("open");
  menu.classList.remove("active");
});
