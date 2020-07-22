var x;

function square(x){
    return (x*x);
}

var ret = [];
function map( array, square){
   if(array == null || array.length == 0){
       return ret;
   }
   else{
      ret.push(square(array.splice(0,1)));
      return map(array,square);
   }
}

console.log(map([1,2,3,4,5], square));

var ret = [];
function map( array){
   if(array == null || array.length == 0){
       return ret;
   }
   else{
      ret.push(Math.sqrt(array.splice(0,1)));
      return map(array);
   }
}

console.log(map([1,4,9,16,25]));