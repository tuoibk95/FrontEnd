// Named function
function Sum(x: number, y: number) : number {
    return x + y;
}

function display() {
    console.log(Sum(3,6));
}

// Anonymous function
let greeting = function() {
    console.log("greeeting...")
};

let SumAf = function(a: number,b:number) : number {
    return a+ b;
}

// Arrow function
let sumAb = (c:number, d:number) : number => {
    return c + d;
}