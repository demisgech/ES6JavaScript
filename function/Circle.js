import { Shape } from "./Shape.js";

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Drawing a circle with radius ' + this.radius);
    }
}
// Circle.prototype = Object.create(Object.prototype); // ObjectBase
Circle.prototype = Object.create(Shape.prototype); //ShapeBase
// new Circle.prototype.constructor(1) // Shape();
Circle.prototype.constructor = Circle // Circle()

const circle = new Circle(1);
circle.duplicate();
circle.draw();

