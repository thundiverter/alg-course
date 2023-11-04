const tabBtns = document.querySelectorAll('#books-tabbtns button');
const tabBlocks = document.querySelectorAll('#books-tab');
let currentTab = 0;

function changeTab(tabId) {
    currentTab = tabId;
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('primary');
        tabBlocks[i].style.display = 'none';
        if (i === tabId) {
            tabBtns[i].classList.add('primary');
            tabBlocks[i].style.display = 'block';
        }
    }
}
changeTab(0);