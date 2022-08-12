// variable declaration

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;
// creating functions for incrementing home-score


const homeAdd1 = () => {
    homeCount += 1
    homeScore.textContent = homeCount
}

const homeAdd2 = () => {
    homeCount += 2
    homeScore.textContent = homeCount
}

const homeAdd3 = () => {
    homeCount += 3
    homeScore.textContent = homeCount
}


// creating functions for incrementing guest-score

const guestAdd1 = () => {
    guestCount += 1
    guestScore.textContent = guestCount
}

const guestAdd2 = () => {
    guestCount += 2
    guestScore.textContent = guestCount
}

const guestAdd3 = () => {
    guestCount += 3
    guestScore.textContent = guestCount
}


// Creating function for starting a new game

const newGame = () => {
    guestCount = 0;
    homeCount = 0;
    guestScore.textContent = guestCount
    homeScore.textContent = homeCount
}
