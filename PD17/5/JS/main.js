const collection = document.getElementById("tevas").children;
let text = "";
for (let i = 0; i < collection.length; i++) {
  text += collection[i].tagName + "<br>";
}
document.getElementById("demo").innerHTML = text;