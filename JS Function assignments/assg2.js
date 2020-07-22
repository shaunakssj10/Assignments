/*
var x;
var f1 = compose(square, double);
function square(x){
    return (x*x);
}

function double(x){
    return (2*x);
}

function compose(square, double){
   
    function f1(x){
        return square(double(x));
    }

    return f1();
}

function compose(double, square){
   
    function f2(x){
        return double(square(x));
    }

    return f2();
}

console.log(compose(square,double));
console.log(f1(5));
*/

var x;
 
function square(x) {
    return x*x;    
}
function double(x) {
    return 2*x;
}

function compose(square,double) {
    
    return (x)=> square(double(x))
}

var f1= compose(square,double);
console.log(f1(5));
console.log(f1(10));

var f2= compose(double,square);
console.log(f2(5));
console.log(f2(10));