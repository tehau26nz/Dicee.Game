var randomNumber1 = getRandomNumber1(); // Created the random number variable
var randomNumber2 = getRandomNumber1(); // Created the random number variable

function getRandomNumber1(min,max){ // Created a function that returns a random number
    min = Math.ceil(1); // Min number is 1
    max = Math.floor(6); // Max number is 6
    return Math.floor(Math.random() *(max - min + 1) + min); // Calculate between min and max and return value inclusive of 1 and 6
}


/********DOM, getters and setters attributes for PL1 and PL2********/

document.querySelector("img.img1").getAttribute("src");
document.querySelector("img.img1").setAttribute("src","/projects/Dicee.Game/images/dice"+randomNumber1+".png"); // Switch between the img and number
document.querySelector("img.img2").getAttribute("src");
document.querySelector("img.img2").setAttribute("src","/projects/Dicee.Game/images/dice"+randomNumber2+".png"); // Switch between the img and number


/********If condition that changes the title to display a winner********/
function winningPhrase(){
    if(randomNumber1<randomNumber2){
        return "Player 2 wins 🚩";
    }
    else if(randomNumber1>randomNumber2){
        return "🚩 Player 1 wins";
    }
    else if(randomNumber1===randomNumber2){
        return "Draw!";
    }
}
winningPhrase();


/********Display the correct msg********/
document.querySelector("h1").innerHTML = winningPhrase();