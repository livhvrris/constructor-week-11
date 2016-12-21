var Shape = require('./shape.js');
var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Pentagon = require('./pentagon.js');



var shape = new Shape();
var triangle = new Triangle(1, 2, 3);
var square = new Square(1, 2, 3, 4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);


console.log(shape);
console.log(triangle.get_type());
console.log(square.get_type());
console.log(pentagon.get_type());

console.log('----------------------');


console.log(shape instanceof Shape);
console.log(triangle instanceof Triangle);
console.log(square instanceof Square);
console.log(pentagon instanceof Pentagon);
