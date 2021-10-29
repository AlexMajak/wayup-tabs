const tabs = document.getElementById('tabs');
const tabThree = document.getElementById('tabThree');
const content = document.querySelectorAll('.content');

console.log(tabs.children);
console.log(tabThree.children);

// console.log(contents.children);

const changeClass = element => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    element.classList.add('active');
}

const changeClassThree = element => {
    for(let i = 0; i < tabThree.children.length; i++) {
        tabThree.children[i].classList.remove('active');
    }
    // element.classList.add('active');
}

tabs.addEventListener('click', event => {
const currentTab = event.target.dataset.btn;
changeClassThree();
changeClass(event.target);
for (let i = 0; i < content.length; i++) {
    content[i].classList.remove('active');
    console.log(content[i].dataset.content);
    if(content[i].dataset.content === currentTab) {
        content[i].classList.add('active');
    }
}
})