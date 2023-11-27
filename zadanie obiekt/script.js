class samochod {
    constructor(marka, typ, rok) {
        this.marka = marka;
        this.typ = typ;
        this.rok = rok;
    }
    wypisz() {
        return `Marka: ${this.marka} <br> Typ: ${this.typ} <br> Rok: ${this.rok}`;
    }
}

function wezDane()
{
let marka, typ, rok;
marka = document.querySelector("#marka1").value;
typ = document.querySelector("#typ1").value;
rok = document.querySelector("#rok1").value;
const car1 = new samochod(marka, typ, rok);

marka = document.querySelector("#marka2").value;
typ = document.querySelector("#typ2").value;
rok = document.querySelector("#rok2").value;
const car2 = new samochod(marka, typ, rok);

marka = document.querySelector("#marka3").value;
typ = document.querySelector("#typ3").value;
rok = document.querySelector("#rok3").value;
const car3 = new samochod(marka, typ, rok);
document.querySelector("#wynik").innerHTML=`Dane pierwszego samochodu: <br><br> ${car1.wypisz()} <br><br><br> Dane drugiego: <br><br> ${car2.wypisz()} <br><br><br> Dane trzeciego samochodu: <br><br> ${car3.wypisz()}`; 
}