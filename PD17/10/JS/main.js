function sortAsc(){
    let myListForSort = document.getElementById("list");
    const myArray = Array.from(myListForSort.getElementsByTagName('li'));
    myArray.sort(function(a, b){
        return a.textContent.localeCompare(b.textContent)
    });

    myListForSort.innerHTML = '';
    myArray.forEach(function(element){
        myListForSort.appendChild(element);
    });
}

function sortDesc() {
    let myListForSort = document.getElementById("list");
    const myArray = Array.from(myListForSort.getElementsByTagName('li'));
    
    myArray.sort(function(a, b) {
        return b.textContent.localeCompare(a.textContent);
    });

    myListForSort.innerHTML = '';
    
    myArray.forEach(function(element) {
        myListForSort.appendChild(element);
    });
}
