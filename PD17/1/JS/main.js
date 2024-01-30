let button = document.createElement("button");
button.innerText = "Spausk Mane!";

button.addEventListener("click", function(){
    alert("Sveiki atvykę į JavaScript pasaulį!")
}
);

document.getElementById("button").appendChild(button);