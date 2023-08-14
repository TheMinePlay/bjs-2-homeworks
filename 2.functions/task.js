function getArrayParams(...arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    let avg = 0;
    arr.map((item) => avg += item);
    avg /= arr.length;
    avg = Math.round(avg * 100) / 100;
    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    let sum = 0;
    arr.map((item) => sum += item);
    return sum;
}

function differenceMaxMinWorker(...arr) {
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    if(arr.length > 0) {
        return max - min;
    } else {
        return 0;
    }
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    arr.forEach(function(item, i, arr) {
        if(item % 2 == 0) {
            sumEvenElement += item;
        } else {
            sumOddElement += item;
        };
    });

    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    arr.forEach(function(item, i, arr) {
        if(item % 2 == 0) {
            sumEvenElement += item;
            countEvenElement += 1;
        };
    });

    if(arr.length >= 1) {
        return sumEvenElement / countEvenElement;
    } else {
        return 0;
    }
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = 0;

    arrOfArr.forEach(function(item, i, arr) {
        let result = func(...arrOfArr[i]);

        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    });

    return maxWorkerResult;
}