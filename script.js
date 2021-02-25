// show beetle bio modal on image click
debugger;
const bigGirlImg = document.querySelector('#big-girl-img');
const bigGirlModal = document.querySelector('#big-girl-modal');
const blackbuttImg = document.querySelector('#blackbutt-img');
const blackbuttModal = document.querySelector('#blackbutt-modal');
const theOtherOneImg = document.querySelector('#the-other-one-img');
const theOtherOneModal = document.querySelector('#the-other-one-modal');
const newGirlImg = document.querySelector('#new-girl-img');
const newGirlModal = document.querySelector('#new-girl-modal');
const sicklyTwinImg = document.querySelector('#sickly-twin-img');
const sicklyTwinModal = document.querySelector('#sickly-twin-modal');
const strongTwinImg = document.querySelector('#strong-twin-img');
const strongTwinModal = document.querySelector('#strong-twin-modal');

const beetles = ["bigGirl", "blackbutt", "theOtherOne", "newGirl", "sicklyTwin", "strongTwin"];

for (i=0; i<beetles.length; i++) {
    let beetleImg = beetles[i] + "Img";
    let beetleModal = beetles[i] + "Modal";
    beetleImg.addEventListener('click', () => {
        beetleModal.style.display = 'block';
})}

// bigGirlImg.addEventListener('click', () => {
//    bigGirlModal.style.display = 'block';
// })

