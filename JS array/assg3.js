var stringArr = ["1.2","2.3","3.4"];
function numberArray(stringArr){
    var nums = new Array();
    for (var i=0;i < 3; i++){
        nums[i]=parseFloat(stringArr[i]);
    }
    return nums;
}

 var nums = numberArray(stringArr);
 console.log(nums);

