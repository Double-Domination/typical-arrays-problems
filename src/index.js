exports.min = function min(array) {
    if (Array.isArray(array) !== true || array.length === 0) {
        return 0;
    } else {
        let minimum = Infinity;
        for (const current of array) {
            if (current < minimum) {
                minimum = current;
            }
        }
        return minimum;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) !== true || array.length === 0) {
        return 0;
    } else {
        let maximum = -Infinity;
        for (const current of array) {
            if (current > maximum) {
                maximum = current;
            }
        }
        return maximum;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) !== true || array.length === 0) {
        return 0;
    } else {
        let result = 0;
        for (const current of array) {
            result = result + current;
        }
        result = result / array.length;
        return result;
    }
};
