function randArray(){
    var hundredNums = new Array();
    for (var i = 0; i < 100; i++) {
        hundredNums[i] = Math.random();
    }
    return hundredNums;
}
console.log(randArray());
