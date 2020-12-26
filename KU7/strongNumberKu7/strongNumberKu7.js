/*
Task
Given a number, Find if it is Strong or not.
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Explanation:
Since , the sum of its digits' factorial of (1) is equal to number itself (1) , Then its a Strong .
strong_num(123) ==> return "Not Strong !!"
Explanation:
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's Not Strong .
strong_num(2)  ==>  return "STRONG!!!!"
Explanation:
Since the sum of its digits' factorial of 2! = 2 is equal to number itself (2) , Then its a Strong .
strong_num(150) ==> return "Not Strong !!"
Explanation:
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150), Then it's Not Strong .
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
*/

function strong(n) {

    function factorial(n) {

        return n <= 1 ? 1 : n * factorial(n - 1);

    }
    
    let arr = [...n + ''].map(i => +i)
        .map(i => factorial(i))
        .reduce((a, b) => a + b)

    return arr == n ? 'STRONG!!!!' : 'Not Strong !!'

}

console.log(strong(40585))
console.log(strong(5))
