function findSum() {
    var result = 0,n=17;
    for(var i = 1; i <= n; i++) {
        if(i%3==0 || i%5==0){
      result = result + i;
    }
}
    return result
}

console.log(findSum());