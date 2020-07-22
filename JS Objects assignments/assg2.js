class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
}
rect1 = new Rectangle(3,5);

Rectangle.prototype.getArea = function ( width,height) {
    return width*height;
}

console.log(rect1.getArea);