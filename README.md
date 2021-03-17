<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="bootstrap.css">
    <script src="main.js"></script>
    <title>Clicker</title>
</head>
<body>
    <main class="container">
    <div class="row justify-content-center mt-5 m-5">
        <figure class="figure">
            <img src="Thresh.jpg" onclick="Click()" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            <figcaption id="maintxt" class="figure-caption">Sebrané lanterny: 0</figcaption>
            <figcaption id="dmg" class="text-center">DMG = 5</figcaption>
            <figcaption id=lanterny_s class="text-center">Lanterny/s = 0</figcaption>
            <button onclick="saveCookies()" type="button" class="btn btn-primary">Uložit</button>
            <button onclick="loadCookies()" type="button" class="btn btn-primary">Načíst</button>
        </figure>
    </div>
    </main> 
    <div class="row justify-content-center mt-5">
        <div class="media mr-5 ml-5">
            <img style="width: 128px; height: 128px;" class="align-self-center mr-3" src="kalista.jpg" alt="Generic placeholder image">
            <div class="media-body">
              <h5 class="mt-0">Kalista</h5>
              Click DMG +5 <br>
              <p id="kalista" class="m-0">koupených kalist: 0</p> <br>
              <p id="kalista_cena">cena: 100 lantern</p>
              <button onclick="buyKalista()" type="button" class="btn btn-primary">Koupit</button>
            </div>
          </div>
          <div class="media ml-0 ml-md-5 mt-5 mt-md-0">
            <img style="width: 128px; height: 128px;" class="align-self-center mr-3" src="duse.jpg" alt="Generic placeholder image">
            <div class="media-body">
              <h5 class="mt-0">Duše</h5>
              lanterny/s +2 <br>
              <p id="duse" class="m-0">koupených duší: 0</p> <br>
              <p id="duse_cena">cena: 150 lantern</p>
              <button onclick="buyDuse()" type="button" class="btn btn-primary">Koupit</button>
            </div>
          </div>
    </div>
</body>
</html>
