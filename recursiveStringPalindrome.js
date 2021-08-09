// assinatura: boolean recursiveStringPalindrome(String text)
// situação de parada: text.length == 0  || text.length == 1 > true
// iteração: se text[0] == text[text.length - 1],
// então: recursiveStringPalindrome(text[1, (text.length) - 2])

function isPal(text = '') {
  if (text.length === 0 || text.length === 1) return true;

  if (text[0] === text[text.length - 1])
    return isPal(text.slice(1, - 1));

  return false;
}

console.log(isPal('arara'));