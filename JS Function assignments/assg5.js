function isEven(num) { 
    return(num%2 == 0); 
}

function find( array, isEven){
    if(isEven(array.slice(0,1)) == true){
        return array.slice(0,1);
    }
    else{
        array.shift();
        return find(array, isEven);
    }
}

console.log(find([1,2,3,4,5], isEven));