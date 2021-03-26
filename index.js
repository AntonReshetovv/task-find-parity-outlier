const oddNumbers = [2, 4, 0, 100, 4, 11, 2602, 36];
const evenNumbers = [160, 3, 1719, 19, 11, 13, -21];

function findOutlier(integers) {
    const oddNumb = integers.find(numb => numb % 2 !== 0);
    const evenNumb = integers.find(numb => numb % 2 === 0);

    if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
        return oddNumb;
    }
    if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0) {
        return evenNumb;
    }

    return (integers[2] % 2 === 0) ? oddNumb : evenNumb
}

findOutlier(oddNumbers)
findOutlier(evenNumbers)