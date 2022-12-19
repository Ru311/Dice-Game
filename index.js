var randomNumber1 = Math.floor(Math.random()*6)+1;
var imgPath1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imgPath1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imgPath2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", imgPath2);

if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").textContent = "Player 1 wins!";
}
else{
    document.querySelector(".container h1").textContent = "Player 2 wins!";
}
