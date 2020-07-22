var x;

function square(x){
    return (x*x);
}

function double(x){
    return (2*x);
}

function composedValue(square,double,x){
    return square(double(x));
}

console.log(composedValue(square,double,5));
 