window.addEventListener("DOMContentLoaded", () => {
  blurHeader();
  slideBtn();
  hiddenNav();
  imageSlider();
  btnSlide();
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

function btnSlide() {
  const listbtn = document.querySelectorAll(".content .btn");
  const nameList = document.querySelectorAll(".r-info-list a");
  const contentList = document.querySelectorAll(".place-list");

  listbtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      contentList.forEach((e) => e.classList.remove("active"));
      nameList.forEach((e) => e.classList.remove("active"));

      document.querySelector(`.r-info-list a:nth-child(${i + 1})`).classList.add("active");
      document.querySelector(`.place-list:nth-child(${i + 1})`).classList.add("active");
    });
  });

  nameList.forEach((e, i) => {
    e.addEventListener("click", (x) => {
      x.preventDefault();
      contentList.forEach((e) => e.classList.remove("active"));
      nameList.forEach((e) => e.classList.remove("active"));

      document.querySelector(`.r-info-list a:nth-child(${i + 1})`).classList.add("active");
      document.querySelector(`.place-list:nth-child(${i + 1})`).classList.add("active");
    });
  });
}

function showBtnForRecommended() {
  const showBtn = document.querySelector(".r-show-content button");
  const spanBtn = document.querySelector(".r-show-content span");
  const placeList = document.querySelector(".r-place-list");
  const placeListHeight = document.querySelector(".r-place-list").scrollHeight;

  window.addEventListener("load", () => {
    if (placeListHeight > 815) {
      showBtn.classList.add("active");
      spanBtn.classList.add("active");
    } else if (placeListHeight < 815) {
      showBtn.classList.remove("active");
      spanBtn.classList.remove("active");
      placeList.style.maxHeight = "100%";
    }
  });

  showBtn.addEventListener("click", () => {
    placeList.classList.toggle("active");
    if (placeList.classList.contains("active")) {
      showBtn.innerHTML = `
      <a href="#list-place">
        <i class="bx bx-x active"></i> Close
      </a>`;
    } else {
      showBtn.innerHTML = `
        <i class="bx bx-x"></i> Show All`;
    }
  });
}

function resizeScroll() {
  const galleryHeight = document.querySelector(".news-left .left-body").scrollHeight;
  const newsHeight = document.querySelector(".news-right").scrollHeight;
  const news = document.querySelector(".news-right .news-right-body");

  if (newsHeight > galleryHeight && screen.width > 992) {
    news.style.maxHeight = `${galleryHeight + 100}px`;
  }
}
