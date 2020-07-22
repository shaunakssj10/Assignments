var x;

function square(x){
    return (x*x);
}

var arr = [1, 3, 5, 4, 6];
function find(arr, square){
    ret = [];
    for (var i =0; i<arr.length; i++){
        ret.push(square(arr[i]));
        }
        return ret;
}

console.log(find(arr, square))

var arr1 = [1, 4, 9, 16, 35]
function find(arr1){
    ret = [];
    for (var i =0; i<arr1.length; i++){
        ret.push(Math.sqrt(arr1[i]));
        }
        return ret;
}
console.log(find(arr1, Math.sqrt))
