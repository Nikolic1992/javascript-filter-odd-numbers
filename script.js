function filterOddNumbers(numbers) {
  if (numbers.length === 0) {
    alert("You did not enter any value!");
    return;
  }
  let oddNumbers = []; // Declared an empty array as the default value of oddNumbers
  for (const number of numbers) {
    if (number % 2 !== 0) {
      // Checking if the input is not even number
      oddNumbers.push(number); // Adding the input to the array
    }
  }
  return oddNumbers;
}

// Example usage:
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5]
