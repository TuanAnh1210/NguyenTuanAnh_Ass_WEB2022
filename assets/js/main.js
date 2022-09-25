import data from "./data.js";

const header__smMenu = document.querySelector(".header__sm--menu");
const header__smList = document.querySelector(".header__sm--list");

header__smMenu.onclick = () => {
  header__smList.classList.toggle("open");
};

// render article

let itemsArticle = JSON.parse(localStorage.getItem("article__storage"))
  ? JSON.parse(localStorage.getItem("article__storage"))
  : data;

const list__render = document.querySelector(".list__render");

let countArticle = 3;
window.onload = function () {
  render(countArticle);
};

// function render
function render(countArticle) {
  let articleRender = JSON.parse(localStorage.getItem("article__storage"))
    ? JSON.parse(localStorage.getItem("article__storage"))
    : itemsArticle;

  if (countArticle <= articleRender.length) {
    let articleMain = articleRender.slice(0, countArticle);
    list__render.innerHTML = articleMain
      .map(
        (item) => ` 

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
      </div>
    </div>
  </div>

`
      )
      .join("");
  } else {
    let articleMain = articleRender.slice(0, articleRender.length);

    list__render.innerHTML = articleMain
      .map(
        (item) => ` 
  
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
        </div>
      </div>
    </div>
  
  `
      )
      .join("");
  }
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

viewcountArticle.onclick = () => {
  countArticle += 3;
  render(countArticle);
};

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
