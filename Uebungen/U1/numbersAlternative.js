function publicNumbers(start, end) {
    let count = start;
    function solution1b() {
        console.log(count);
        count = count + 1;
        if (count > end) { return; }
        solution1b();
    }
    solution1b();
}

module.exports = { numbers : publicNumbers};