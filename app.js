/*challenge 26 - OP 1*/

let ingreso = 0;
let ingresoraw = '';
let numeros = '';

while (confirm('desea agregar un numero?'))
{
  let ingreso = parseInt(prompt('ingrese el numero que desea agregar').trim());
  if (isNaN(ingreso))
  {
    alert('ingreso un numero invalido, intentelo nuevamente');
  }
  else
  {
    (numeros == '')? numeros = ingreso.toString() : numeros = numeros + '-' + ingreso.toString();
  }
}
document.write('Challenge 26 - opcion 1<br/>');
document.write('los nunmeros ingresados fueron: ' + numeros);

/*challenge 26 - OP 2*/

while (confirm('desea agregar un numero?'))
{
  let ingresoraw = prompt('ingrese el numero que desea agregar');
  if (ingresoraw.includes(' ') || isNaN(parseInt(ingresoraw.trim())))
  {
    alert('ingreso un numero invalido, intentelo nuevamente');
  }
  else
  {
    (numeros == '')? numeros = ingresoraw.toString() : numeros = numeros + '-' + ingresoraw.toString();
  }
}
document.write('Challenge 26 - opcion 2<br/>');
document.write('los nunmeros ingresados fueron: ' + numeros);

/*challenge 27*/

let daño = 0;
let golpeActual= 0;

document.write('Challenge 27<br/>');
  for (let i =0; i < 10; i++)
  {
    golpeActual = (Math.floor(Math.random() * 1001) + 1000);
    daño = daño + golpeActual;
    document.write('<br/>' + ' &#x2022; ' + 'Los puntos de daño recibidos en el golpe ' + (i + 1).toString() +  ' fueron: ' + golpeActual.toString() + '<br/>');
  }

document.write('<br/> El total de puntos de daño fue de: ' + daño.toString() + '<br/>');

