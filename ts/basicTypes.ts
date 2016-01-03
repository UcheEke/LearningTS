/**
 * Created by ekeu on 03/01/16.
 */

// Typescript handles all the variable types in Javascript:

// Number (note the "golang order" of 'variable name : type'
var age: number = 20;

// String
var name : string = "Hello!";

// Booleans
var isValid:boolean = true;

// Arrays
var course:string[] = ["JavaScript", "AngularJS"];
// or...
var course:Array<string> = ["Golang", "Objective-C"];

// Typescript also introduces a few new types:

// Enum: creates a enumerable type e.g.
// Type definition
enum feedback{Poor=1,Average=2,Good=3,Best=4};
// Usage
var opinion:feedback = feedback.Best;
// or..
var opinion2:string = feedback[2];

// Any: when it isn't possible to predetermine the type of a variable
// the 'any' type can be used
var unknown:any = "SkillBakery.com";

// Void: for functions without return values e.g.
function errorMsg():void {
    console.log("Error!");
}
