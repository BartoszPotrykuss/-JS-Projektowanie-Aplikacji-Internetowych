class Klient
{
    constructor (nazwisko, imie, email, telefon)
    {
        this.nazwisko = nazwisko;
        this.imie = imie;
        this.email = email;
        this.telefon = telefon;
    }
}

const k1 = new Klient("Abacka", "Anna", "ania@firma.com.pl", "1234567890");
const k2 = new Klient("Babacka", "Barbara", "basia@firma.edu.pl", "2345678901");
const k3 = new Klient("Cabacka", "Celestyna", "cela@firma.gov.pl", "3456789012");

function uzupelnijTabele()
{
    document.querySelector("#l1").innerHTML="1";
    document.querySelector("#naz1").innerHTML=k1.nazwisko;
    document.querySelector("#imie1").innerHTML=k1.imie;
    document.querySelector("#email1").innerHTML=k1.email;
    document.querySelector("#tel1").innerHTML=k1.telefon; 
    
    document.querySelector("#l2").innerHTML="2";
    document.querySelector("#naz2").innerHTML=k2.nazwisko;
    document.querySelector("#imie2").innerHTML=k2.imie;
    document.querySelector("#email2").innerHTML=k2.email;
    document.querySelector("#tel2").innerHTML=k2.telefon; 
    
    document.querySelector("#l3").innerHTML="3";
    document.querySelector("#naz3").innerHTML=k3.nazwisko;
    document.querySelector("#imie3").innerHTML=k3.imie;
    document.querySelector("#email3").innerHTML=k3.email;
    document.querySelector("#tel3").innerHTML=k3.telefon;  
}