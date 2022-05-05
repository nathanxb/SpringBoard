//Meme Generator
//Needs to:
//submit a form on the page to generate new meme on page
//-accepts link to an image
//-text for top of meme
//-text for bottom of meme
//when the user submits the form, use jS to append to DOM a div which contains the meme, including the image and text
//REQUIREMENTS:
//must be able to submit multiple memes
//users should click on button to remove a meme
//when meme form is submitted, inputs should clear


//DANK color change interval
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
const letters = document.querySelectorAll('.letter');

setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000)


//form
const form = document.querySelector('#meme-info');
const imgInput = document.querySelector('#img');
const topInput = document.querySelector('#top-text')
const btmInput = document.querySelector('#btm-text')
const memeList = document.querySelector('#meme-list')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(imgInput.value)
    console.log(topInput.value)
    console.log(btmInput.value)
        //img
    const newMeme = document.createElement('div')
    newMeme.innerHTML = '<img src ="' + imgInput.value + '" style="width:600px;height:auto;">';
    newMeme.classList.add('parent')
    memeList.appendChild(newMeme);
    //meme text
    const newTopText = document.createElement('p');
    newTopText.innerText = topInput.value;
    newTopText.classList.add('top-string')
    newMeme.appendChild(newTopText);
    const newBtmText = document.createElement('p');
    newBtmText.innerText = btmInput.value;
    newBtmText.classList.add('btm-string')
    newMeme.appendChild(newBtmText);
    const div = document.createElement('div');
    newMeme.append(div)
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Delete Meme';
    newMeme.appendChild(removeButton);
    //clear inputs
    imgInput.value = ' ';
    topInput.value = ' ';
    btmInput.value = ' ';
});

//memeList modifications
memeList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});