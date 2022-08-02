function numberSteps() {
  let numbers = [] // makes a empty array that is ready for the numbers from while loop
  let count = 0
  let countOut = document.getElementById("count-out")
  let n = document.getElementById("posNum").value // Gets number value from user

  // double checks if integer is positive
  if (n > 0) {
    // while loop that will run Collatz conjecture until the number is 1 and fills the empty array "numbers"
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2
        count++
        console.log(n)
        numbers.push(n)
      } else if (n % 2 !== 0) {
        n = n * 3 + 1
        count++
        console.log(n)
        numbers.push(n)
      }
    }
    countOut.innerText = count // gives user the number of steps it tok to reach 1
  }
  console.log(numbers)

  let i = 0

  // a function that loops through all the numbers that have been put into the array "numbers" to find the highest
  function findLargest(numbers) {
    let highestNum = document.getElementById("high-num")
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > i) {
        i = numbers[j]
      }
    }
    console.log(i)
    highestNum.innerText = i // gives the user the highest number in the array/Collatz conjecture
  }

  findLargest(numbers)
}
