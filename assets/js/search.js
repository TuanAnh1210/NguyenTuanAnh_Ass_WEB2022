// show hide search
const searchIpt = document.querySelector(".searchIpt");
const searchMobile = document.querySelector(".search--mobile");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalClose = document.querySelector(".modal__form-close");
// const goToTop = document.querySelector(".goToTop");
searchIpt.onclick = () => {
  modal.classList.add("open");
  searchInput.focus();
  document.querySelector("body").style.overflow = "hidden";
  goToTop.style.display = "none";
};
searchMobile.onclick = () => {
  modal.classList.add("open");
  searchInput.focus();
  document.querySelector("body").style.overflow = "hidden";
  goToTop.style.display = "none";
};

modalContainer.onclick = (e) => {
  e.stopPropagation();
};

modalClose.onclick = () => {
  modal.classList.remove("open");
  document.querySelector("body").style.overflow = "";

  let NewItems = modalItems.slice(6);
  const test = NewItems.map((item) => {
    if (item.style.display == "flex") {
      item.style.display = "none";
    }
  });
  count = 8;
};

modal.onclick = function () {
  this.classList.remove("open");
  document.querySelector("body").style.overflow = "";

  let NewItems = modalItems.slice(6);
  const test = NewItems.map((item) => {
    if (item.style.display == "flex") {
      item.style.display = "none";
    }
  });
  count = 8;
};

// Search

searchInput.onkeyup = function (e) {
  for (let i = 0; i < modalItems.length; i++) {
    var text = modalItems[i].innerText.toLowerCase();

    if (text.indexOf(searchInput.value.toLowerCase()) > -1) {
      modalItems[i].style.display = "";
    } else {
      modalItems[i].style.display = "none";
    }
    if (searchInput.value.toLowerCase() == "") {
      if (i < 6) {
        modalItems[i].style.display = "";
        count = 8;
      }

      if (i > 6) {
        modalItems[i].style.display = "none";
        count = 8;
      }
    }
  }
};

// Load more
let count = 8;
const loadMore = document.querySelector(".loadMore");
let modalItems = Array.from(document.querySelectorAll(".modal__item"));

loadMore.onclick = function () {
  if (count <= modalItems.length) {
    let NewItems = modalItems.slice(5, count);
    const test = NewItems.map((item) => {
      item.style.display = "flex";
    });
  } else {
    alert("ĐÃ LOAD HẾT THÔNG TIN...!!");
  }
  count += 2;
};
