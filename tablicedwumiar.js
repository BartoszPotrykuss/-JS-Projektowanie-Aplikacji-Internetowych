//deklaracja zmiennych
var iloscKolumn = 10;
var iloscWierszy = 10;
var napis = "";
var tablica = [];
//deklaracja drugiego wymiaru tablicy
for (var i = 0; i < iloscWierszy; i++) {
  tablica[i] = [];
}
//wypełnianie tablicy wartościami
for (var i = 0; i < iloscWierszy; i++) {
  for (var j = 0; j < iloscKolumn; j++) {
    tablica[i][j] = Math.floor(Math.random() * 100) + 1; 
  }
}
//odczytywanie tablicy i generowanie napisu
for (var i = 0; i < iloscWierszy; i++) {
  for (var j = 0; j < iloscKolumn; j++) {
    napis += tablica[i][j] + " | ";
  }
  napis += "<br>";
}
document.write(napis);
const level = [
  [1, 1, 0, 0, 2, 2, 0, 0, 1, 1],
  [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
  [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
  [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
  [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
  [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
  [1, 0, 2, 2, 2, 2, 2, 2, 0, 1],
  [1, 0, 1, 1, 2, 2, 1, 1, 0, 1],
  [1, 0, 0, 0, 2, 2, 0, 0, 0, 1],
  [1, 1, 0, 0, 2, 2, 0, 0, 1, 1],
];
for (i = 0; i < 10; i++)
{
    for (j = 0; j <10; j++)
    {
        document.write(level[i][j] + " ");
    }
    document.write("<br>")
}