import data from "./data.js";

const header__smMenu = document.querySelector(".header__sm--menu");
const header__smList = document.querySelector(".header__sm--list");

header__smMenu.onclick = () => {
  header__smList.classList.toggle("open");
};

// render article

const list__render = document.querySelector(".list__render");

let more = 3;
window.onload = function () {
  render(more);
};
function render(more) {
  if (more > data.length) {
    alert("Đã load hết thông tin");
  } else {
    let dataOutput = data.slice(0, more);
    list__render.innerHTML = dataOutput
      .map(
        (item) => ` 
  
    <div class="col l-4 m-6">
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
                  ${item.desc}
                </p>
              </div>
            </div>
            <div class="article__author">
              <span>${item.hours}</span>
              <span>${item.author}</span>
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

// view-more

const viewMore = document.querySelector(".view-more");

viewMore.onclick = () => {
  more += 3;
  render(more);
};
