console.log("For");
for (let num = 0; num <= 10; num++) {
  console.log(num);
}

console.log("While");
let caunt = 10;
while (caunt >= 1) {
  console.log(caunt);
  caunt = caunt - 1;
}

console.log("Pares");
for (let par = 0; par <= 100; par++) {
  if (par % 2 === 0) {
    console.log(par);
  }
}

console.log("Impares");
for (let impar = 0; impar <= 100; impar++) {
  if (impar % 2 !== 0) {
    console.log(impar);
  }
}
