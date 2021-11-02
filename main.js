const tabs = document.getElementById("tabs");
const inThree = document.getElementById("inThree");
const content = document.querySelectorAll(".content");
const btnInThree = document.querySelectorAll(".tab-btn-inThree");

const changeClass = (element) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  element.classList.add("active");
};

const changeClassInThree = (element) => {
  for (let index = 0; index < inThree.children.length; index++) {
    inThree.children[index].classList.remove("active");
  }
 element.classList.add("active");
};

tabs.addEventListener("click", (event) => {
  const currentTab = event.target.dataset.btn;
  changeClass(event.target);
 for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content == currentTab) {
        content[i].classList.add("active");
    }
  }
});

inThree.addEventListener("click", (event) => {
  const currentTabIn = event.target.dataset;
  changeClassInThree(event.target);
  if (btnInThree.dataset == currentTabIn) {
    btnInThree.classList.add("active");
}
});
