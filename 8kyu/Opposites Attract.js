const isEven = num => num % 2 === 0
const lovefunc = (flower1, flower2) =>
  (isEven(flower1) && !isEven(flower2)) || (!isEven(flower1) && isEven(flower2))  