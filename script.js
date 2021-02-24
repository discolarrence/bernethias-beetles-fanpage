// show beetle bio text on click


const beetles = ['big-girl', 'blackbutt', 'the-other-one', 'new-girl', 'sickly-twin', 'strong-twin'];
    //beetle bio container div classes'

let bioImg = document.getElementsByClassName('bio-img');

bioImg.addEventListener('click', showBioText());
    //returns bio imgs and listens for click event to show text

function showText() {
    const text = document.querySelector("bioClass");
    text.style["display"] = "block";
};
    //sets display to block for bio text

  





