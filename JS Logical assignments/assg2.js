var num1;
var num2;
var num3;
function max(num1,num2,num3)
{
    if(num1>=num2 && num1>=num3)
    console.log(num1);
    else if(num2>=num1 && num2>=num3)
    console.log(num2);
    else
    console.log(num3);
}
max(1,2,3);
max(1,3,2);
max(3,1,2);