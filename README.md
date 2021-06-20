<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/style.css">
    <title>Classes</title>
</head>
<body onresize="myFunc()" onload="myFunc()">
    <header class="header">
        <a href="https://hearthstone.fandom.com/wiki/Class" target="blank" class="logo">CLASSES</a>
        <input type="checkbox" class="menu-btn" id="menu-btn">
        <label for="menu-btn" class="menu-icon"><span class="nav-icon"></span></label>
        <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Deck building</a></li>
            <li><a href="#">About me</a></li>
        </ul>
    </header>

    <section class="paralax paralax-1 centered-content" id="par1">
    </section>

    <section class="text centered-content" id="par1t">
        <h2>Demon Hunter</h2>
        <p>
            Demon Hunter je nově přidaná Classa do Hearthstonu. Jako jediný používá <a href="https://hearthstone.fandom.com/wiki/Outcast" target="blank">outcast mechaniku</a>
            Při jeho vydání byl až moc silný a prošel nerfy. Jeho heropower jako jediná ve hře stojí pouze jednu manu a přidá mu jeden útok.
            Díky tomu se u něj používájí ze jména agresivní balíky, i když jsou zde vyjímky třeba N'zoth Demon Hunter. 
            Mezi jeho nejsilnější balíky patří odd Demon Hunter, který se hraje na wildu. Je neuvěritelně rychlý a je schopen nepřitele zabít
            i v pozdějších fazí hry, protože má poměrně hodně možností jak dělat dmg. Jeho karty mají tmavě
            zelený rámeček, který představuje Illidariho tetování.
        </p>
    </section>

    <section class="paralax paralax-2 centered-content" id="par2">
    </section>

    <section class="text centered-content" id="par2t">
        <h2>Druid</h2>
        <p>
            Druid je známý hlavně dvěma typy balíků. Jedním z nich je <a href="https://www.hearthstonetopdecks.com/decks/token-druid-6-legend-letequila-barrens-caverns" target="blank">token druid</a>
            a tím druhý je nějaká forma ramp nebo hard control druida v dnešní době je to <a href="https://www.hearthstonetopdecks.com/decks/celestial-druid-early-1-legend-pockettrain-barrens-caverns/" target="blank">celestial druid</a>,
            který patří k nejsilnějším balíků. Díky kartě Celestial alignment je schopný zastavit tlak nepřítele (pokud nepoužívá drahé karty) a pomocí rampy se dostat napřed.
            Druid používá dvě speciální mechaniky rampu a choose one. Jeho heropower mu dá jeden armor a jeden útok. Jeho karty mají hnědý rámeček, který symbolizuje trny.
        </p>
    </section>

    <section class="paralax paralax-3 centered-content" id="par3">
    </section>

    <section class="text centered-content" id="par3t">
        <h2>Hunter</h2>
        <p>
            Hunter je asi nejagresivnější classa vůbec. Za celou dobu co existuje vzniklo jen málo kontrolních balíků, které byly
            většinou mid-range třeba <a href="https://hearthstone-decks.net/reno-hunter-467-legend-cumflatulator/" target="blank">reno hunter</a>. Jeho ikonická heropower dává 2dmg do protivníkova hrdiny. Tato heropower ignoruje taunty.
            Hunter patří ke classam, které mají secrety, ty jeho stojí dvě many. dále taky používá beasty a zbraně. K jeho nejsilnějším balíkům v dnešní době
            patří <a href="https://www.hearthstonetopdecks.com/decks/face-hunter-8-legend-aikoio-barrens-caverns/" target="blank">face hunter</a>, hraný na standartu. Má veliké dps hlavně díky Trampling rhino.
            Jeho karty mají lesově zelený rámeček s úzkým okrajem ve tvaru listů.

        </p>
    </section>

    <section class="paralax paralax-4 centered-content" id="par4">
    </section>

    <section class="text centered-content" id="par4t">
        <h2>Mage</h2>
        <p>
            Mage měl většinu své existence taky tři ikonické typy balíků a to <a href="https://www.hearthstonetopdecks.com/decks/tempo-mage-184-legend-punto-the-barrens/" target="blank">tempo mage</a>
            v dnešní době spíše <a href="https://www.hearthpwn.com/decks/1384714-rank-1-legend-apm-mage" target="blank">apm mage</a>.
            Další z nich je <a href="https://www.hearthstonetopdecks.com/decks/secret-mage-22-legend-toumlaratt-wild-s87/" target="blank">secret mage</a>,
            který se dnes hraje na wildu. A tím posledním je hard-control mage například <a href="https://www.hearthstonetopdecks.com/deck-type/freeze-mage/" target="blank">freeze mage</a>.
            Mage heropower dává jeden dmg kamkoliv bez ohledu na taunty. Patří mezi classy používající secrety. Mage karty mají světle modrý
            okraj s tlustlou linkou arcane dustu.
        </p>
    </section>

    <section class="paralax paralax-5 centered-content" id="par5">
    </section>

    <section class="text centered-content" id="par5t">
        <h2>Paladin</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ipsam quos aliquid vitae nulla nihil maiores consectetur quod ut dolor?</p>
    </section>


    <footer>
        <div class="row">
            <section class="col">
                <h3>Kontakt</h3>
                <ul>
                <li class="footer-text"><a href="mailto:roman.tarnai.020@pslib.cz">roman.tarnai.020@pslib.cz</a></li>
                <li class="footer-text">704 181 784</li>
                <li class="footer-text">Czech republic, Hrádek nad Nisou</li>
                </ul>
            </section>
        </div>
        <div class="row">
            <section class="col socky">
                <div class="gallery">
                    <a href="https://www.facebook.com/Hearthstone.en/?brand_redir=498467596862680" target="_blank"><img class="icon" src="./photos/f_logo.svg" alt="Facebook logo"></a>
                    <a href="https://twitter.com/playhearthstone?lang=cs" target="_blank"><img class="icon" src="./photos/twitter_logo.svg" alt="Twitter logo"></a>
                    <a href="https://www.youtube.com/user/PlayHearthstone" target="_blank"><img class="icon" src="./photos/yt_logo.svg" alt="Youtube logo"></a>
                </div> 
            </section>
        </div>  
    </footer>
    <script src="js/main.js"></script>
</body>
</html>
