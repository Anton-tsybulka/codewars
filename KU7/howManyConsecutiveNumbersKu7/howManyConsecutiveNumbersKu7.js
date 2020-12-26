/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.
For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/

function consecutive(arr) {             // не решил
    debugger
    if (arr.length == 1 || arr.length == 0) return 0

    let arrNew = []
    let show = arr.slice()
        .sort((a, b) => a - b)

        let ind = show[show.length - 1]

        for (let i = 0; i <= arrNew.length; i++) {
            arrNew.push(show[i])
            for (let j = show[i]; j < show[i + 1]; j++) {
                if (show[i] == show[i + 1] - 1) {
                        break
                } else {
                    arrNew.push(show[i] + 1)
                }

            }
            
        }
        
    return arrNew.length - arr.length

}

console.log(consecutive([1, 2, 3, 4]))
console.log(consecutive([4, 8, 6]))
console.log(consecutive([]))
console.log(consecutive([1]))