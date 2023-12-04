const slaptasSkaicius = Math.floor(Math.random() * 10) + 1;

function atspetiSkaiciu(spejamasSkaicius) {
    if (spejamasSkaicius === slaptasSkaicius) {
        alert("Sveikiname, atspėjote teisingą skaičių!");
        return true;
    } else if (spejamasSkaicius < slaptasSkaicius) {
        alert("Per mažas skaičius, bandykite dar kartą.");
    } else {
        alert("Per didelis skaičius, bandykite dar kartą.");
    }
    return false;
}

while (true) {
    const spejamasSkaicius = parseInt(prompt("Atspėkite skaičių nuo 1 iki 10:"));

    if (isNaN(spejamasSkaicius) || spejamasSkaicius < 1 || spejamasSkaicius > 10) {
        alert("Įveskite skaičių nuo 1 iki 10!");
        continue;
    }

    const atspejo = atspetiSkaiciu(spejamasSkaicius);

    if (atspejo) {
        break;
    }
}
