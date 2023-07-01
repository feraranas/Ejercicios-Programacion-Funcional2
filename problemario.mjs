/**************************
 * 1. FAHRENHEIT TO CELSIUS.
 *************************/
export function fahrenheitToCelsius(f) {
     return (5 * (f - 32)) / 9;
}
console.log("1. FAHRENHEIT TO CELSIUS: ");
console.log(fahrenheitToCelsius(212.0));

/**************************
 * 2. SIGN.
 *************************/
export function sign(n) {
     if(n<0) {return -1;}
     else if(n>0) {return 1;}
     else {return 0;}
}
console.log("2. SIGN: ");
console.log(sign(5));

/**************************
 * 3. ROOTS
 *************************/
export function roots(a,b,c) {
     return ((b * -1) * Math.sqrt(Math.pow(b,2) - (4 * a * c))) / (2 * a);
}
console.log("3. ROOTS: ");
console.log(roots(2,4,2))

/**************************
 * 4. BMI.
 *************************/
export function bmi(n, m) {
     const bmi = n / Math.pow(m,2);
     if(bmi<20) {return "underweight";}
     else if(bmi >= 20 && bmi < 25) {return "normal";}
     else if(bmi >= 25 && bmi < 30) {return "obese1";}
     else if(bmi >=30 && bmi < 40) {return "obese2";}
     else {return "obese3";}
}
console.log("4. BMI: ");
console.log(bmi(81, 1.6))

/**************************
 * 5. FACTORIAL.
 *************************/
export function factorial(n) {
     if (n === 0) {return 1;}
     return n * factorial(n - 1)
}
console.log("5. FACTORIAL: ");
console.log(factorial(5))

/**************************
 * 6. DUPLICATE.
 *************************/
export function duplicate(lst) {
     const res = []
     lst.forEach(item => {
          res.push(item);
          res.push(item);
     })
     return res;
}
console.log("6. DUPLICATE: ");
console.log(duplicate([1,2,3,4,5])) // [1 1 2 2 3 3 4 4 5 5]

/**************************
 * 7. POW.
 *************************/
export function pow(n, m) {
     if (m === 0) return 1;
     if (m === 1) return n;
     return n * pow(n, m - 1);
}
console.log("7. POW: ");
console.log(pow(5,3))

/**************************
 * 8. FIBONACCI.
 *************************/
export function fib(n, memo={}) {
     if (n in memo) return memo[n];
     if (n <= 2) return 1;
     memo[n] = fib(n - 2) + fib(n - 1);
     return memo[n];
}
console.log("8. FIBONACCI: ");
console.log(fib(13)) 

/**************************
 * 9. ENLIST.
 *************************/
export function enlist(lst) {
     return lst.map(item => [item]);
}
console.log("9. ENLIST: ");
console.log(enlist([[1,2,3],4,[5],7,8])); // (((1 2 3)) (4) ((5)) (7) (8))
console.log(enlist([1,2,3])); // ([a] [b] [c])

/**************************
 * 10. POSITIVES.
 *************************/
export function positives(lst){
     return lst.filter((item) => item > 0)
}
console.log("10. POSITIVES: ");
console.log(positives([12, -4, 3, -1, -10, -13, 6, -5]))

/**************************
 * 11. ADD-LIST.
 *************************/
export function addList(lst) {
     return lst.reduce((sum, item) => {
          return sum + item;
     }, 0);
}
console.log("11. ADD-LIST: ");
console.log(addList([1,2,3,4,5,6,7,8,9,10])) // 55

/**************************
 * 12. INVERT-PAIRS.
 *************************/
export function invertPairs(lst) {
     return lst.map(item => item.reverse());
}
console.log("12. INVERT-PAIRS: ");
console.log(invertPairs([['a', 1],['a',2],['b',1],['b',2]])) // [ [ 1, 'a' ], [ 2, 'a' ], [ 1, 'b' ], [ 2, 'b' ] ]

/**************************
 * 13. LIST-OF-SYMBOLS.
 *************************/
export function listOfSymbols(lst) {
     function isSymbol(value) {
          return typeof value === 'symbol';
     }
     return lst.every(isSymbol);  
}
console.log("13. LIST-OF-SYMBOLS: ");
console.log(listOfSymbols([Symbol(), Symbol(), Symbol()])); // true
console.log(listOfSymbols([Symbol(), 'hello', Symbol()])); // false

/**************************
 * 14. SWAPPER
 *************************/
export function swapper(a, b, lst) {
     return lst.map((item) => (item === a ? b : item === b ? a : item));
}
console.log("14. SWAPPER: ");
console.log(swapper(1,2,[4,4,5,2,4,8,2,5,6,4,5,1,9,5,9,9,1,2,2,4])) // ⇒ (4 4 5 1 4 8 1 5 6 4 5 2 9 5 9 9 2 1 1 4)

/**************************
 * 15. DOT-PRODUCT
 *************************/
export function dotProduct(aLst, bLst) {
     if (aLst.length !== bLst.length) {
       throw new Error('Both lists must have the same length to calculate the dot product.');
     }
   
     return aLst.reduce((sum, item, index) => {
       return sum + item * bLst[index];
     }, 0);
   }
console.log("15. DOT-PRODUCT: ");
// console.log(dotProduct([1.3,3.4,5.7,9.5,10.4], [-4.5,3.0,1.5,0.9,0.0])) // 21.45
console.log(dotProduct([1,2,3], [4,5,6])) // 32
console.log(dotProduct([], [])) // 0

/**************************
 * 16. AVERAGE
 *************************/
export function average(lst) {
     return lst.reduce((sum, item) => { return sum + item; }, 0) / lst.length;
}
console.log("16. AVERAGE: ");
console.log(average([1.7,4.5,0,2.0,3.4,5,2.5,2.2,1.2])) // 2.5

/**************************
 * 17. STANDARD-DEVIATION
 *************************/
export function standardDeviation(lst) {
     const avg = average(lst);
     return lst.reduce((sum, item) => {
          return sum + Math.pow((item - avg), 2)
     }, 0) / lst.length;
}
console.log("17. STANDARD-DEVIATION: ");
console.log(standardDeviation([9,2,5,4,12,7,8,11,9,3,7,4,12,5,4,10,9,6,9,4])) // 2.983

/**************************
 * 18. REPLIC
 *************************/
export function replic(n, lst) {
     if (n < 0) {
       throw new Error("n must be greater than or equal to 0");
     }
   
     // Helper function to replicate an element n times
     function replicateElement(element) {
       return Array(n).fill(element);
     }
   
     // Use the map function to replicate each element in lst
     return lst.flatMap(replicateElement);
   }
console.log("18. REPLIC: ");
console.log(replic(4,[1,2,3,4])) // [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]

/**************************
 * 19. EXPAND
 *************************/
export function expand(lst) {
     let e = 1;
     return lst.flatMap(item => Array(e++).fill(item))
}
console.log("19. EXPAND: ");
console.log(expand(['a','b','c','d','e'])) // (a b b c c c d d d d e e e e e)

/**************************
 * 20. BINARY
 *************************/
export function binary(n) {
     if (n === 0) {
       return [];
     }
   
     // Helper function to convert a decimal number to binary representation
     function decimalToBinary(num) {
       return num.toString(2).split("").map(Number);
     }
   
     return decimalToBinary(n);
}
console.log("20. BINARY: ");
console.log(binary(45123)) // (1 0 1 1 0 0 0 0 0 1 0 0 0 0 1 1)