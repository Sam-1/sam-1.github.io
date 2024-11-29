document.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash");
  const splashImage = document.querySelector("#splash");

  splashImage.src = "images/lahaine.gif?" + new Date().getTime();

  setTimeout(() => {
    splash.classList.add("display-none");
  }, 5690);
});
