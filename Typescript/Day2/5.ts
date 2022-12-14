
interface Shape{
    printShape();
}
class Cone implements Shape{
    Radius:number;
    Height:number;
    constructor(Radius,Height){
        this.Radius=Radius;
        this.Height=Height;
    }
    printShape() {
        console.log("Cone");
    }
    area(){
        let l=Math.sqrt((this.Radius ** 2)+(this.Height ** 2));
        let area=((3.142)*this.Radius*l)+((3.142)*this.Radius ** 2);

        console.log(area);
    }
}
class Sphere implements Shape{
    Radius:number;
    constructor(Radius){
        this.Radius=Radius;
    }
    printShape() {
        console.log("Sphere");
    }
    area(){
        let area=4*(3.142)*(this.Radius ** 2);
        console.log(area);
    }
}
class  Rectangle implements Shape{
    Length:number;
    Width:number;
    constructor(Length,Width){
        this.Length=Length;
        this.Width=Width;
    }
    printShape() {
        console.log("Rectangle");
    }
    area(){
        let area=(this.Length * this.Width);
        console.log(area);
    }
}

let coneObj:Cone=new Cone(2,3);
coneObj.area();
let spereObj:Sphere=new Sphere(4);
spereObj.area();
let RectangleObj:Rectangle=new Rectangle(4,7);
RectangleObj.area();
