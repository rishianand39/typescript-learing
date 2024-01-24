"use strict";
//enums allow developers to define named constant values. This can improve code readability and maintainability.
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
