
//define variables
const bioImgs = document.querySelectorAll('.bio-img-container img');
const bioImgModals = document.querySelectorAll('.bio-modal');
const xCloseIcons = document.querySelectorAll('.x-close-icon');

//close bio modals
function closeBioModal() {
    for (i = 0; i<bioImgModals.length; i++) {
        bioImgModals[i].style.display = 'none';
}};

// show beetle bio modal on image click
for (i=0; i<bioImgs.length; i++) {
    bioImgs[i].addEventListener('click', (event) => {
        closeBioModal();
        let beetleImg = document.getElementById(event.target.id+'-modal');
        beetleImg.style.display = 'flex';
    });
};

// hide bio modal with click on X
document.addEventListener('click', (event) => { 
    if (event.target.className == 'x-close-icon') {
        closeBioModal();
    };
})
