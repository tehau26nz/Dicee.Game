var randomNumber1 = getRandomNumber1(); // Created the random number variable

function getRandomNumber1(min,max){ // Created a function that returns a random number
    min = Math.ceil(1); // Min number is 1
    max = Math.floor(6); // Max number is 6
    return Math.floor(Math.random() *(max - min + 1) + min); // Calculate between min and max and return value inclusive of 1 and 6
}

console.log(randomNumber1); // Console log to check


/********DOM, getters and setters Attributes********/

document.querySelector("img").getAttribute("src");
document.querySelector("img").setAttribute("src","/images/dice"+randomNumber1+".png"); // Switch between the images number