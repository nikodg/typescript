// Ambient declaration
declare var $;

// Interface
interface IMyObj {
    a: string;
    b?: number; // Optional property
}

// Using the Interface
var myObj: IMyObj = {
    a: "string",
    b: 123
};

// Type Setting
var a: string = "ABC";
var b: number = 123;
var c: Object = {}
var d: Array<any> = [];
var e = () => { // Using ES6 arrow function
    return true;
};

// Function Types
function logParam(param: string, callback: (returned) => any) {
    callback(param);
}

logParam(a, e);
