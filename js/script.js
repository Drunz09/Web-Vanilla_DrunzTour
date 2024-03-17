window.addEventListener("DOMContentLoaded", () => {
  blurHeader();
  slideBtn();
  hiddenNav();
  imageSlider();
  recommendedListContent();
  showBtnForRecommended();
  resizeScroll();
});

function blurHeader() {
  const header = document.querySelector(".header");
  const lengthBanner = document.querySelector(".banner").scrollHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= lengthBanner) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}

function slideBtn() {
  const lengthBanner = document.querySelector(".banner").scrollHeight;
  const nextBtn = document.querySelector(".next-btn");
  const prevtBtn = document.querySelector(".prev-btn");
  const slides = document.querySelectorAll(".slide");
  const numberOfSlides = slides.length;
  let slideNumber = 0;

  function timerBanner() {
    timeInt = setInterval(() => {
      slides.forEach((e) => {
        e.classList.remove("active");
      });

      slideNumber++;
      if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
    }, 15000);
  }

  nextBtn.addEventListener("click", () => {
    slides.forEach((e) => {
      e.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    clearInterval(timeInt);
    timerBanner();
  });

  prevtBtn.addEventListener("click", () => {
    slides.forEach((e) => {
      e.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
      slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    clearInterval(timeInt);
    timerBanner();
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY >= lengthBanner) {
      clearInterval(timeInt);
    }
  });

  timerBanner();
}

function hiddenNav() {
  const ham = document.querySelector(".ham-menu");
  const hamSpan = document.querySelectorAll(".ham-menu span");

  const hide = document.querySelector(".hidden");
  const hideText = document.querySelectorAll(".h-navbar a");

  ham.addEventListener("click", () => {
    hide.classList.toggle("active");

    hamSpan.forEach((e) => {
      e.classList.toggle("active");
    });

    hideText.forEach((e) => {
      e.addEventListener("click", () => {
        hide.classList.remove("active");
        hamSpan.forEach((e) => {
          e.classList.remove("active");
        });
      });
    });
  });
}

function imageSlider() {
  const sliderPromo = document.querySelector(".promo");
  const prevBtn = document.querySelector(".promo-prev");
  const nextBtn = document.querySelector(".promo-next");
  const promoList = document.querySelector(".promo-list");

  sliderPromo.addEventListener("wheel", (e) => {
    sliderPromo.style.scrollBehavior = "auto";
    if (screen.width >= 1400) {
      e.preventDefault();
      promoList.scrollLeft += e.deltaY;
    }
  });

  prevBtn.addEventListener("click", () => {
    promoList.style.scrollBehavior = "smooth";
    if (screen.width >= 1400) {
      promoList.scrollLeft -= 531;
    } else {
      promoList.scrollLeft -= 416;
    }
  });

  nextBtn.addEventListener("click", () => {
    promoList.style.scrollBehavior = "smooth";
    if (screen.width >= 1400) {
      promoList.scrollLeft += 531;
    } else {
      promoList.scrollLeft += 416;
    }
  });
}

function recommendedListContent() {
  const nameList = document.querySelectorAll(".r-info-list a");
  const contentList = document.querySelectorAll(".place-list");

  nameList.forEach((e) => {
    e.addEventListener("click", (x) => {
      x.preventDefault();
      contentList.forEach((e) => e.classList.remove("active"));

      const attHref = e.getAttribute("href");
      if (attHref == "#indonesia") {
        document.querySelector(".place-list:nth-child(1)").classList.add("active");
      } else if (attHref == "#malaysia") {
        document.querySelector(".place-list:nth-child(2)").classList.add("active");
      } else if (attHref == "#thailand") {
        document.querySelector(".place-list:nth-child(3)").classList.add("active");
      } else if (attHref == "#singapore") {
        document.querySelector(".place-list:nth-child(4)").classList.add("active");
      } else if (attHref == "#vietname") {
        document.querySelector(".place-list:nth-child(5)").classList.add("active");
      } else if (attHref == "#japan") {
        document.querySelector(".place-list:nth-child(6)").classList.add("active");
      }
    });
  });
}

function showBtnForRecommended() {
  const showBtn = document.querySelector(".r-show-content button");
  const placeList = document.querySelector(".r-place-list");
  const placeListHeight = document.querySelector(".r-place-list").scrollHeight;

  window.addEventListener("load", () => {
    if (placeListHeight > 715) {
      showBtn.classList.add("active");
    } else if (placeListHeight < 715) {
      showBtn.classList.remove("active");
      placeList.style.maxHeight = "100%";
    }
  });

  showBtn.addEventListener("click", () => {
    placeList.classList.toggle("active");
    if (placeList.classList.contains("active")) {
      showBtn.innerHTML = "Close";
    } else {
      showBtn.innerHTML = "Show All";
    }
  });
}

function resizeScroll() {
  const galleryHeight = document.querySelector(".news-left .left-body").scrollHeight;
  const newsHeight = document.querySelector(".news-right").scrollHeight;
  const news = document.querySelector(".news-right .news-right-body");

  if (newsHeight > galleryHeight) {
    news.style.maxHeight = `${galleryHeight + 100}px`;
  }
}
