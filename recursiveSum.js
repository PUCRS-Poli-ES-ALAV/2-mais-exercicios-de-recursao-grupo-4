// assinatura: int recursiveSum(int n)
// condição de parada: n == 0 -> 0

function recursiveSum(n = 0) {
  if (n === 0) return 0;

  if (n > 0)
    return n + recursiveSum(n - 1);

  return n + recursiveSum(n + 1);
}

console.log(recursiveSum(-2));