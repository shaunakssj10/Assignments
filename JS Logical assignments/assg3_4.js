function flipCoin(){
    if(Math.floor(Math.random() * 10)%2 == 0)
        return 'H';
    else
        return 'T';
}

function numHeads(num){
    var flag=0;
    for(i=0;i<num;i++)
        if(flipCoin()=='H')
            flag++;
    return flag;
}
console.log(numHeads(10));

function headsRatio(num){
    return (numHeads(num)/num);
}

console.log(headsRatio(10));