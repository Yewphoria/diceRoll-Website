var randomNumber1;
var randomNumber2;

randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;

var imageLink ="./images/";
var imageNumber1="dice"+randomNumber1+".png";
var imageNumber2="dice"+randomNumber2+".png";




// dice1 section
document.querySelector(".img1").setAttribute("src",imageLink+imageNumber1);



// dice 2 section
document.querySelector(".img2").setAttribute("src",imageLink+imageNumber2);
// Title display section
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🔥 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins! 🔥"
} else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent= "🫵 Draw 🫵"
}