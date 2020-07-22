class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
}
rect1 = new Rectangle(10,20);
rect2 = new Rectangle(30,40);
console.log(rect1);
console.log(rect2);

rect1.height=5;
console.log(rect1);