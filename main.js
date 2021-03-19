var x;
var kalista;
var kalista_cena;
var dmg;
var lanterny;        //sem retard lanterny = duse
var lanterny_s;
var lanterny_cena;
var bm_cena;
var bm;
bm = 0
bm_cena = 420;
lanterny = 0;
lanterny_cena = 150;
lanterny_s = 0;
x = 0;
kalista = 0;
kalista_cena = 100;
dmg = 5


            /////DODELAT COOKIES/////

setInterval(sekundy_lan, 1000)

function sekundy_lan(){
    x = x + lanterny_s
    document.getElementById("maintxt").innerHTML = "Sebrané lanterny: " + x;
}

function Click(){
    x = x + dmg
    document.getElementById("maintxt").innerHTML = "Sebrané lanterny: " + x;
    console.log(x)
}

function buyKalista(){
    if(x >= kalista_cena){
        kalista ++
        dmg = dmg + 5
        x = x - kalista_cena
        kalista_cena = Math.round(kalista_cena * 1.5)
    }
    console.log(x)
    console.log(kalista)
    document.getElementById("dmg").innerHTML = "DMG = " + dmg;
    document.getElementById("maintxt").innerHTML = "Sebrané lanterny: " + x;
    document.getElementById("kalista").innerHTML = "koupených kalist: " + kalista
    document.getElementById("kalista_cena").innerHTML = "cena: " + kalista_cena + " lantern"
}
function buyDuse(){
    if (x >= lanterny_cena)
    {
        lanterny ++
        lanterny_s = lanterny_s + 2
        x = x - lanterny_cena
        lanterny_cena = Math.round(lanterny_cena * 1.5)
    }
    document.getElementById("duse").innerHTML = "koupených duší: " + lanterny;
    document.getElementById("maintxt").innerHTML = "Sebrané lanterny: " + x;
    document.getElementById("duse_cena").innerHTML = "cena: " + lanterny_cena + " lantern";
    document.getElementById("lanterny_s").innerHTML = "Lanterny/s = " + lanterny_s
}
function buybm(){
    if (x >= bm_cena)
    {
        bm ++;
        lanterny_s = lanterny_s + 10
        x = x - bm_cena
        bm_cena = Math.round(bm_cena * 1.5)
    }
    document.getElementById("maintxt").innerHTML = "Sebrané lanterny: " + x;
    document.getElementById("bm_cena").innerHTML = "cena: " + bm_cena + " lantern";
    document.getElementById("lanterny_s").innerHTML = "Lanterny/s = " + lanterny_s;
    document.getElementById("bm").innerHTML = "koupených přeměn: " + bm;
}

function saveCookies(){
    localStorage.x = JSON.stringify(x)
    localStorage.kalista = JSON.stringify(kalista)
    localStorage.dmg = JSON.stringify(dmg)
    localStorage.cena_k = JSON.stringify(kalista_cena)
    localStorage.cena_l = JSON.stringify(lanterny_cena)
    localStorage.lanterny = JSON.stringify(lanterny)
    localStorage.lanterny_s = JSON.stringify(lanterny_s)
    localStorage.bm = JSON.stringify(bm)
    localStorage.bm_cena = JSON.stringify(bm_cena)
    //start reusable code
}

function loadCookies(){
    try
    {
        x = JSON.parse(localStorage.x)
        kalista = JSON.parse(localStorage.kalista)
        dmg = JSON.parse(localStorage.dmg)
        kalista_cena = JSON.parse(localStorage.cena_k)
        lanterny_cena = JSON.parse(localStorage.cena_l)
        lanterny = JSON.parse(localStorage.lanterny)
        lanterny_s = JSON.parse(localStorage.lanterny_s)
        bm = JSON.parse(localStorage.bm)
        bm_cena = JSON.parse(localStorage.bm_cena)
    }
    catch{
        console.log("Nic se nedeje")
    }
    document.getElementById("maintxt").innerHTML = "Sebrané lanterny: " + x;
    document.getElementById("kalista").innerHTML = "koupených kalist: " + kalista
    document.getElementById("dmg").innerHTML = "DMG = " + dmg;
    document.getElementById("lanterny_s").innerHTML = "Lanterny/s = " + lanterny_s
    document.getElementById("duse_cena").innerHTML = "cena: " + lanterny_cena + " lantern";
    document.getElementById("duse").innerHTML = "koupených duší: " + lanterny;
    document.getElementById("kalista_cena").innerHTML = "cena: " + kalista_cena + " lantern"
    document.getElementById("bm").innerHTML = "koupených přeměn: " + bm;
    document.getElementById("bm_cena").innerHTML = "cena: " + bm_cena + " lantern";
}
