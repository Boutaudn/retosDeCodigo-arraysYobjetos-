/*var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6*/

function computeSumOfAllElements(arr) {
    let initial = 0;
    const arrSum = arr.reduce((sum, current) => sum + current, initial);
    return arrSum;
}
