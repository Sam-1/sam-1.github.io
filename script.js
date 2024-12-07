document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loading");
  const loadingImage = document.querySelector("#loadingImage");

  loadingImage.src = "images/lahaine.gif?v=" + new Date().getTime();

  loadingImage.onload = () => {
    const gifDuration = loadingImage.naturalDuration || 5610;

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        loading.classList.add("display-none");
      }, gifDuration);
    });
  };
});
