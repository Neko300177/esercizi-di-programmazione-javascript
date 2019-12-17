/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var array = [0, -3, 2, 5, 4, 6, -2];

var max = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

var min = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

console.log('Giornata più calda: ' + max);
console.log('Giornata più fredda: ' + min);
