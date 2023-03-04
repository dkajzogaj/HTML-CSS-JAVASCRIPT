var navigacija = document.getElementById("glavna_navigacija");
if (navigacija)
    var gumbovi = navigacija.getElementsByTagName("a");
var prikaz = "Želite li napustiti stranicu ili ne?";

if (gumbovi) {
    for (var i = 0; i < gumbovi.length; i++) {
        gumbovi[i].addEventListener("click", function () {
            provjeriStranicu();
        });
    }
}

function provjeriStranicu() {
    if (confirm(prikaz) == false) {
        alert("Ostajemo na stranici: " + document.title + ".");
        event.preventDefault();
    }
}

var oblici = document.getElementById("Map");

if (oblici) {
    oblici.addEventListener("mouseover", function (event) {
        ProvjeriOblik(event);
    })
}

function ProvjeriOblik(kord) {
    /*Može se riješiti na način da se u atribute gdje su elementi doda onclick="Neka funkcija(prenesena vrijednost)
    gdje se prijenosi vrsta oblika i onda se ispisuje oblik, ali to onda nije pomocu addEventListener-a"*/

    /*-----------Za dohvaćanje koordinata-----------*/
    /*var Koordinate = "Koordinate: (" + x + "," + y + ")";
    document.getElementById("krug").innerHTML = Koordinate;*/
    var x = kord.clientX;
    var y = kord.clientY;

    if (x > 160 && x < 220 && y > 460 && y < 520) {
        document.getElementById("krug").innerHTML = "Krug: X1=150, X2=150, R=30.";
        setTimeout(function () {
            document.getElementById("krug").innerHTML = "";
        }, 2500);
    }

    if (x > 40 && x < 150 && y > 335 && y < 435) {
        document.getElementById("pravokutnik").innerHTML = "Pravokutnik: X1:0, X2:0, X3:82, X4:126.";
        setTimeout(function () {
            document.getElementById("pravokutnik").innerHTML = "";
        }, 2500);
    }

    if (x > 153 && x < 230 && y > 360 && y < 475) {
        document.getElementById("mnogokut").innerHTML = "Mnogokut: X1:22, Y1:10, X2:20, Y2:40, X3:300, Y3:110, X4:300, Y4:150, X5:150, Y5:150, X6:20, Y6: 100, X7:290, Y7:50.";
        setTimeout(function () {
            document.getElementById("mnogokut").innerHTML = "";
        }, 2500)
    }
}


/* Zadaca 3 */

var povecaj = document.getElementById("povecanje");

var pov;
var pom = false;
var interval = 10 / 1000000000

if (povecaj) {
    povecaj.addEventListener("mouseover", function (event) {
        pov = setInterval(povecavanje, interval);
    });
}

function povecavanje() {
    if (pom == true) {
        pom = false;
        povecanje.style.fontSize = "100%"
    }
    else {
        povecaj.style.fontSize = "300%";
        pom = true;
    }
}

var rotiranje = document.getElementById("rotacija");
var kut = 30;

if (rotiranje) {
    rotiranje.addEventListener("mouseover", function (event) {
        pov1 = setInterval(rotiraj, interval);
        /*Jednostavniji nacin, ali radi samo za 90 stupnjeva*/
        /*rotiranje.style.transform="rotate(90deg)";*/
    })
}

var pov1;
var pom1 = false;

function rotiraj() {
    if (pom == true) {
        pom = false;
    }
    else {
        rotiranje.setAttribute("style", "transform : rotate(" + kut + "deg)");
        kut = kut + 30;
        pom = true;
    }
}


var pozelji = document.getElementById("vlastita");

var pov2;
var pom2 = false;

if (pozelji) {
    pozelji.addEventListener("mouseover", function (event) {
        pov2 = setInterval(zelja, interval);
    });
}


function zelja() {
    if (pom2 == true) {
        pom2 = false;
        pozelji.style.color = "black";
    }
    else {
        pozelji.style.color = "blue";
        pom2 = true;
    }
};

var ime = document.getElementById("imeprijava");
var lozinka = document.getElementById("lozprijava");
var dohvacenovrijeme = document.getElementById("tr");
var poslano = document.getElementById("posalji2");

var prijava = document.getElementById("prij");
var odjava = document.getElementById("odj");

var imeKor = document.getElementById("imeKor");
var vriKor = document.getElementById("vriKor");


window.onload = function () {  
    var kolac = document.cookie;

    if(kolac){
        var zag = citajCookie("Boja1");
        var nav = citajCookie("Boja2");
        var fon = citajCookie("Font");
        var tijelomaina = citajCookie("Boja3");
        var pod = citajCookie("Boja4");
        if(zaglavlje)
            zaglavlje.style.backgroundColor = zag;
        if(navigacija)
            navigacija.style.backgroundColor = nav;
        if(tijelo)
            tijelo.style.backgroundColor = tijelomaina; 
        if(podnozje)
            podnozje.style.backgroundColor = pod;
        if(tijelo)
            tijelo.style.fontSize = fon +"px";
    }

    if (!kolac && document.title !== "Prijava" && (document.title == "Obrazac" || document.title == "Tajni dnevnik Adriana Molea")) {
        prijava.style.visibility = "visible";
        odjava.style.visibility = "hidden";
        localStorage.clear();
        window.location = "./prijava.html";
    }
    else {
        if (prijava)
            prijava.style.visibility = "hidden";
        if (odjava)
            odjava.style.visibility = "visible";
    }

    if (!kolac && document.title !== "Prijava" && (document.title == "Multimedija" || document.title == "O autoru" || document.title == "Kreativna" || document.title == "Popis" || document.title == "Pregled" || document.title == "Gumb")) {
        prijava.style.visibility = "visible";
        odjava.style.visibility = "hidden";
        localStorage.clear();
        window.location = "../prijava.html";
    }
    else {
        if (prijava)
            prijava.style.visibility = "hidden";
        if (odjava)
            odjava.style.visibility = "visible";
    }
    if (!kolac && document.title !== "Prijava" && (document.title == "Popis" || document.title == "Pregled")) {
        prijava.style.visibility = "visible";
        odjava.style.visibility = "hidden";
        localStorage.clear();
        window.location = "../prijava.html";
    }
    else {
        if (prijava)
            prijava.style.visibility = "hidden";
        if (odjava)
            odjava.style.visibility = "visible";
    }


    var pretragapoimenu = "Ime=";
    var kolac = document.cookie;
    if (kolac.length > 0) {
        pocni = kolac.indexOf(pretragapoimenu);
        if (pocni !== -1) {
            kolac = kolac.substring(pocni + pretragapoimenu.length, kolac.length);
            nakraju = kolac.indexOf(";");
            if (nakraju === -1) {
                nakraju = kolac.length;
            }
            var dohvacenKolacic = kolac.substring(pocni, nakraju);
            if (dohvacenKolacic !== null || dohvacenKolacic.length() > 0) {
                if(imeKor)
                 imeKor.innerHTML = "Korisnik: " + dohvacenKolacic;
                //Pokusao dohvatiti vrijeme na innerHTML ali pokazuje krivo, svejedno može posluzit za nesto drugo
                /*var spremivrijeme= new Date();
                var minute = function (minutes){
                return new Date(spremivrijeme.getTime()+minutes*60000);
            } 
            var b = minute(10).toString();*/
            }
        }
    }
    var pretragapoimenu = "Vrijeme=";
    var kolac = document.cookie;
    if (kolac.length > 0) {
        pocni = kolac.indexOf(pretragapoimenu);
        if (pocni !== -1) {
            kolac = kolac.substring(pocni + pretragapoimenu.length, kolac.length);
            nakraju = kolac.indexOf(";");
            if (nakraju === -1) {
                nakraju = kolac.length;
            }
            var dohvacenKolacic = kolac.substring(pocni, nakraju);
            if (dohvacenKolacic !== null || dohvacenKolacic.length() > 0) {
                if(vriKor)
                vriKor.innerHTML = "Vrijeme do isteka: " + dohvacenKolacic;
            }
        }
    }
}

function citajCookie(naziv) {
    var trazi = naziv + "=";
    var odrezi = document.cookie.split(';');
    for(var i=0;i < odrezi.length;i++) {
        var c = odrezi[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(trazi) == 0) return c.substring(trazi.length,c.length);
    }
    return null;
}


var regex2 = new RegExp("[0-9]");

var trenutnoVrijeme = new Date();
var gotovo = new Date();
var gotovo1 = new Date();
var gotovo2 = new Date();

var as;
var ab;

if (poslano) {
    poslano.addEventListener("click", function (event) {
        if (ime.value != "" && lozinka.value != "" && dohvacenovrijeme.value.match(regex2)) {
            var kucanovrijeme = parseInt(document.obraz.tra.value);
            gotovo.setTime(trenutnoVrijeme.getTime() + 1000 * kucanovrijeme);
            gotovo1.setTime(trenutnoVrijeme.getTime() + 1000 * kucanovrijeme);
            gotovo2.setTime(trenutnoVrijeme.getTime() + 1000 * kucanovrijeme);
            document.cookie = "Ime=" + ime.value + "; lozinka=" + lozinka.value + "; expires=" + gotovo.toGMTString() + ";";
            as = document.cookie = "Vrijeme = " + " pomocni =  " + gotovo + "; expires = " + gotovo1.toGMTString() + ";";
            ab = document.cookie = "Za dizajn = " + " pomocni =  " + gotovo1.toGMTString() + "; expires = " + gotovo2.toGMTString() + ";";
            window.location = "./index.html";
        }
    })
};



if (odjava) {
    odjava.addEventListener("click", function (event) {
        var istice = "01 Jan 1970 00:00:00 GMT; path=/OWT/2022/zadaca_03/dkajzogaj20";
        document.cookie = "Ime= ; expires=" + istice + ";";
        document.cookie = "Vrijeme= ; expires=" + istice + ";";
        document.cookie = "Za dizajn= ; expires=" + istice + ";";
        document.cookie = "Boja1 = ; expires=" + istice + ";";
        document.cookie = "Font = ; expires=" + istice + ";";
        document.cookie = "Boja2 = ; expires=" + istice + ";";
        document.cookie = "Boja3 = ; expires=" + istice + ";";
        document.cookie = "Boja4 = ; expires=" + istice + ";";

        imeKor.innerHTML = "";
        vriKor.innerHTML = "";
        localStorage.clear();
        if (document.title !== "Prijava" && (document.title == "Obrazac" || document.title == "Tajni dnevnik Adriana Molea")) {
            window.location = "./prijava.html";
        }
        else if (document.title !== "Prijava" && (document.title == "Kreativna" || document.title == "Multimedija" || document.title == "O autoru" || document.title == "Gumb")) {
            window.location = "../prijava.html";
        }
        else {
            window.location = "../prijava.html";
        }
    })
}


var gumb = document.getElementById("tipka");
//Za otvaranje prozora u window modu
var otvorinovi;

if (gumb) {
    gumb.addEventListener("click", function (event) {
        if (document.title !== "Prijava" && (document.title == "Obrazac" || document.title == "Tajni dnevnik Adriana Molea")) {
            otvorinovi = window.open("./Ostalo/gumb.html", "noviProzor", "width=400, height=400");
            //window.location = "./Ostalo/gumb.html";
        }
        else if (document.title !== "Prijava" && (document.title == "Kreativna" || document.title == "Multimedija" || document.title == "O autoru")) {
            otvorinovi = window.open("./gumb.html", "noviProzor", "width=400, height=400");
            //window.location = "./gumb.html";
        }
        else {
            otvorinovi = window.open("../Ostalo/gumb.html", "noviProzor", "width=400, height=400");
            //window.location = "../Ostalo/gumb.html";
        }
    })
}

var poslani = document.getElementById("posalji3");
var zaglavlje = document.getElementById("na-vrh");
var navigacija = document.getElementById("boja");
var tijelo = document.getElementById("glavno");
var podnozje = document.getElementById("boja4");

var boja1 = document.getElementById("boje");
var font = document.getElementById("vel");
var boja2 = document.getElementById("boje1");
var boja3 = document.getElementById("boje2");
var boja4 = document.getElementById("boje3");



if (document.cookie)
    var istici = document.cookie.split("; ")[1].split("= ")[1];

console.log(istici);


if (poslani) {
    poslani.addEventListener("click", function (event) {
        document.cookie = "Boja1 = " + boja1.value + "; expires = " + istici + "; path = /OWT/2022/zadaca_03/dkajzogaj20" + ";";
        document.cookie = "Font = " + font.value + "; expires = " + istici + "; path = /OWT/2022/zadaca_03/dkajzogaj20" + ";";
        document.cookie = "Boja2 = " + boja2.value + "; expires = " + istici + "; path = /OWT/2022/zadaca_03/dkajzogaj20" + ";";
        document.cookie = "Boja3 = " + boja3.value + "; expires = " + istici + "; path = /OWT/2022/zadaca_03/dkajzogaj20" + ";";
        document.cookie = "Boja4 = " + boja4.value + "; expires = " + istici + "; path = /OWT/2022/zadaca_03/dkajzogaj20" + ";";
        /*localStorage.setItem("Zaglavlje",boja1.value);
        localStorage.setItem("Font" , font.value);
        localStorage.setItem("Navigacija",boja2.value)
        localStorage.setItem("Tijelo", boja3.value);
        localStorage.setItem("Podnozje", boja4.value);*/
        //window.location = "../index.html";
        //Za window mode
        otvorinovi = window.close();
        window.opener.location.reload();
    })
}

var prikazcanvasa = document.getElementById("glavno");
var prikazi = document.getElementById("temp");
if (prikazi)
    var clon = prikazi.content.cloneNode(true);
if (prikazi)
    prikazcanvasa.appendChild(clon);

var gumb2 = document.getElementById("tipka2");

var canvasgumb = document.getElementById("posalji4");
var forma4 = document.getElementById("forma2");


var canvasboja = document.getElementById("bojastupaca");
var canvasstupci = document.getElementById("brstupaca");
var canvas = document.getElementById("canvas");

var brojstupaca = 1;

if (forma4) {
    forma4.style.visibility = "hidden";
}

if (gumb2) {
    gumb2.addEventListener("click", function (event) {
        var ctx = canvas.getContext("2d");
        var ctx2 = canvas.getContext("2d");
        var ctx3 = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        ctx3.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = null;
        ctx2.fillStyle = null;
        ctx3.fillStyle = null;
        if (document.title == "Tajni dnevnik Adriana Molea") {
            forma4.style.visibility = "visible";
            canvasgumb.addEventListener("click", function (event) {
                if (canvasstupci.value == 1) {
                    ctx.fillStyle = canvasboja.value;
                    ctx.fillRect(10, 10, 10, 20);
                }
                else if (canvasstupci.value == 2) {
                    ctx.fillStyle = canvasboja.value;
                    ctx2.fillStyle = canvasboja.value;
                    ctx.fillRect(10, 10, 10, 20);
                    ctx2.fillRect(25, 25, 10, 20);
                }
                else {
                    ctx.fillStyle = canvasboja.value;
                    ctx2.fillStyle = canvasboja.value;
                    ctx3.fillStyle = canvasboja.value;
                    ctx.fillRect(10, 10, 10, 20);
                    ctx2.fillRect(25, 25, 10, 20);
                    ctx3.fillRect(55, 55, 10, 20);
                }
                forma4.style.visibility = "hidden";
                event.preventDefault();
            })
        }
    })
}



/*Zadaca 2 i 3 vezano uz obrazac*/
/*Obrazac*/

var obrazac = document.getElementById("forma");
var forma1 = document.getElementById("field1");
var forma2 = document.getElementById("field2");

if (forma2)
    forma2.style.visibility = "hidden";

var prikazano = false;
var prikazano1 = false;
var prikazano2 = false;
var prikazano3 = false;

var provjera = 0;
var j = 0;

var prikazano4 = false;
var prikazano5 = false;
var prikazano6 = false;
var prikazano7 = false;
var prikazano8 = false;
var prikazano9 = false;
var prikazano10 = false;
var prikazano11 = false;

var pripomoc = false;

if (obrazac) {
    obrazac.addEventListener("submit", function (event) {
        Obrazac(event);
    })
}

if (obrazac) {
    obrazac.addEventListener("reset", function (event) {
        ispocetka(event);
    })
}

var klik = document.getElementById("posalji");
var brojac = 0;

if (klik) {
    klik.onclick = function () {
        brojac++;
    }
}

//7. pod a
var regex = new RegExp("[A-Za-z]");

//Specijalni element za brojeve

var regex4 = new RegExp(/^(\d{1,2}|100)$/);

//Datum
var regex5 = new RegExp(/^([0-3]{1}\d)\.([0-1]{1}\d)\.(\d{4}) ([0-2]{1}\d):([0-5]{1}\d):([0-5]{1}\d)$/);

//Višelinijski
var regex6 = new RegExp(/^(?!.*\.\.)[^"'<>]{100,1000}$/);


function Obrazac(event) {
    if (prikazano == false) {
        if (document.getElementById("super").checked || document.getElementById("ljevak").checked || document.getElementById("arkadija").checked || document.getElementById("znanje").checked) {
            prikazano1 = true;
            event.preventDefault();
        }
        else {
            document.getElementById("knjizara").innerHTML = "*Odaberite knjižaru:";
            document.getElementById("s1").style.color = "red";
            document.getElementById("s2").style.color = "red";
            document.getElementById("s3").style.color = "red";
            document.getElementById("s4").style.color = "red";
            event.preventDefault();
        }
        if (!document.getElementById("kol").value.match(regex4)) {
            document.getElementById("kolic").innerHTML = "*Količina:";
            document.getElementById("kol").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            prikazano2 = true;
            event.preventDefault();
        }
        if (document.getElementById("url").value == "") {
            document.getElementById("url").innerHTML = "*Unesite URL: ";
            document.getElementById("url").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            const msg = new String(document.getElementById("url").value);
            if(msg[1]=="?" || msg[1]=="&" || msg[1]=="="){
                pripomoc=true;
            }
            if(pripomoc==true){
            var a = new String(msg.split("&"));
            var b = new String(a.split("="));
            var c = new String(b.split(","));
            var d = new String(c.split("?"));
            var e = d.split(",");
            
            var k=2;
            for(var i=1;i<e.length;i+=2){
                    alert("Get parametar " + e[i] + " i vrijednost " + e[k] + " nisu dozvoljeni na ovoj stranici");
                    k+=2;
            }}
            //Console log za ispis parametara da se mogu snac
            //console.log(e);
            prikazano11 = true;
            event.preventDefault();
        }

        for (var i = 0; i < document.getElementById("knjige").options.length; i++) {
            if (document.getElementById("knjige").options[i].selected && document.getElementById("knjige").options[i].value !== "-1") {
                provjera[j++] = document.getElementById("knjige").options[i].text;
            }

        }
        if (j < 2) {
            document.getElementById("odabir").innerHTML = "*Odaberite knjige:";
            document.getElementById("knjige").style.borderColor = "red";
            event.preventDefault();
        }
        else if (prikazano2 == true && prikazano1 == true) {
            prikazano3 = true;
            event.preventDefault();
        }
        if (prikazano1 == true && prikazano2 == true && prikazano3 == true && prikazano11==true) {
            prikazano = true;
        }
    }
    if (prikazano == true && prikazano1 == true && prikazano2 == true && prikazano3 == true && prikazano11 == true) {
        document.getElementById("knjizara").innerHTML = "Odaberite knjižaru:";
        document.getElementById("s1").style.color = "black";
        document.getElementById("s2").style.color = "black";
        document.getElementById("s3").style.color = "black";
        document.getElementById("s4").style.color = "black";

        document.getElementById("kolic").innerHTML = "Kolicina:";
        document.getElementById("kol").style.removeProperty('border');

        document.getElementById("odabir").innerHTML = "Odaberite knjige:";
        document.getElementById("knjige").style.removeProperty('border');

        document.getElementById("url").innerHTML = "Unesite URL: ";
        document.getElementById("url").style.removeProperty('border');

        forma2.style.visibility = "visible";

        if (!document.getElementById("datumivrijeme").value.match(regex5)) {
            document.getElementById("datumtekst").innerHTML = "*Datum i vrijeme dostave pošiljke:";
            document.getElementById("datumivrijeme").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            document.getElementById("datumtekst").innerHTML = "Datum  i vrijeme dostave pošiljke:";
            document.getElementById("datumivrijeme").style.removeProperty('border');
            prikazano4 = true;
            event.preventDefault();
        }
        if (!document.getElementById("ime").value.match(regex)) {
            document.getElementById("imetekst").innerHTML = "*Ime i prezime:";
            document.getElementById("ime").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            document.getElementById("imetekst").innerHTML = "Ime i prezime:";
            document.getElementById("ime").style.removeProperty('border');
            prikazano6 = true;
            event.preventDefault();
        }
        if (!document.getElementById("vištext").value.match(regex6)){
            document.getElementById("višelintext").innerHTML = "*Unesite posebne zahtjeve pošiljke:";
            document.getElementById("vištext").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            document.getElementById("višelintext").innerHTML = "Unesite posebne zahtjeve pošiljke:";
            document.getElementById("vištext").style.removeProperty('border');
            prikazano7 = true;
            event.preventDefault();
        }

        if (document.getElementById("mob").value == "") {
            document.getElementById("mobitel").innerHTML = "*Mobitel:";
            document.getElementById("mob").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            document.getElementById("mobitel").innerHTML = "Mobitel:";
            document.getElementById("mob").style.removeProperty('border');
            prikazano8 = true;
            event.preventDefault();
        }

        if (document.getElementById("mail").value == "") {
            document.getElementById("mailtext").innerHTML = "*Vaša E-pošta:";
            document.getElementById("mail").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            document.getElementById("mailtext").innerHTML = "Vaša E-pošta:";
            document.getElementById("mail").style.removeProperty('border');
            prikazano9 = true;
            event.preventDefault();
        }

        if (document.getElementById("mjesto").value == "") {
            document.getElementById("loktext").innerHTML = "*Vaša lokacija:";
            document.getElementById("mjesto").style.borderColor = "red";
            event.preventDefault();
        }
        else {
            document.getElementById("loktext").innerHTML = "Vaša lokacija:";
            document.getElementById("mjesto").style.removeProperty('border');
            prikazano10 = true;
            event.preventDefault();
        }
    }
    /*Ovo sve iznad je za prvi korak pri prikazu formi i ispunjavanju forme, kasnije dolazi for petlja koja ce jos jednom prije nego se posalje
    ponovo preispitivat sve dok se ne unesi ispravne trazene mjere i tako do kraja dok se ne ispuni sve kako treba*/
    /*Mozda ova for petlja nije potrebna, ali bez nje se nebi mogli vise puta ispitivati, a i ako bi stavio samo for petlju
    bez ovog gore onda mi se nebi uspjeli prikazivati obrasci kako je trazeno u pdfu-u, redom vec bi se non stop vrtilo dok ne bi ispunili kako spada
    prvu formu, pa bi se tek druga prikazala, a i nebi se lijepo prikazivalo*/
    for (var i = 0; i < brojac; i++) { /* For petlja zato da provjerava dok svi elementi nisu ispravno popunjeni neće poslati submit!*/
        if (document.getElementById("super").checked || document.getElementById("ljevak").checked || document.getElementById("arkadija").checked || document.getElementById("znanje").checked) {
            prikazano1 = true;
            event.preventDefault();
        }
        else {
            document.getElementById("knjizara").innerHTML = "*Odaberite knjižaru:";
            document.getElementById("s1").style.color = "red";
            document.getElementById("s2").style.color = "red";
            document.getElementById("s3").style.color = "red";
            document.getElementById("s4").style.color = "red";
            prikazano1 = false;
            event.preventDefault();
        }

        if (!document.getElementById("kol").value.match(regex4)) {
            document.getElementById("kolic").innerHTML = "*Količina:";
            document.getElementById("kol").style.borderColor = "red";
            prikazano2 = false;
            event.preventDefault();
        }
        else {
            prikazano2 = true;
            event.preventDefault();
        }
    
        if (document.getElementById("url") == "") {
            document.getElementById("url").innerHTML = "*Unesite URL: ";
            document.getElementById("url").style.borderColor = "red";
            prikazano11=false;
            event.preventDefault();
        }
        else {
            const msg = new String(document.getElementById("url").value);
            for(var i=0;i<msg.length;i++){
                if(msg[i]=="?" || msg[i]=="&" || msg[i]=="=")
                    pripomoc=true;
            }
            if(pripomoc==true){
            var a = new String(msg.split("&"));
            var b = new String(a.split("="));
            var c = new String(b.split(","));
            var d = new String(c.split("?"));
            var e = d.split(",");
            
            var k=2;
            for(var i=1;i<e.length;i+=2){
                    alert("Get parametar " + e[i] + " i vrijednost " + e[k] + " nisu dozvoljeni na ovoj stranici");
                    k+=2;
            }}
            //Console log za ispis parametara da se mogu snac
            //console.log(e);
            prikazano11 = true;
            event.preventDefault();
        }

        for (var i = 0; i < document.getElementById("knjige").options.length; i++) {
            if (document.getElementById("knjige").options[i].selected && document.getElementById("knjige").options[i].value !== "-1") {
                provjera[j++] = document.getElementById("knjige").options[i].text;
            }

        }
        if (j < 2) {
            document.getElementById("odabir").innerHTML = "*Odaberite knjige:";
            document.getElementById("knjige").style.borderColor = "red";
            prikazano3 = false;
            event.preventDefault();
        }
        else if (prikazano2 == true && prikazano1 == true) {
            prikazano3 = true;
            event.preventDefault();
        }
        if (prikazano1 == true && prikazano2 == true && prikazano3 == true && prikazano11 == true) {
            prikazano = true;
        }
        if (prikazano == true && prikazano1 == true && prikazano2 == true && prikazano3 == true && prikazano11 == true) {
            document.getElementById("knjizara").innerHTML = "Odaberite knjižaru:";
            document.getElementById("s1").style.color = "black";
            document.getElementById("s2").style.color = "black";
            document.getElementById("s3").style.color = "black";
            document.getElementById("s4").style.color = "black";

            document.getElementById("kolic").innerHTML = "Kolicina:";
            document.getElementById("kol").style.removeProperty('border');

            document.getElementById("odabir").innerHTML = "Odaberite knjige:";
            document.getElementById("knjige").style.removeProperty('border');

            document.getElementById("url").innerHTML = "Unesite URL: ";
            document.getElementById("url").style.borderColor = "black";

            forma2.style.visibility = "visible";

            if (!document.getElementById("datumivrijeme").value.match(regex5)) {
                document.getElementById("datumtekst").innerHTML = "*Datum i vrijeme dostave pošiljke:";
                document.getElementById("datumivrijeme").style.borderColor = "red";
                prikazano4 = false;
                event.preventDefault();
            }
            else {
                document.getElementById("datumtekst").innerHTML = "Datum i vrijeme dostave pošiljke:";
                document.getElementById("datumivrijeme").style.removeProperty('border');
                prikazano4 = true;
                event.preventDefault();
            }
            if (!document.getElementById("ime").value.match(regex)) {
                document.getElementById("imetekst").innerHTML = "*Ime i prezime:";
                document.getElementById("ime").style.borderColor = "red";
                prikazano6 = false;
                event.preventDefault();
            }
            else {
                document.getElementById("imetekst").innerHTML = "Ime i prezime:";
                document.getElementById("ime").style.removeProperty('border');
                prikazano6 = true;
                event.preventDefault();
            }
            if (!document.getElementById("vištext").value.match(regex6)){
                document.getElementById("višelintext").innerHTML = "*Unesite posebne zahtjeve pošiljke:";
                document.getElementById("vištext").style.borderColor = "red";
                prikazano7 = false;
                event.preventDefault();
            }
            else {
                document.getElementById("višelintext").innerHTML = "Unesite posebne zahtjeve pošiljke:";
                document.getElementById("vištext").style.removeProperty('border');
                prikazano7 = true;
                event.preventDefault();
            }

            if (document.getElementById("mob").value == "") {
                document.getElementById("mobitel").innerHTML = "*Mobitel:";
                document.getElementById("mob").style.borderColor = "red";
                prikazano8 = false;
                event.preventDefault();
            }
            else {
                document.getElementById("mobitel").innerHTML = "Mobitel:";
                document.getElementById("mob").style.removeProperty('border');
                prikazano8 = true;
                event.preventDefault();
            }

            if (document.getElementById("mail").value == "") {
                document.getElementById("mailtext").innerHTML = "*Vaša E-pošta:";
                document.getElementById("mail").style.borderColor = "red";
                prikazano9 = false;
                event.preventDefault();
            }
            else {
                document.getElementById("mailtext").innerHTML = "Vaša E-pošta:";
                document.getElementById("mail").style.removeProperty('border');
                prikazano9 = true;
                event.preventDefault();
            }

            if (document.getElementById("mjesto").value == "") {
                document.getElementById("loktext").innerHTML = "*Vaša lokacija:";
                document.getElementById("mjesto").style.borderColor = "red";
                prikazano10 = false;
                event.preventDefault();
            }
            else {
                document.getElementById("loktext").innerHTML = "Vaša lokacija:";
                document.getElementById("mjesto").style.removeProperty('border');
                prikazano10 = true;
                event.preventDefault();
            }
        }
    }

    if (prikazano1 == true && prikazano2 == true && prikazano3 == true && prikazano4 == true && prikazano6 == true && prikazano7 == true && prikazano8 == true && prikazano9 == true && prikazano10 == true && prikazano11 == true)
        obrazac.submit();
};


function ispocetka(event) {
    document.getElementById("forma").reset();

    forma2.style.visibility = "hidden";

    prikazano = false;
    prikazano1 = false;
    prikazano2 = false;
    prikazano3 = false;
    prikazano4 = false;
    prikazano5 = false;
    prikazano6 = false;
    prikazano7 = false;
    prikazano8 = false;
    prikazano9 = false;
    prikazano10 = false;
    prikazano11 = false;

    pripomoc = false;

    document.getElementById("knjizara").innerHTML = "Odaberite knjižaru:";
    document.getElementById("s1").style.color = "black";
    document.getElementById("s2").style.color = "black";
    document.getElementById("s3").style.color = "black";
    document.getElementById("s4").style.color = "black";

    document.getElementById("kolic").innerHTML = "Kolicina:";
    document.getElementById("kol").style.removeProperty('border');

    document.getElementById("odabir").innerHTML = "Odaberite knjige:";
    document.getElementById("knjige").style.removeProperty('border');
    
    i=0;
    j = 0;
    brojac = 0;

    document.getElementById("datumtekst").innerHTML = "Datum i vrijeme dostave pošiljke:";
    document.getElementById("datumivrijeme").style.removeProperty('border');
 
    document.getElementById("imetekst").innerHTML = "Ime i prezime:";
    document.getElementById("ime").style.removeProperty('border');

    document.getElementById("višelintext").innerHTML = "Unesite posebne zahtjeve pošiljke:";
    document.getElementById("vištext").style.removeProperty('border');

    document.getElementById("mobitel").innerHTML = "Mobitel:";
    document.getElementById("mob").style.removeProperty('border');

    document.getElementById("mailtext").innerHTML = "Vaša E-pošta:";
    document.getElementById("mail").style.removeProperty('border');

    document.getElementById("loktext").innerHTML = "Vaša lokacija:";
    document.getElementById("mjesto").style.removeProperty('border');

    document.getElementById("url").innerHTML = "Unesite URL: ";
    document.getElementById("url").style.removeProperty('border');

}
