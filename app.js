/*
------------------------------------------- SERIE FIBONACCI ----------------------------------------

1. Debe solicitar al usuario un número por prompt o por input y guardarlo.
2. Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
3. Debe imprimir el resultado por consola o por el DOM.
4. Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.

*/

const fibonacci = () => {
  let a = 0, b = 1;
  for (let i = 0; i < numInput; i++) {
    let  num = document.createElement('p');
    num.textContent= `${a}, `;
    document.body.appendChild(num);
    // console.log(a);
    let c = a + b;
    a = b;
    b = c;
  }
}

let numInput;
while(isNaN(numInput)){
  numInput  = Number(prompt('Número para sucesión Fibonacci'));
  if(isNaN(numInput)){
    alert("Valor incorrecto, ingresa de nuevo");
  }
  fibonacci(numInput);
}


// const funcionFormula = () =>{
//   const formula = Math.trunc(((Math.pow((1 + Math.sqrt(5)),numInput))-(Math.pow((1 - Math.sqrt(5)),numInput)))/((Math.pow(2, numInput))*(Math.sqrt(5))));
//   return formula;
// }
// funcionFormula();
// console.log(funcionFormula());