// show beetle bio modal on image click
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

const beetles = [{clickImg: bigGirlImg, box: bigGirlModal}, 
    {clickImg: blackbuttImg, box: blackbuttModal}, 
    {clickImg: theOtherOneImg, box: theOtherOneModal}, 
    {clickImg: newGirlImg, box: newGirlModal},
    {clickImg: sicklyTwinImg, box: sicklyTwinModal},
    {clickImg: strongTwinImg, box: strongTwinModal}];

for (i=0; i<beetles.length; i++) {
    let beetle = beetles[i];
    beetle.clickImg.addEventListener('click', () => {
    beetle.box.style.display = 'block';
})}

