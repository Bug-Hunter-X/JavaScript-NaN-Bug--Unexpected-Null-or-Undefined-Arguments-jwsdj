function foo(a, b) {  if(a === null || a === undefined || b === null || b === undefined){    return 0;  }  return a + b;} function bar(x, y) {  return foo(x, y) * 2;} let result = bar(5, 3); console.log(result); // Expected: 16

let result2 = bar(null,3); console.log(result2); //Expected: 6
let result3 = bar(5,null); console.log(result3); //Expected: 10
let result4 = bar(null,null); console.log(result4); //Expected: 0