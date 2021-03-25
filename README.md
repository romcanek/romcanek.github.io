<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="main.js"></script>
    <link rel="stylesheet" href="main.css">
    <title>Kalkulačka</title>
</head>
<body>
    <main>
        <h1 class="nadpis">Kalkulačka</h1>
        <div class="kalkulacka">
            <input type="text" id="input" class="inputPole">
            <script>document.getElementById("input").value = 0</script>
            <div class="row"></div>
            <div class="column"><button class="test prvni" onclick="addNum7()">7</button></div>
            <div class="column"><button class="test" onclick="addNum8()">8</button></div>
            <div class="column"><button class="test" onclick="addNum9()">9</button></div>
            <div class="column"><button class="test plus" onclick="plus()">+</button></div>
            <div class="column"><button class="test krat" onclick="krat()">×</button></div>
            <div class="row"></div>
            <div class="column"><button class="test prvni" onclick="addNum4()">4</button></div>
            <div class="column"><button class="test" onclick="addNum5()">5</button></div>
            <div class="column"><button class="test" onclick="addNum6()">6</button></div>
            <div class="column"><button class="test minus" onclick="minus()">-</button></div>
            <div class="column"><button class="test procento" onclick="procento()">%</button></div>
            <div class="row"></div>
            <div class="column"><button class="test prvni" onclick="addNum1()">1</button></div>
            <div class="column"><button class="test" onclick="addNum2()">2</button></div>
            <div class="column"><button class="test" onclick="addNum3()">3</button></div>
            <div class="column"><button class="test deleno" onclick="deleno()">÷</button></div>
            <div class="column"><button class="test abs" onclick="abs()">Abs</button></div>
            <div class="row"></div>
            <div class="column"><button class="test prvni" onclick="addNum0()">0</button></div>
            <div class="column"><button class="test decimal" onclick="decimal()">.</button></div>
            <div class="column"><button class="test ac" onclick="ac()">AC</button></div>
            <div class="column"><button class="test equal" onclick="equal()">=</button></div>
        </div>
    </main>
</body>
</html>
