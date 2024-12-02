document.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash");
  const splashImage = document.querySelector("#splash");

  splashImage.src = "images/lahaine.gif?" + new Date().getTime();

  splashImage.onload = () => {

    setTimeout(() => {
      splash.classList.add("display-none");
    }, splashImage.naturalDuration || 5610);
  };
});
