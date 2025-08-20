Array.prototype.mmc = function () {
  numeros = this;
  if (numeros.length === 0 || !numeros.every((num) => Number.isInteger(num))) {
    return 0;
  }

  const maiorNumero = Math.max(...numeros);

  let mmc = maiorNumero;

  while (true) {
    const ehMultiploDeTodos = numeros.every((num) => mmc % num === 0);

    if (ehMultiploDeTodos) {
      return mmc;
    }

    mmc += maiorNumero;
  }
};

Array.prototype.mdc = function () {
  numeros = this;
  if (numeros.length === 0 || !numeros.every((num) => Number.isInteger(num))) {
    return 0;
  }

  const calcularMDCDoisNumeros = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  let resultadoMDC = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    resultadoMDC = calcularMDCDoisNumeros(resultadoMDC, numeros[i]);
  }
  return resultadoMDC;
};

const resultadoMMC = [12, 15, 20];
const resultadoMDC = [12, 3, 12, 45, 3, 123, 7];
console.log(resultadoMMC.mmc());
console.log(resultadoMDC.mdc());
