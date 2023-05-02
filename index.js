var randomNumber1 = getRandomNumber1(); // Created the random number variable
var randomNumber2 = getRandomNumber1(); // Created the random number variable

function getRandomNumber1(min,max){ // Created a function that returns a random number
    min = Math.ceil(1); // Min number is 1
    max = Math.floor(6); // Max number is 6
    return Math.floor(Math.random() *(max - min + 1) + min); // Calculate between min and max and return value inclusive of 1 and 6
}

console.log(randomNumber1); // Console log to check


/********DOM, getters and setters attributes for PL1 and PL2********/

document.querySelector("img.img1").getAttribute("src");
document.querySelector("img.img1").setAttribute("src","/images/dice"+randomNumber1+".png"); // Switch between the img and number
document.querySelector("img.img2").getAttribute("src");
document.querySelector("img.img2").setAttribute("src","/images/dice"+randomNumber2+".png"); // Switch between the img and number