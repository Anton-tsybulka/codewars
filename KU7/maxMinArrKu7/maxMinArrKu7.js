/*
In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
More examples in the test cases.
Good luck!
*/

/* const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop()); */


function solve(arr) {

    let arrSort = [...arr].sort((a, b) => b - a)
    let arrShow = []
    let condition = true
    let counterMax = 0
    let counterMin = arr.length - 1

    for (let i = 0; i < arr.length; i++) {

        if (condition) {

            arrShow.push(arrSort[counterMax])
            counterMax++
            condition = false

        } else {

            arrShow.push(arrSort[counterMin])
            counterMin--
            condition = true
        }

    }

    return arrShow

}

console.log(solve([15, 11, 10, 7, 12]))