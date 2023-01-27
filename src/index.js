// You should implement your task here.

module.exports = function towelSort(matrix) {

    return matrix.reduce((output, input, i) => {
        input.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => output.push(e));
        return output;
    }, []);
}