function contar(n){
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let timeInit = performance.now();
contar (5);
let timeEnd = performance.now();

let timeUsed = timeEnd - timeInit;

console.log(`tiempo usado por contar ${timeUsed} ms`)