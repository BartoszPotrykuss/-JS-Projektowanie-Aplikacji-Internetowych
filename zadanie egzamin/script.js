function zamowienie () {
    let numer = document.querySelector("#numer").value;
    let waga = document.querySelector("#waga").value;
    let cena;
    switch (numer) {
        case '1': 
            cena = 5 * waga; 
            break;
        case '2': cena = 7 * waga;
            break;
        case '4': cena = 6 * waga;
            break;
        default: cena = 0;
    }
    document.querySelector("#zamowienie").innerHTML="Koszt zamówienia wynosi " +  cena + " zł";
}