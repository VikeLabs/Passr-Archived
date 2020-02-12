
    // For columns 0 = 9/A, 9 = 0/F
    // For Rows:
    // 0 => C += 2.3, 4.00 scale
    // 1 => C += 2.33, 4.00 scale
    // 2 => C += 2.3, 4.33 scale
    // 3 => C += 2.33, 4.33 scale
const gpaMatrix = [
    [4, 4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1, 0],
    [4, 4, 3.67, 3.33, 3, 2.67, 2.33, 2, 1, 0],
    [4.33, 4, 3.7, 3.3, 3, 2.7, 2.3, 2, 1, 0],
    [4.33, 4, 3.67, 3.33, 3, 2.67, 2.33, 2, 1, 0]]

function convert(grade: number, convertTo: number) {
    var newArr = gpaMatrix[convertTo].reverse()
    var wholeNum = newArr[Math.trunc(grade)]
    var decNum = parseFloat((grade % (Math.trunc(grade))).toFixed(4))
    if (wholeNum < 9) {
        decNum = ((newArr[Math.trunc(grade) + 1] - newArr[Math.trunc(grade)]) * decNum);
    }
    return wholeNum + decNum
}



interface GpaInfo {
    key: string
    value: number
    description: string
}

const gpaSchemes: GpaInfo[] = [
    { key: 'Scheme 1', value: 0, description: 'C += 2.3, 4.00 scale' },
    { key: 'Scheme 2', value: 1, description: 'C += 2.33, 4.00 scale' },
    { key: 'Scheme 3', value: 2, description: 'C += 2.3, 4.33 scale' },
    { key: 'Scheme 4', value: 3, description: 'C += 2.33, 4.33 scale' },
]

export { convert, gpaSchemes } 

// Some tests
// console.log(convert(1.5, 0)) = 1.5
// console.log(convert(2.37, 1)) = 2.1221
// console.log(convert(6.87, 2)) = 3.648
// console.log(convert(8.98, 3)) = 4.3234
