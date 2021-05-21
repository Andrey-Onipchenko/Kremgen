let data = {
  spring: {},
  summer: {},
  autumn: {},
  winter: {},
};

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
  body = document.querySelector("body"),
  video = document.querySelector(".popup__video");
popupBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    popup.classList.add("popup__open");
    body.classList.add("hidden");
    let season = event.target.dataset.season;
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
    body.classList.remove("hidden");
    video.pause();
  }
});

var tinySlider = tns({
  preventScrollOnTouch: "auto",
  container: ".tiny-slider",
  items: 1,
  controls: false,
  navPosition: "bottom",
});

class Burger {
  constructor(burgerSelector, menuSelector, linkSelector, videoSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.menu = document.querySelector(menuSelector);
    this.links = document.querySelectorAll(linkSelector);
    this.body = document.querySelector("body");
    this.init();
  }

  init() {
    try {
      this.burger.addEventListener("click", () => {
        this.toggle();
      });

      this.links.forEach((link) => {
        link.addEventListener("click", () => {
          console.dir(document.clientWidht);
          if (window.innerWidth < 701) {
            this.toggle();
            this.video.pause();
          }
        });
      });
    } catch (error) {
      console.log(`class ${this.burger} not found`);
    }
  }

  toggle() {
    try {
      this.menu.classList.toggle("mobile-menu_active");
      this.body.classList.toggle("hidden");
      this.burger.classList.toggle("burger-active");
    } catch (error) {
      console.log(`class ${this.menu} not found`);
    }
  }
}

const burger = new Burger(
  ".burger",
  ".header__right",
  ".header__link",
  ".popup__video"
);
