// Vrijeme
function vrijeme() {
    var trenutniDatum = new Date();
    var h = trenutniDatum.getHours();
    var m = trenutniDatum.getMinutes();
    var s = trenutniDatum.getSeconds();
    h = provjeraNule(h);
    m = provjeraNule(m);
    s = provjeraNule(s);
    var d = trenutniDatum.getDate();
    var m = trenutniDatum.getMonth() + 1;
    var y = trenutniDatum.getFullYear()%100;
    d = provjeraNule(d);
    m = provjeraNule(m);
    document.getElementById("vrijeme").innerHTML = d + "/" + m + "/" + y + "<br />" + h + ":" + m + ":" + s;
    var t = setTimeout(vrijeme, 1000);
}
function provjeraNule(i) {
    if (i < 10) { i = "0" + i };  // doda 0 ispred broja manjeg on 10
    return i;
}

// Random link
function randomLinks() {
    var randomNumber = Math.floor(Math.random() * 10);
    switch (randomNumber) {
        case 0:
            link = "<a href='http://www.w3schools.com'>W3Schools</a>";
            break;
        case 1:
            link = "<a href='http://www.google.com'>Google</a>";
            break;
        case 2:
            link = "<a href='http://www.agroklub.com/'>Agroklub</a>";
            break;
        case 3:
            link = "<a href='http://www.pinova.hr'>Pinova</a>";
            break;
        case 4:
            link = "<a href='http://getbootstrap.com/'>Bootstrap</a>";
            break;
        case 5:
            link = "<a href='http://www.youtube.com/'>Youtube</a>";
            break;
        case 6:
            link = "<a href='http://loomen.carnet.hr/'>Loomen</a>";
            break;
        case 7:
            link = "<a href='https://www.isvu.hr/studomat/prijava'>Studomat</a>";
            break;
        case 8:
            link = "<a href='http://www.twitch.tv/'>Twitch.TV</a>";
            break;
        default:
            link = "<a href='http://www.mev.hr'>MEV</a>";
    }
    document.getElementById("randomLink").innerHTML = link;
}

// Kalkulator
function broj(value) {
    document.kalkulator.rezultat.value += value;
}
function ocisti(value) {
    document.kalkulator.rezultat.value = value;
}
function izracunaj() {
    //var evalu = eval(document.form1.result.value);
    document.kalkulator.rezultat.value = eval(document.kalkulator.rezultat.value);
}

// Provjera formulara
function formularProvjera() {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var emailAt = document.getElementById("email").value.indexOf("@");
    var emailTocka = document.getElementById("email").value.indexOf(".");
    var email = document.getElementById("email").value;
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    potvrda = "true";

    // provjera praznih polja za ime, prezime i email
    if (ime == "" || prezime == "" || email == "") {
        alert("Polja za ime, prezime i e-mail moraju biti popunjena!");
        potvrda = "false";
    }

    // provjera maksimalne dozvoljene velicine polja za ime
    if (ime.length > 30) {
        alert("Ime može imati najviše 30 znakova.");
        potvrda = "false";
    }

    // provjera maksimalne dozvoljene velicine polja za prezime
    if (prezime.length > 30) {
        alert("Prezime može imati najviše 30 znakova.");
        potvrda = "false";
    }

    // provjera email adrese
    // jednostavna provjera
    if (emailAt == -1 || emailAt == 0 || emailTocka == -1) {
        alert("Molimo unesite važeću email adresu.");
        potvrda = "false";
    }
    // složenija provjera sa RegExp
    //if (!regexp.test(email)) {
    //    alert("Molimo unesite važeću email adresu.");
    //    potvrda = "false";
    //}

    if (potvrda == "false") {
        return false;
    }
}

// Pokretanje funkcija
function start() {
    vrijeme();
    document.getElementById("randomClick").addEventListener("click", randomLinks);
}
window.onload = start;