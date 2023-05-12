function count(n){
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repear (arreglo) {
  let repeatedArreglo = arreglo;
  return repeatedArreglo;
}

function convertToString (array) {
  let result = array.map(element => element.toString());
  return result;
}

function bidimetional (value) {
  let x = new Array(value);
  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0)
  }
  return x;
}

console.log(bidimetional(5))