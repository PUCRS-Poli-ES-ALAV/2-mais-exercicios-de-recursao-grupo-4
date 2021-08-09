// assinatura: int recursiveFibonacci(int n)
// situação de erro: n < 0 -> exception
// situação de parada:n == 1 -> 0 || n == 2 -> 1
// iteração: para n = 7, então: recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);

function recursiveFibonacci(n) {
  if (n <= 0) throw Error('Número não pode ser menor ou igual a zero.');

  if (n === 1) return 1;
  if (n === 2) return 1;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(10));