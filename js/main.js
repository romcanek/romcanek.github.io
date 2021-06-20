function myFunc(){
  var par2 = document.getElementById("par1").offsetHeight + document.getElementById("par1t").offsetHeight + 50;
  var par3 = par2 + document.getElementById("par2").offsetHeight + document.getElementById("par2t").offsetHeight;
  var par4 = par3 + document.getElementById("par3").offsetHeight + document.getElementById("par3t").offsetHeight;
  var par5 = par4 + document.getElementById("par4").offsetHeight + document.getElementById("par4t").offsetHeight;

  par2 = par2 + "px";
  par3 = par3 + "px";
  par4 = par4 + "px";
  par5 = par5 + "px";
  
  console.log(par3);
  var newStyles = document.createElement('style')
  document.head.append(newStyles)
  newStyles.innerHTML = ".paralax-2::after {" +
    "top: " + par2 + ";" +
  "}"
  
  var newStyles = document.createElement('style')
  document.head.append(newStyles)
  newStyles.innerHTML = ".paralax-3::after {" +
    "top: " + par3 + ";" +
  "}"
  
  var newStyles = document.createElement('style')
  document.head.append(newStyles)
  newStyles.innerHTML = ".paralax-4::after {" +
    "top: " + par4 + ";" +
  "}"

  var newStyles = document.createElement('style')
  document.head.append(newStyles)
  newStyles.innerHTML = ".paralax-5::after {" +
    "top: " + par5 + ";" +
  "}"
}
