let tab = new Array(100);
let l1 = 0 , l2 = 0, l3 = 0, l4 = 0, l5 = 0, l6 = 0;
for (i = 0; i < 100; i++)
{
    let losowa = Math.floor(Math.random()*6+1);
    tab[i] = losowa;
    switch (losowa)
    {
        case 1: l1++;
        break;
        case 2: l2++;
        break; 
        case 3: l3++;
        break; 
        case 4: l4++;
        break; 
        case 5: l5++;
        break; 
        case 6: l6++;
        break; 
    }
}
for (i = 0; i < 100; i++)
{
    document.write(tab[i] + ", ");
}
document.write("<br> Ilość wylosowanych jedynek: " + l1);
document.write("<br> Ilość wylosowanych dwójek: " + l2);
document.write("<br> Ilość wylosowanych trójek: " + l3);
document.write("<br> Ilość wylosowanych czwórek: " + l4);
document.write("<br> Ilość wylosowanych piątek: " + l5);
document.write("<br> Ilość wylosowanych szóstek: " + l6);