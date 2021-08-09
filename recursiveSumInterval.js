// assinatura: int recursiveSumInterval(int j, int k)
// situação de parada: k == j -> 0
// iteração: j + recursiveSumInterval(j + 1, k)

function recursiveSumInterval(j = 0, k = 0) {
  if (k === j) return k;

  if (k < j)
    return k + recursiveSumInterval(k + 1, j);

  return j + recursiveSumInterval(j + 1, k);
}

console.log(recursiveSumInterval(1, 5));