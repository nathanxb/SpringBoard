const gameContainer = document.getElementById("game");
let flippedCards = 0;
let firstCard = null;
let secondCard = null;
let noClick = false;

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

//Fisher Yates Algorithm for shuffling***
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        const newDiv = document.createElement("div");
        newDiv.classList.add(color);
        newDiv.addEventListener("click", handleCardClick);
        gameContainer.append(newDiv);
    }
}

// TODO: Implement this function!
function handleCardClick(e) {
    //end function execution if noClick or target is flipped already
    if (noClick) return;
    if (e.target.classList.contains('flipped')) return;
    const currentCard = e.target;
    currentCard.style.backgroundColor = currentCard.classList[0];
    //check cards
    //flipping cards:
    if (!firstCard || !secondCard) {
        currentCard.classList.add('flipped');
        firstCard = firstCard || currentCard
        secondCard = currentCard === firstCard ? null : currentCard;
    }
    //check if matching:
    if (firstCard && secondCard) {
        noClick = true;
        let color1 = firstCard.className;
        let color2 = secondCard.className;
        //if matching:
        if (color1 === color2) {
            flippedCards += 2;
            firstCard.removeEventListener("click", handleCardClick);
            secondCard.removeEventListener("click", handleCardClick);
            firstCard = null;
            secondCard = null;
            noClick = false;
            //if not matching, flip back over:
        } else {
            //prevent user from clicking too quickly
            setTimeout(function() {
                firstCard.style.backgroundColor = '';
                secondCard.style.backgroundColor = '';
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard = null;
                secondCard = null;
                noClick = false;
            }, 1000);
        }
    }
    //beating the game
    if (flippedCards === COLORS.length) alert('YOU MATCHED ALL COLORS!');
}

let restartButton = document.querySelector('#restart');
restartButton.addEventListener("click", function(e) {


    })
    // when the DOM loads
createDivsForColors(shuffledColors);