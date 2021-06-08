let data = {
  spring: {
    p1: "Весна – час пікніків, прогулянок парком та дачних радощів, що, на жаль, супроводжуються укусами комах та різноманітними подразненнями шкіри.",
    p2: "Щоб нічого не зіпсувало настрій, покладіть у персональну аптечку або навіть у дамську  сумочку невеликий тюбик Кремген UNI. Він може стати вам у нагоді.",
    p3: "При укусах комах, подразненнях, сонячних опіках допоможе Кремген UNI, що тонким шаром потрібно нанести на подразнену шкіру.",
  },
  summer: {
    p1: "Літо – час сонця, пляжів та ніжної засмаги. Але після довгої зими наша шкіра досить вразлива, й навіть м’які та лагідні промені сонця можуть залишити червоні сліди, опіки шкіри.",
    p2: "Особливо вразливі діти та жінки.",
    p3: "Якщо  це вже сталося, згадайте про Кремген UNI! Нанесіть Кремген UNI тонким шаром на подразнену ділянку шкіри – свою або малечі – та компоненти Кремген UNI допоможуть у її зволоженні та відновленні.",
  },
  autumn: {
    p1: "Осінь – найкрасивіша пора року, але й непередбачувана. Зранку тепло, ввечері холодно, вітер із першим морозом починає сушити шкіру на відкритих ділянках.",
    p2: "А тут ще й санітайзери та антисептики, що стали невід’ємною частиною нашого життя. В купі з холодним осіннім вітром відразу відчувається сухість, можуть з’явитися лущення та свербіж на тильній стороні долонь. Але нанесення невеликої кількості Кремгену UNI, який є універсальним кремом на всі сезони, допоможе у відновленні шкіри. Головне – мати його завжди при собі!",
  },
  winter: {
    p1: "Зима – тотальний екстрим для нашого організму, особливо для незахищеної одягом шкіри.",
    p2: "Свербіж, лущення, сухість – на жаль, часто стають вже звичними речами на холоді, але коли шкіра починає тріскатись від перебування на холоді – це зовсім неприємно та боляче.",
    p3: "Але кожна жінка, мати і бабуся, навіть вже й чоловіки теж знають – Кремген UNI допоможе подразненій шкірі. Адже в його складі такі цінні та корисні компоненти, як пантотенат кальцію, бджолиний віск та гліцерин.",
  },
};

const slider = document.querySelector(".slider");
const popupContent = document.querySelector(".popup__scroll");
slider.addEventListener("mouseover", (event) => {
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
  video = document.querySelector(".popup__video"),
  seeMore = document.querySelector("[data-seeMore='seeMore']");

popupBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    popup.classList.add("popup__open");
    body.classList.add("hidden");
    let season = event.target.dataset.season;
    switch (season) {
      case "spring":
        seeMore.setAttribute(
          "onclick",
          "gtag('event', 'click', { 'event_category': 'curtis', 'event_label': 'spring_board'});"
        );
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        popupText("spring");
        break;
      case "summer":
        seeMore.setAttribute(
          "onclick",
          "gtag('event', 'click', { 'event_category': 'curtis', 'event_label': 'summer_board'});"
        );
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        popupText("summer");
        break;
      case "autumn":
        seeMore.setAttribute(
          "onclick",
          "gtag('event', 'click', { 'event_category': 'curtis', 'event_label': 'autumn_board'});"
        );
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        popupText("autumn");
        break;
      case "winter":
        seeMore.setAttribute(
          "onclick",
          "gtag('event', 'click', { 'event_category': 'curtis', 'event_label': 'winter_board'});"
        );
        video.setAttribute("src", "https://pascha.smak.ua/media/spring.mp4");
        popupText("winter");
        break;
    }
  });
});
function popupText(prop) {
  popupContent.innerHTML = "";
  for (var key in data[prop]) {
    let paragraf = document.createElement("p");
    paragraf.classList.add("popup__text");
    paragraf.innerHTML = data[prop][key];
    popupContent.append(paragraf);
  }
}

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
  autoplay: true,
  autoplayTimeout: 2000,
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
          if (window.innerWidth < 701) {
            this.toggle();
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
let burgerWrap = document.querySelector(".burger-wrap");
// burgerLogo = document.querySelector(".burger-logo");
document.addEventListener("scroll", (event) => {
  if (event.target.scrollingElement.scrollTop > 50) {
    burgerWrap.style.background =
      "url('https://andreysk8er.github.io/Kremgen/images/burger.png')";
    // burgerLogo.style.visibility = "visible";
  } else {
    burgerWrap.style.background = "transparent";
    // burgerLogo.style.visibility = "hidden";
  }
});

// btn more main
let more = document.querySelector(".main__more"),
  scrollToSlider;

if (window.innerWidth > 700) {
  scrollToSlider = document.querySelector("#slider").offsetTop;
} else {
  scrollToSlider = document.querySelector("#tiny-slider").offsetTop - 50;
}
window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    scrollToSlider = document.querySelector("#slider").offsetTop;
  } else {
    scrollToSlider = document.querySelector("#tiny-slider").offsetTop;
  }
});
more.addEventListener("click", () => {
  window.scrollTo({
    top: scrollToSlider,
    behavior: "smooth",
  });
});
