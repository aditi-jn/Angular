var Cone = /** @class */ (function () {
    function Cone(Radius, Height) {
        this.Radius = Radius;
        this.Height = Height;
    }
    Cone.prototype.printShape = function () {
        console.log("Cone");
    };
    Cone.prototype.area = function () {
        var l = Math.sqrt((Math.pow(this.Radius, 2)) + (Math.pow(this.Height, 2)));
        var area = ((3.142) * this.Radius * l) + ((3.142) * Math.pow(this.Radius, 2));
        console.log(area);
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(Radius) {
        this.Radius = Radius;
    }
    Sphere.prototype.printShape = function () {
        console.log("Sphere");
    };
    Sphere.prototype.area = function () {
        var area = 4 * (3.142) * (Math.pow(this.Radius, 2));
        console.log(area);
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(Length, Width) {
        this.Length = Length;
        this.Width = Width;
    }
    Rectangle.prototype.printShape = function () {
        console.log("Rectangle");
    };
    Rectangle.prototype.area = function () {
        var area = (this.Length * this.Width);
        console.log(area);
    };
    return Rectangle;
}());
var coneObj = new Cone(2, 3);
coneObj.area();
var spereObj = new Sphere(4);
spereObj.area();
var RectangleObj = new Rectangle(4, 7);
RectangleObj.area();
