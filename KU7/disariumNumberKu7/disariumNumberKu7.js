/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task
Given a number, Find if it is Disarium or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 8 pow1 + 9 pow2 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 5 pow1 + 6 pow2 + 4 pow3 = 105 != 564 , thus output is "Not !!"
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
*/

function disariumNumber(n) {

  let show = [...String(n)].map((it, ind) => Math.pow(+it, ind + 1)).reduce((a, b) => a + b)

  return show == n ? 'Disarium !!' : 'Not !!'

}

console.log(disariumNumber(89));