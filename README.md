<!doctype html>
<html>
    <head>
        <title>Captain America: Civil War</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles/main.css">
    </head>
    <body>
        <div class="container">
            <div class="navbar">
                <a href="#" class="nav-link active">CA:CW</a>
                <a href="#" class="nav-link active">Domů</a>
                <a href="#" class="nav-link">O filmu</a>
                <a href="#" class="nav-link">Týmy</a>
                <a href="#" class="nav-link">Média</a>
            </div>

            <div class="jumbotron">
                <h1>Captain America</h1>
                <h2>Občanská válka</h2>
                <p>
                    Film studia Marvel Captain America: Občanská válka se odehrává v době, kdy Steve Rogers převzal vedení nově zformovaného týmu Avengers, který se nadále snaží chránit lidstvo. Dojde však k dalšímu incidentu, ve kterém sehrají Avengers nešťastnou roli. Politické tlaky vyústí ve vytvoření systému zodpovědnosti vedenému vládní organizací, jež na tým super-hrdinů dohlíží a řídí ho. Nová skutečnost Avengers rozdělí na dva tábory. Jeden vede Steve Rogers, jež hájí svobodu Avengers, aby mohli bránit lidstvo bez vládních zásahů. Druhý vede Tony Stark, který překvapivě zastává myšlenku vládního dohledu a zodpovědnosti. Připravte se vybrat si svou stranu a přidat se k non-stop akci na dvou frontách.
                </p>
                <a href="https://www.youtube.com/watch?v=xnv__ogkt0M" target="_blank">
                    <button class="btn">Trailer</button>
                </a>
            </div>

            <div class="main-grid">
                <div class="postavy">
                    <h1 class="postavy-h">Postavy</h1>
                <div class="gallery">
                    <img class="m1" src="./img/a5 - Captain America.jpg" alt="CaptainAmerica">
                    <img class="m2" src="./img/b2 - Iron Man.jpg" alt="IronMan">
                    <img class="l1" src="./img/a3 - Hawkeye.jpg" alt="Hawkeye">
                    <img class="r1" src="./img/b3 - The Vision.jpg" alt="TheVision">
                    <img class="l2" src="./img/a4 - Scarlet Witch.jpg" alt="ScarletWitch">
                    <img class="r2" src="./img/b4 - Black Widow.jpg" alt="BlackWidow">
                    <img class="l3" src="./img/a6 - Winter Soldier.jpg" alt="WinterSoldier">
                    <img class="r3" src="./img/b5 - Black Panther.jpg" alt="BlackPanther">
                </div>
                </div>

                <div class="galerie">
                    <h1 class="galerie-h">Fotogalerie</h1>
                    <div class="carousel">
                        <div class="carousel_item carousel_item--visible">
                            <img src="./img/carousel1.jpg" alt="carouselImg1">
                        </div>
                        <div class="carousel_item">
                            <img src="./img/carousel2.jpg" alt="carouselImg2">
                        </div>
                        <div class="carousel_item">
                            <img src="./img/carousel3.jpg" alt="carouselImg3">
                        </div>

                        <div class="carousel_actions">
                            <button id="carousel_button--prev" aria-label="Previus slide"><</button>
                            <button id="carousel_button--next" aria-label="Next Slide">></button>
                        </div>
                        <div class="carousel_bullets">
                            <button onclick="moveToSlide(0)" class="bullet bull-active" id="carousel_bullet_st"></button>
                            <button onclick="moveToSlide(1)" class="bullet" id="carousel_bullet_nd"></button>
                            <button onclick="moveToSlide(2)" class="bullet" id="carousel_bullet_rd"></button>
                        </div>
                    </div>
                </div>

                <div class="novinky">
                    <h1 class="novinky-h">Novinky</h1>
                    <div class="novinka">
                        <p>
                            Dodatečné snény naleznete mezi závěrečnými titulky i za nimi.
                        </p>
                        <p>
                            Stan Lee se tentokrát ukáže až v jedné z posledních scén jako poslíček
                            předávájíci zásilku pro Tonyho Starka (Robert Downey Jr.)
                        </p>
                        <p>
                            Spôsob boja Captain Americu je založený na starých školách
                            bojových umení, ako je judu, karate, Tae Kwan Do a Aikido.
                            Bojové umenie Black Panthera je založené na štýle Capoeira,
                            čo je forma brazílskeho bojového umenia kombinujúca je aj
                            čínský vplyv umenia Kung Fu.
                        </p>
                        <p>
                            Vo filme se objavuje aj jeden z najmodernejších automobilov
                            na svete, ktorý riadi Black Panther. Koncept poskytla
                            automobilka Audi. Ohromujúce auto má to výbave všetky
                            najnovšie technológi, ktorými Audi disponuje, avšak do sériovej
                            výroby doposiaľ neboli zaradené.
                        </p>
                        <p>
                            Okrem londýnských ateliérov v Pinewood, boli filmári schopní
                            využiť lokality okolo samotnej Atlanty. Jednou takou bola veľká
                            prázdna strž v centre mesta, kde postavili kulisy Nigerijského
                            Lagosu. Filmári, kulisári a umelecký tím boli aj vďaka stovkám
                            komparzistov schopní vytvoriť a oživiť pulzujúce mesto
                            Lagos na mieste kde by ste ho nečekali.
                        </p>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <a class="nav-link active" href="#">Youtube</a>
                <a class="nav-link active" href="#">Facebook</a>
                <a class="nav-link active" href="#">Twitter</a>
            </footer>
        </div>
    </body>
    <script src="./scripts/carousel.js"></script>
</html>
