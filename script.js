debugger;
//define variables
const bioImgs = document.querySelectorAll('.bio-img-container img');
const bioImgModals = document.querySelectorAll('.bio-modal');
const xCloseIcons = document.querySelectorAll('.x-close-icon');

// show beetle bio modal on image click
function closeBioModal() {
    for (i = 0; i<bioImgModals.length; i++) {
        bioImgModals[i].style.display = 'none';
}};

for (i=0; i<bioImgs.length; i++) {
    bioImgs[i].addEventListener('click', (event) => {
        closeBioModal();
        let beetleImg = document.getElementById(event.target.className+'-modal');
        beetleImg.style.display = 'flex';
});
}

//hide beetle bio modal on close icon click
for (i = 0; i<xCloseIcons.length; i++) {
    xCloseIcons[i].addEventListener('click', (event) => {  
        closeBioModal();
});
};