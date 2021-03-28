var predesla_hodnota = 0
var hodnota_ted = 0
var decimal_ready = true;
var operace;
function addNum7(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 7;
    }
    else{
        document.getElementById("input").value += 7;
    }    
}
function addNum8(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 8;
    }
    else{
        document.getElementById("input").value += 8;
    }     
}
function addNum9(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 9;

    }
    else{
        document.getElementById("input").value += 9;
    }    
}
function addNum4(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 4;
    }
    else{
        document.getElementById("input").value += 4;
    }     
}
function addNum5(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 5;
    }
    else{
        document.getElementById("input").value += 5;
    }   
}
function addNum6(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 6;
    }
    else{
        document.getElementById("input").value += 6;
    }   
}
function addNum1(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 1;
    }
    else{
        document.getElementById("input").value += 1;
    }   
}
function addNum2(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 2;
    }
    else{
        document.getElementById("input").value += 2;
    }    
}
function addNum3(){
    if(String(document.getElementById("input").value) == '0')
    {
        document.getElementById("input").value = 3;
    }
    else{
        document.getElementById("input").value += 3;
    }   
}
function addNum0(){
    if(document.getElementById("input").value == 0)
    {
        document.getElementById("input").value = 0;
    }
    else{
        document.getElementById("input").value += 0;
    } 
}
function decimal(){
    if(decimal_ready == true)
    {
        document.getElementById("input").value += '.';   
    }
    decimal_ready = false;     
}
function krat(){
    predesla_hodnota += Number(document.getElementById("input").value);
    document.getElementById("input").value = 0;
    decimal_ready = true;
    operace = "x"
}
function plus(){
    predesla_hodnota = predesla_hodnota + Number(document.getElementById('input').value)
    console.log(predesla_hodnota)
    document.getElementById("input").value = 0;
    decimal_ready = true;
    operace = "+"
}
function minus(){
    predesla_hodnota += Number(document.getElementById("input").value);
    document.getElementById("input").value = 0;
    decimal_ready = true;
    operace = "-"
}
function deleno(){
    predesla_hodnota += Number(document.getElementById("input").value);
    document.getElementById("input").value = 0;
    decimal_ready = true;
    operace = "/"
}
function procento(){
    document.getElementById("input").value = Number(document.getElementById("input").value) / 100;
}
function abs(){
    document.getElementById("input").value = Math.abs(Number(document.getElementById("input").value));
}
function ac(){
    document.getElementById("input").value = 0;
    predesla_hodnota = 0
    decimal_ready = true;
}
function equal(){
    hodnota_ted = Number(document.getElementById("input").value);
    console.log(predesla_hodnota, hodnota_ted);
    if(predesla_hodnota == 0)
    {
        document.getElementById("input").value = hodnota_ted;
    }
    else if(operace == "+")
    {
        document.getElementById("input").value = (Number(predesla_hodnota) + Number(hodnota_ted))
    }
    else if(operace == "x")
    {
        document.getElementById("input").value = (Number(predesla_hodnota) * Number(hodnota_ted))
    }
    else if(operace == "/")
    {
        document.getElementById("input").value = (Number(predesla_hodnota) / Number(hodnota_ted))
    }
    else if(operace == "-")
    {
        document.getElementById("input").value = (Number(predesla_hodnota) - Number(hodnota_ted))
    }
    decimal_ready = true;
    predesla_hodnota = 0;
}
