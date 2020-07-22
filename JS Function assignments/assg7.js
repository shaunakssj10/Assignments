
  var str1='This is text outside function ';
  var str2=function(){
      console.log("This is text inside function.")
  }

  var anon=str1+str2;
  console.log(anon);