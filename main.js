// 1. Escriba una function que escriba un número a la inversa

let num = 2345;

function reverse(num) {
  let string = num.toString().split(""); 
  let aux = [];

  for(let i = string.length - 1; i >= 0; i--){
    aux.push(string[i]);
  }
  aux = parseInt(aux.join(''));
  console.log("Number: "+ num + " //new number: " + aux);

}
reverse(num);

// 2. Escriba una function que acepte un string como parámetro y convierta cada primer letra de cada palabra en mayúscula

let texto = "esto es una oracion";

function mayuscula (texto){
  let textoMayusculas = texto.split(" ");

  for (let i = 0; i < textoMayusculas.length; i++) {
    textoMayusculas[i] = textoMayusculas[i][0].toUpperCase() + textoMayusculas[i].substring(1);
  }

  textoMayusculas = textoMayusculas.join(" ");

  console.log(textoMayusculas);
}

mayuscula(texto);