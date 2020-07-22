function person(fname,lname,age,skills,dateofbirth,address,married,profession)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.skills=skills;
        this.dateofbirth=dateofbirth;
        this.address=address;
        this.married=married;
        this.profession=profession;
    }
    person1=new person("Shaunak","Amble",22,["Java","HTML/CSS"],"18/02/1998",{city:"Pune",pincode:"411038"},"false","sr analyst");
    person2=new person("Rahul","Bapat",21,["HTML","Python"],"08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr analyst");

 print=function()
 {
 console.log(person1);
 console.log(person2);
 }();

