// show beetle bio modal on image click
const bioImgs = document.querySelectorAll('.bio-img-container img');
const bioImgModals = document.querySelectorAll('.bio-modal');
for (i=0; i<bioImgs.length; i++) {
bioImgs[i].addEventListener('click', (event) => {
    for (i=0; i<bioImgModals.length; i++) {
        bioImgModals[i].style.display = 'none';
    }
    let beetleImg = document.getElementById(event.target.className+'-modal');
        beetleImg.style.display = 'block';
});
}

