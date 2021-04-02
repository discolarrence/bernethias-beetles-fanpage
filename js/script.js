const bioImgs = document.getElementsByClassName('bio-img');
const bioImgModals = document.getElementsByClassName('bio-modal');
const xCloseIcons = document.getElementsByClassName('x-close-icon');

function closeBioModal() {
    for (modal of bioImgModals) {
        modal.style.display = 'none';
    }
}

// show beetle bio modal on image click
for (img of bioImgs) {
    img.addEventListener('click', (event) => {
        closeBioModal();
        let beetleImg = document.getElementById(event.target.id+'-modal');
        let scrollYPosition = window.scrollY + 'px';
        beetleImg.style.display = 'flex';
        beetleImg.style.top = scrollYPosition;
    })
}

// hide bio modal with click on X
document.addEventListener('click', (event) => { 
    if (event.target.className == 'x-close-icon') {
        closeBioModal();
    }
})
