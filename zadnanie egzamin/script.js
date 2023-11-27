function haslo()
{
    let haslo = document.getElementById("haslo").value;
    function sprawdzCzyMaCyfre()
{
    for (i = 0; i < haslo.length; i++)
    {
        if (Number(haslo[i])) return true; 
    }
    return false;
}
    if (haslo == "")
    {
        document.getElementById("jakoscHasla").innerHTML = "WPISZ HASŁO".fontcolor("red");
    }
    else if (sprawdzCzyMaCyfre() == false || haslo.length < 4)
    {
        document.getElementById("jakoscHasla").innerHTML = "SŁABE".fontcolor("yellow");
    }
    else if (haslo.length >= 4 && haslo.length <=6)
    {
        document.getElementById("jakoscHasla").innerHTML = "ŚREDNIE".fontcolor("blue");
    }
    else if (haslo.length >= 7)
    {
        document.getElementById("jakoscHasla").innerHTML = "DOBRE".fontcolor("green"); 
    }
}
