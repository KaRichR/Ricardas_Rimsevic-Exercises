let button = document.createElement("button");
button.innerText = "Bet koks mygtukas";
 
button.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
}
);
 
document.getElementById("button").appendChild(button);