<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <title>Pokemoni</title>
</head>
<body>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand">Pokemon</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Domů <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="Historie/historie.html">Historie</a>
            </li>
            <li class="nav-item active dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Odvětví
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="Klasika/klasika.html">Klasika</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="PVP/pvp.html">Pokemon PVP</a>
                <a class="dropdown-item" href="MMO/mmo.html">Pokemon MMO</a>
              </div>
            </li>
          </ul>
          <img src="photos_main/pikachu_icon.png" alt="Pikachu_icon" width="64" height="64"> 
        </div>
    </nav>

    <main class="container">
            
        <div class="row">
            <div class="col-lg-8">
                <div class="jumbotron">
                    <h1 class="display-4">Přejdi do světa pokemonů</h1>
                    <p class="lead">Ve světě pokemenů žijí pokemoni a lidé v míru. Lidé používají pokémony jako své mazlíčky. Starají se o ně. Trénují je a pak s nimi zápasí. Pokémoni mají ve světě obří popularitu ať už jejich seriály, hry, karty, oblečení a vlastně všechno co vás napadne.</p>
                    <hr class="my-4">
                    <p>Pokemoní zápasy jsou hlavní část jak seriálů tak her. Hlavní faktory pro dosažení výhry jsou výhoda typu, level, vývin, vhodné pole útoků.</p>
                    <a class="btn btn-primary btn-lg" href="Základy bojů/zápasy.html" role="button">Chci vědět víc</a>
                </div>
            </div>
            <div class="col-lg-4 mt-sm-5 mb-sm-5 pl-5 pr-5">
                <form class="mb-5 mt-md-5">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Heslo</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Musí mít alespoň 8 znaků">
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">nejsem robot</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Přihlásit se</button>
                </form>
            </div>
        </div>
            <div class="jumbotron">
                <h1>Pokédex</h1>
                <p class="lead">Pokédex je univerzální příručka pro trenéry pokémonů. Obsahuje důležité a zajímavé informace o pokémonech jako jejich jméno, typ, fáze vývinu. Zde je pár odstřižků z něj.</p>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div class="card mx-auto" style="width: 18rem;">
                            <img src="photos_main/Cloyster_icon.png" class="card-img-top" alt="Cloyster">
                            <div class="card-body">
                              <h5 class="card-title">Cloyster</h5>
                              <p class="card-text">
                                  <b>Typ:</b> lední, vodní <br>
                                  <b>Kategorie:</b> škeble <br>
                                  <b>Váha:</b> 132kg
                              </p>
                              <a href="https://www.pokemon.com/us/pokedex/cloyster" class="btn btn-primary">Originální zdroj z pokédexu</a>
                            </div>
                          </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div class="card mx-auto" style="width: 18rem;">
                            <img src="photos_main/Diglett_icon.png" class="card-img-top" alt="diglett">
                            <div class="card-body">
                              <h5 class="card-title">Diglett</h5>
                              <p class="card-text">
                                  <b>Typ:</b> zemní <br>
                                  <b>Kategorie:</b> krtek <br>
                                  <b>Váha:</b> 0.8kg
                              </p>
                              <a href="https://www.pokemon.com/us/pokedex/diglett" class="btn btn-primary">Originální zdroj z pokédexu</a>
                            </div>
                          </div>
                    </div>
                    <div class="col-lg-4 col-md-6-float-center col-sm-12 mt-4">
                        <div class="card mx-auto" style="width: 18rem;">
                            <img src="photos_main/Snorlax_icon.png" class="card-img-top" alt="snorlax">
                            <div class="card-body">
                              <h5 class="card-title">Snorlax</h5>
                              <p class="card-text">
                                  <b>Typ:</b> normální <br>
                                  <b>Kategorie:</b> spáč <br>
                                  <b>Váha:</b> 460kg
                              </p>
                              <a href="https://www.pokemon.com/us/pokedex/snorlax" class="btn btn-primary">Originální zdroj z pokédexu</a>
                            </div>
                          </div>
                    </div>
                </div>

                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div class="card mx-auto" style="width: 18rem;">
                            <img src="photos_main/Machoke_icon.png" class="card-img-top" alt="Machoke">
                            <div class="card-body">
                              <h5 class="card-title">Machoke</h5>
                              <p class="card-text">
                                  <b>Typ:</b> bojový <br>
                                  <b>Kategorie:</b> supersilák <br>
                                  <b>Váha:</b> 70kg
                              </p>
                              <a href="https://www.pokemon.com/us/pokedex/machoke" class="btn btn-primary">Originální zdroj z pokédexu</a>
                            </div>
                          </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                        <div class="card mx-auto" style="width: 18rem;">
                            <img src="photos_main/Haunter_icon.png" class="card-img-top" alt="haunter">
                            <div class="card-body">
                              <h5 class="card-title">Haunter</h5>
                              <p class="card-text">
                                  <b>Typ:</b> duchový, jedovatý <br>
                                  <b>Kategorie:</b> plyn <br>
                                  <b>Váha:</b> 0.09kg
                              </p>
                              <a href="https://www.pokemon.com/us/pokedex/haunter" class="btn btn-primary">Originální zdroj z pokédexu</a>
                            </div>
                          </div>
                    </div>
                    <div class="col-lg-4 col-md-6.float-center col-sm-12 mt-4">
                        <div class="card mx-auto" style="width: 18rem;">
                            <img src="photos_main/Magnezone_icon.png" class="card-img-top" alt="magnezone">
                            <div class="card-body">
                              <h5 class="card-title">Magnezone</h5>
                              <p class="card-text">
                                  <b>Typ:</b> elektrický, železný <br>
                                  <b>Kategorie:</b> magnet <br>
                                  <b>Váha:</b> 180kg
                              </p>
                              <a href="https://www.pokemon.com/us/pokedex/magnezone" class="btn btn-primary">Originální zdroj z pokédexu</a>
                            </div>
                          </div>
                    </div>
                  </div>
            </div>
    </main>

<!-- Footer -->
<footer class="bg-primary text-center text-lg-start text-white mt-5">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Já a pokemoni</h5>
        <p style="font-size: small;">
          Jako malý asi od 5 let jsem rád vstával v 6 ráno a sledoval pokémony. Následně jsem začal sbírat pokémony a neustále je vyměnoval s dětma ve škole až do svých 12.
          Nedávno se ale moje zapálení pro pokémony vrátilo když jsem začal hrát pokemon mmo se svým bráchou. Začalo mě bavit pvp. Proto jsem se rozhodl poradit lidem jak začít s pokemony a
          do čeho se pustit. 
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-6-float-center mb-4 mb-md-0">
        <h5 class="text-uppercase">Kontakt</h5>

        <ul class="list-unstyled mb-0">
          <li style="margin-bottom: 3%;">
            <a href="mailto:roman.tarnai.020@pslib.cz" class="text-white">roman.tarnai.020@pslib.cz</a>
          </li>
          <li>
            <a class="text-white">Česká republika, Hrádek nad Nisou</a>
          </li>
          <li style="margin-top: 3%;">
            <a class="text-white">704 158 748</a>
          </li>
        </ul>
      </div>
    </div>
    </div>

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white">Roman Tarnai</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</body>
</html>
