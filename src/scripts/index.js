const aboutUsPage = document.getElementById("about-us-page");
const div1 = document.querySelector(".div-1");
const idealsDiv = document.querySelector(".ideals-div");

const clientsPage = document.getElementById("clients-page");
const taxPage = document.getElementById("tax-page");
const accountingPage = document.getElementById("accounting-page");
const advisoryPage = document.getElementById("advisory-page");
const internationalPage = document.getElementById("international-page");
const legalPage = document.getElementById("legal-page");
const blogPage = document.getElementById("blog-page");
const contactUsPage = document.getElementById("contact-us-page");

const mainNavBar = document.getElementById("main-navbar");
const aboutUsNavBar = document.getElementById("about-us-navbar");
const secondaryNavbar = document.getElementById("about-us-navbar");
const navButton = document.querySelectorAll("button");
const pagesElementArray = document.querySelectorAll(".page-container");

// let leftPosition = -200;
// let rightPosition = -200;
// let positionLogicSwitch = 0;
let elementPosition = getOffset(div1).top + 125;

let divPosition = `${elementPosition}`;
let numberPosition = Number(divPosition) * -1;

const thePosition = [];
let currentPosition = window.scrollY;
let windowLoadCounter = 0;

window.onload = () => {
  // document.scrollTo(0, 0);

  thePosition.push(getOffset(secondaryNavbar).top);
  mainNavBar.style.display = "none";
  aboutUsNavBar.style.display = "flex";
  aboutUsPage.style.display = "grid";

  // if (windowLoadCounter < 1) {
  //   idealsDiv.childNodes.forEach((ideal) => {
  //     if (ideal.hasChildNodes() === true) {
  //       if (ideal.id === "left-column") {
  //         ideal.style.left = `-${elementPosition * 20}px`;
  //       } else if (ideal.id === "right-column") {
  //         ideal.style.right = `-${elementPosition * 20}px`;
  //       }
  //     }
  //     console.log(elementPosition);
  //   });
  // }
  windowLoadCounter++;
};

navButton.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    document.body.style.opacity = "0.2";
    const chosenPageId = e.target.id + "-page";
    if (chosenPageId === "about-us-page") {
      aboutUsNavBar.style.display = "flex";
      mainNavBar.style.display = "none";
    } else {
      mainNavBar.style.display = "flex";
      mainNavBar.childNodes.forEach((child) => {
        child.childNodes.forEach((grandchild) => {
          grandchild.parentElement.style.flex = "1";
        });
      });
    }

    document.addEventListener("mouseup", (e) => {
      document.body.style.opacity = "1";
    });

    pagesElementArray.forEach((page) => {
      if (page.id !== chosenPageId) {
        page.style.display = "none";
      }
    });

    console.log(chosenPageId);
    const chosenPage = document.getElementById(chosenPageId);
    chosenPage.style.display = "grid";
  });
});

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    bottom: rect.bottom,
    middle: (rect.bottom - rect.top) / 6 + rect.top,
  };
}

console.log(getOffset(secondaryNavbar).top);

const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
  currentPosition = window.scrollY;
  if (document.documentElement.dataset.scroll >= thePosition[0] - 60) {
    secondaryNavbar.style.minHeight = "40px";
  } else if (document.documentElement.dataset.scroll <= thePosition[0]) {
    secondaryNavbar.style.minHeight = "60px";
  }
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();

document.addEventListener("scroll", (e) => {
  elementPosition = getOffset(div1).top + 125;

  idealsDiv.childNodes.forEach((ideal) => {
    if (ideal.hasChildNodes() === true) {
      if (currentPosition < elementPosition) {
        numberPosition = currentPosition - elementPosition;
        if (ideal.id === "left-column") {
          ideal.style.left = `${numberPosition}px`;
          ideal.style.opacity = 1;
          // if (leftPosition <= 0) {
          //   leftPosition += 1;
          // } else {
          //   positionLogicSwitch = 1;
          // }
        } else if (ideal.id === "right-column") {
          ideal.style.right = `${numberPosition}px`;
          ideal.style.opacity = 1;
        }
      } else if (currentPosition > elementPosition) {
        numberPosition = elementPosition - currentPosition;
        if (ideal.id === "left-column") {
          ideal.style.left = `${numberPosition}px`;
          ideal.style.opacity = 1;
          // if (leftPosition <= 0) {
          //   leftPosition += 1;
          // } else {
          //   positionLogicSwitch = 1;
          // }
        } else if (ideal.id === "right-column") {
          ideal.style.right = `${numberPosition}px`;
          ideal.style.opacity = 1;
        }
      }
      // if (ideal.id === "left-column") {
      //   ideal.style.left = `${numberPosition}px`;
      //   ideal.style.opacity = 1;
      //   // if (leftPosition <= 0) {
      //   //   leftPosition += 1;
      //   // } else {
      //   //   positionLogicSwitch = 1;
      //   // }
      // } else if (ideal.id === "right-column") {
      //   ideal.style.right = `${numberPosition}px`;
      //   ideal.style.opacity = 1;
      // }
      // ideal.style.transition = "opacity 2s, left 1s, right 1s";
      ideal.style.opacity = "1";
    }
    // } else if (
    //   (currentPosition > elementPosition + 100 && positionLogicSwitch === 1) ||
    //   (currentPosition < elementPosition - 100 && positionLogicSwitch === 0)
    // ) {
    //   idealsDiv.childNodes.forEach((ideal) => {
    //     idealsDiv.style.transition = "opacity 1s, left 1s, right 1s";
    //     if (ideal.hasChildNodes() === true) {
    //       if (ideal.id === "left-column") {
    //         ideal.style.left = `${leftPosition}px`;
    //         if (leftPosition >= -200) {
    //           leftPosition -= 1;
    //         } else {
    //           positionLogicSwitch = 1;
    //         }
    //         // ideal.style.opacity = "0";
    //       } else if (ideal.id === "right-column") {
    //         ideal.style.right = `${rightPosition}px`;
    //         if (rightPosition >= -200) {
    //           rightPosition -= 1;
    //         } else {
    //           positionLogicSwitch = 0;
    //         }
    //         // ideal.style.opacity = "0";
    //       }
    //       ideal.style.transition = "opacity 0.5s, left 1s, right 1s";
    //     }
    //   });
    // }
  });
});
