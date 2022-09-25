// import data from "./data.js";

const header__smMenu = document.querySelector(".header__sm--menu");
const header__smList = document.querySelector(".header__sm--list");

header__smMenu.onclick = () => {
  header__smList.classList.toggle("open");
};

// render article

let itemsArticle = JSON.parse(localStorage.getItem("article__storage"))
  ? JSON.parse(localStorage.getItem("article__storage"))
  : [
      {
        id: 1,
        image: "./assets/imgs/image 46.png",
        title:
          "John Lewis to make final journey across Edmund Pettus Bridge in procession",
        description:
          "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
        hours: "2 hours ago",
        composer: "By Lucy Hiddleston  |  4min read",
      },
      {
        id: 2,
        image: "./assets/imgs/image 50.png",
        title:
          "John Lewis, civil rights giant, crosses infamous Selma bridge one final time",
        description:
          "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge",
        hours: "4 hours ago",
        composer: "By Caroline Casey  |  4min read",
      },
      {
        id: 3,
        image: "./assets/imgs/image 51.png",
        title:
          "20 Years Ago, Steve Jobs Built the ‘Coolest Computer Ever.’ It Bombed",
        description:
          "This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple’s announcement that it was putting the Cube on ice.",
        hours: "12 hours ago",
        composer: "By Lucy Hiddleston  |  4min read",
      },
      {
        id: 4,
        image: "./assets/imgs/image 52.png",
        title:
          "Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?",
        description:
          "The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.",
        hours: "8 hours ago",
        composer: "By Caroline Casey  |  4min read",
      },
      {
        id: 5,
        image: "./assets/imgs/image 58.png",
        title:
          "Making a mark in Asia: East Bengal’s 2003 Asean Cup win – a defining moment for Indian club football",
        description:
          "Beating some of the finest teams from South Asia, East Bengal became the first Indian club to win an officially recognised Asian football tournament.",
        hours: "6 hours ago",
        composer: "By Caroline Casey  |  4min read",
      },
      {
        id: 6,
        image: "./assets/imgs/img6.jpg",
        title: "The conditions are perfect for a populist resurgence in Europe",
        description:
          "Signs of torture, mutilation on bodies at Izium mass burial site: Ukraine officials September 23, 2022 Russia-Ukraine news",
        hours: "7 hours ago",
        composer: "By Caroline Casey  |  5min read",
      },
      {
        id: 7,
        image: "./assets/imgs/img7.jpg",
        title: "The conditions are perfect for a populist resurgence in Europe",
        description:
          "Signs of torture, mutilation on bodies at Izium mass burial site: Ukraine officials September 23, 2022 Russia-Ukraine news",
        hours: "7 hours ago",
        composer: "By Caroline Casey  |  5min read",
      },
      {
        id: 8,
        image: "./assets/imgs/img8.jpeg",
        title: "The conditions are perfect for a populist resurgence in Europe",
        description:
          "Signs of torture, mutilation on bodies at Izium mass burial site: Ukraine officials September 23, 2022 Russia-Ukraine news",
        hours: "7 hours ago",
        composer: "By Caroline Casey  |  5min read",
      },
      {
        id: 9,
        image: "./assets/imgs/image 52.png",
        title:
          "Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?",
        description:
          "The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.",
        hours: "8 hours ago",
        composer: "By Caroline Casey  |  4min read",
      },
    ];

const list__render = document.querySelector(".list__render");

let countArticle = 3;

// function render
let temp1 = [];
// list__render
function render() {
  let articleRender = JSON.parse(localStorage.getItem("article__storage"))
    ? JSON.parse(localStorage.getItem("article__storage"))
    : itemsArticle;

  if (countArticle <= articleRender.length) {
    let articleMain = articleRender.slice(0, countArticle);
    temp1 = articleMain.map(
      (item, index) => ` 
  <div class="col l-4 m-6 c-12">
    <div class="article__item">
      <a href="#">
        <div class="article__item--img">
          <img src="${item.image}" alt="" />
        </div>
        <div class="article__card">
          <div class="article__text">
            <h3>
              ${item.title}
            </h3>
            <div class="article__word">
              <p>
                ${item.description}
              </p>
            </div>
          </div>
          <div class="article__author">
            <span>${item.hours ? item.hours : "1 minutes ago"}</span>
            <span>${item.composer}</span>
          </div>
        </div>
      </a>
      <div class="article__actions">
            <div>
              <span>
                <i class="ti-heart"></i>
              </span>
              <span> 28 </span>
            </div>
            <div>
              <span>
                <i class="ti-upload"></i>
              </span>
              <span> 28 </span>
            </div>
            <div>
              <span>
                <i class="ti-bookmark"></i>
              </span>
            </div>
        <div class="delete__wrapper">
          <button class="btn-delete" onclick='deleteAr(${index})'>Delete</button>
        </div>
      </div>
    </div>
  </div>

`
    );
  } else {
    let articleMain = articleRender.slice(0, articleRender.length);

    temp1.innerHTML = articleMain.map(
      (item, index) => ` 
        <div class="col l-4 m-6 c-12">
        <div class="article__item">
          <a href="#">
            <div class="article__item--img">
              <img src="${item.image}" alt="" />
            </div>
            <div class="article__card">
              <div class="article__text">
                <h3>
                  ${item.title}
                </h3>
                <div class="article__word">
                  <p>
                    ${item.description}
                  </p>
                </div>
              </div>
              <div class="article__author">
                <span>${item.hours ? item.hours : "1 minutes ago"}</span>
                <span>${item.composer}</span>
              </div>
            </div>
          </a>
          <div class="article__actions">
                <div>
                  <span>
                    <i class="ti-heart"></i>
                  </span>
                  <span> 28 </span>
                </div>
                <div>
                  <span>
                    <i class="ti-upload"></i>
                  </span>
                  <span> 28 </span>
                </div>
                <div>
                  <span>
                    <i class="ti-bookmark"></i>
                  </span>
                </div>
            <div class="delete__wrapper">
              <button class="btn-delete" onclick='deleteAr(${index})'>Delete</button>
            </div>
          </div>
        </div>
      </div>
  `
    );
  }

  list__render.innerHTML = temp1.join("");
}

const createArticle = document.querySelector(".createArticle");
const modal__articleWrapper = document.querySelector(".modal__article-wrapper");
const btn__articleClose = document.querySelector(".btn__article-close");
createArticle.onclick = () => {
  modal__articleWrapper.classList.add("open");
  document.querySelector("body").style.overflow = "hidden";
  goToTop.style.display = "none";
};

btn__articleClose.onclick = () => {
  modal__articleWrapper.classList.remove("open");
  document.querySelector("body").style.overflow = "";
};

document.querySelector(".modal__article").onclick = (e) => {
  e.stopPropagation();
};

modal__articleWrapper.onclick = () => {
  modal__articleWrapper.classList.remove("open");
  document.querySelector("body").style.overflow = "";
};

// create new article

// get form submit

const btnArticleAdd = document.querySelector(".btn__article-add");
const input__title = document.querySelector("#title");
const input__img = document.querySelector("#image");
const input__composer = document.querySelector("#composer");
const input__email = document.querySelector("#email");
const input__desc = document.querySelector("#description");

const formField = ["title", "image", "composer", "email", "description"];

btnArticleAdd.onclick = function (e) {
  e.preventDefault();

  let articleData = {
    composer: "",
    description: "",
    email: "",
    image: "",
    title: "",
  };

  if (validate(articleData)) {
    itemsArticle.unshift(articleData);

    localStorage.setItem("article__storage", JSON.stringify(itemsArticle));
    render();

    clearInput();
  }
};

// clear input

function clearInput() {
  input__title.value = "";
  input__img.value = "";
  input__composer.value = "";
  input__email.value = "";
  input__desc.value = "";
}

// Validate form

function validate(articleData) {
  let isError = true;
  for (let field of formField) {
    let element = document.getElementById(field);
    console.log(element);
    const regEmail = /^\w+@(\w+\.\w+){1,2}$/;
    const regImg =
      /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/;
    if (field == "title") {
      if (element.value.trim().length < 10) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Title phải lớn hơn 10 kí tự";
        isError = false;
      }
    }

    if (field == "image") {
      if (regImg.test(element.value.trim()) == false) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Đường dẫn ảnh không hợp lệ";
        isError = false;
      }
    }

    if (field == "email") {
      if (regEmail.test(element.value.trim()) == false) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Email sai định dạng";
        isError = false;
      }
    }

    if (field == "description") {
      if (element.value.trim().length < 20) {
        element.parentElement.classList.add("red");
        element.parentElement.querySelector(".errror").innerText =
          "Description phải lớn hơn 20 kí tự";
        console.log("lan chay tiep theo");
        isError = false;
      }
    }

    if (element.value.trim() === "") {
      element.parentElement.classList.add("red");
      element.parentElement.querySelector(
        ".errror"
      ).innerText = `Vui lòng nhập ${
        element.parentElement.querySelector("label").innerText
      }`;
      isError = false;
    }

    element.oninput = () => {
      element.parentElement.classList.remove("red");
    };
    if (isError) {
      articleData[field] = element.value;
    }
  }

  if (Object.values(articleData).includes("")) {
    return false;
  } else {
    return true;
  }
}

// end create new article

// view-countArticle

const viewcountArticle = document.querySelector(".view-more");
const btnHide = document.querySelector(".btn-hide");

viewcountArticle.onclick = () => {
  countArticle += 3;
  btnHide.style.display = "block";
  render(countArticle);
};

// hide more

btnHide.onclick = function () {
  countArticle = 3;
  this.style.display = "none";
  render(countArticle);
};
// end hide more

// GOtoTop

const goToTop = document.querySelector(".goToTop");

const handleScrooll = () => {
  if (window.scrollY >= 580) {
    goToTop.style.display = "flex";
  } else {
    goToTop.style.display = "none";
  }
};

goToTop.onclick = () => {
  window.location.href = "#";
};

window.addEventListener("scroll", handleScrooll);

// end GotoTop

// toggle Theme

const lightTheme = document.querySelector(".lightTheme");
const darkTheme = document.querySelector(".darkTheme");

lightTheme.onclick = function () {
  this.style.display = "none";
  darkTheme.style.display = "flex";
  document.querySelector(".main").classList.add("dark");
  document.querySelector(".header").style.backgroundColor = "#51708b";
  document.querySelector("header").style.backgroundColor = "#51708b";
};
darkTheme.onclick = function () {
  this.style.display = "none";
  lightTheme.style.display = "flex";
  document.querySelector(".main").classList.remove("dark");
  document.querySelector(".header").style.backgroundColor = "#fff";
  document.querySelector("header").style.backgroundColor = "#fff";
};
// end toggleTheme

// delete article
const message__delete = document.querySelector(".message__delete");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
function deleteAr(index) {
  let i = index;
  message__delete.classList.add("open");

  yes.onclick = function () {
    let testDeleteStorage = JSON.parse(localStorage.getItem("article__storage"))
      ? JSON.parse(localStorage.getItem("article__storage"))
      : itemsArticle;

    testDeleteStorage.splice(i, 1);
    itemsArticle.splice(i, 1);

    localStorage.setItem("article__storage", JSON.stringify(testDeleteStorage));

    message__delete.classList.remove("open");

    render();
  };

  no.onclick = function () {
    message__delete.classList.remove("open");
  };
}
