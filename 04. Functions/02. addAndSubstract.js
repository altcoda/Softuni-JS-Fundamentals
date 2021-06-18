// Note: Softuni system doesn't accept separate functions but I think it's better this way

function sum(firstNumber, secondNumber) {
  return (firstNumber + secondNumber)
}

function substract(firstNumber, secondNumber) {
  return (firstNumber - secondNumber)
}

function addAndSubstract(n1, n2, n3) {

    let numbersSum = sum(n1, n2)
    let result = substract(numbersSum, n3)

    return result;

}
