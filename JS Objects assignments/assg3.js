class Rectangle{

    constructor(width,height){
        this.width=width;
        this.height=height;
    }
   getArea(){
       return this.width*this.height;
   }
}
r = new Rectangle(4, 5);
r.hieght = 50;
console.log(r.getArea());