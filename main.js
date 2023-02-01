function contador(){
  let numeros = 0;

  const increase = function(){
    numeros++;
    console.log(numeros);
  }

  const subtract = function(){
    numeros--;
    console.log(numeros);
  }

  return {
    increase: increase,
    subtract: subtract
  };
  
}

const aux = contador();
