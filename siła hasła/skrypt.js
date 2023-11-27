function haslo() {
    let password = document.getElementById("password").value;
    if (password.length < 4 || wielkaLitera(password) == false || liczba(password) == false || znakSpecjalny(password) == false || malaLitera(password) == false) {
        document.getElementById("wynik").innerHTML="haslo slabe";
    }
    else if (password.length < 8) {
        document.getElementById("wynik").innerHTML="hasło średnie";       
    }
    else {
        document.getElementById("wynik").innerHTML="hasło mocne";
    }
}
function wielkaLitera(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() > 64 && password[i].charCodeAt() < 91) {
            return true;
        }
    }
    return false;
}
function malaLitera(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() > 96 && password[i].charCodeAt() < 123) {
            return true;
        }
    }
    return false;
}
function liczba(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() > 47 && password[i].charCodeAt() < 58) {
            return true;
        }
    }
    return false;
}
function znakSpecjalny(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() > 32 && password[i].charCodeAt() < 48 || password[i].charCodeAt() > 57 &&  password[i].charCodeAt() < 65) {
            return true;
        }
    }
    return false;
}
