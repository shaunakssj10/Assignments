function findSum(n) {
    var result = 0;
    for(var i = 1; i <= n; i++) {
      result = result + i;
    }
    return result
  }

  console.log(findSum(10));