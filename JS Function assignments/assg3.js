function isEven(num) { 
    return(num%2 == 0); 
}

var arr = [1, 3, 5, 4, 6];
function find(arr, isEven){
    for (var i =0; i<= arr.length; i++){
        var a;
        a = isEven(arr[i]);
        if (a){
            return arr[i];
            break;
        }
    }
}

console.log(find(arr,isEven));

