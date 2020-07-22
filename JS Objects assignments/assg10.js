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
    amithab=new person("amithab","bacchan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"true","sr.analyst")
    abhisheik=new person("abhisheik",21,"HTML","08/06/1997","true","jr analyst")
    aradhya=new person("aradhya",9,"C","12/05/2010","false","child")
    var abhisheik=Object.create(amithab);
    var aradhya=Object.create(abhisheik);
    var aradhya=Object.create(amithab);

    console.log(amithab);
    console.log(abhisheik.lname);
    console.log(abhisheik.address);
    console.log(aradhya.lname);
    console.log(aradhya.address);