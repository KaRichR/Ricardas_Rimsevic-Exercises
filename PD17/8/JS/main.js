const changePageColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);//keičia į šešioliktainę sistemą, kad būtų pakeista spalva. Sužinojau internete :)))
    document.body.style.backgroundColor = "#" + randomColor;
}