document.addEventListener("DOMContentLoaded", () => {
  const splash = document.querySelector(".splash");
  const splashImage = document.querySelector("#splash");

  splashImage.src = "images/lahaine.gif?v=" + new Date().getTime();

  splashImage.onload = () => {
    const gifDuration = splashImage.naturalDuration || 5610;

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        splash.classList.add("display-none");
      }, gifDuration);
    });
  };
});
