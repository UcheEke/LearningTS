/**
 * Created by ekeu on 03/01/16.
 */
// Typescript handles all the variable types in Javascript:
// Number (note the "golang order" of 'variable name : type'
var age = 20;
// String
var name = "Hello!";
// Booleans
var isValid = true;
// Arrays
var course = ["JavaScript", "AngularJS"];
// or...
var course = ["Golang", "Objective-C"];
// Typescript also introduces a few new types:
// Enum: creates a enumerable type e.g.
// Type definition
var feedback;
(function (feedback) {
    feedback[feedback["Poor"] = 1] = "Poor";
    feedback[feedback["Average"] = 2] = "Average";
    feedback[feedback["Good"] = 3] = "Good";
    feedback[feedback["Best"] = 4] = "Best";
})(feedback || (feedback = {}));
;
// Usage
var opinion = feedback.Best;
// or..
var opinion2 = feedback[2];
// Any: when it isn't possible to predetermine the type of a variable
// the 'any' type can be used
var unknown = "SkillBakery.com";
// Void: for functions without return values e.g.
function errorMsg() {
    console.log("Error!");
}
//# sourceMappingURL=basicTypes.js.map