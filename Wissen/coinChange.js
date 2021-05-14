// function getWays(n, c) {
//     if (n === 0) return 1;
//     if (n < 0) return 0;
    
//     if (c.length <=0 && n >= 1)
//         return 0;

//     // for (let num of c) {
//     //     let remainder = n - num;
//     //     let remainderCombination = getWays(remainder, c);
//     //     if (remainderCombination != null) {
//     //         allCombo = [...remainderCombination,num];
//     //         console.log(allCombo);
//     //     }
//     // }
//     // console.log('end');
//     // return allCombo;
//     return getWays()
// }

function getWays(n, c)
{
    //Time complexity of this function: O(mn)
    //Space Complexity of this function: O(n)
 
    // table[i] will be storing the number of solutions
    // for value i. We need n+1 rows as the table is
    // constructed in bottom up manner using the base
    // case (n = 0)
    // Initialize all table values as 0
    //O(n)
    var table = Array(n+1).fill(0);
    
    // Base case (If given value is 0)
    table[0] = 1;
    
    // Pick all coins one by one and update the table
    // values after the index greater than or equal to
    // the value of the picked coin
    for (i=0; i<c.length; i++)
        for (j=c[i]; j<=n; j++)
            table[j] += table[j-c[i]];
 
    return table[n];
}

let n = 10;
let c = [2,5,3,6];
console.log(getWays(n, c));