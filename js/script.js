const slider = document.querySelector(".slider");
slider.addEventListener("click", (event) => {
  if (event.target.classList.contains("slider__item")) {
    document
      .querySelector(".slider__item_active")
      .classList.remove("slider__item_active");
    event.target.classList.add("slider__item_active");
  }
});

// popup
let popupBtnsOpen = document.querySelectorAll(".popup__open"),
  popup = document.querySelector(".popup"),
  video = document.querySelector(".popup__video");
popupBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    popup.classList.add("popup__open");
    let season = event.target.dataset.season;
    console.log(season);
    switch (season) {
      case "spring":
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        break;
      case "summer":
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        break;
      case "autumn":
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        break;
      case "winter":
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        break;
    }
  });
});

popup.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popup__close") ||
    event.target.classList.contains("popup")
  ) {
    popup.classList.remove("popup__open");
  }
});
