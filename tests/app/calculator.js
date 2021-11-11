function sum(a, b) {
    // if (typeof a == 'string') {
    //     return 0
    // }
    if (a > 10) return 10 + b
    return a + b
}

function multiply(a, b) {
    return a * b
}

function subtracting(a, b) {
    return a - b
}

function division(a, b) {
    return a / b
}

module.exports.sum = sum
module.exports.multiply = multiply
module.exports.subtracting = subtracting
module.exports.division = division