// binaryToDecimal
//
// This function takes a binary number and converts it to
// its decimal equivalent. (NOTE:this is an exercise. You could
/// use parseInt(n, 2), but that kind of defeats the purpose, no?)
//
// ====== About Number Systems ======
// The numbers most of us are used to are in base 10. There are ten
// digits in the base 10 system, 0 through 9.
// Numbers higher than nine are expressed by using a place-value
// system. For example, the number 17 has a seven in the "ones" place,
// and a one in the "tens" place. The number 358 has an 8 in the "ones"
// place, a 5 in the "tens" place, and a 3 in the "hundreds" place.
// As our numbers get bigger, we add more places to the left, with each
// place valued at ten times more than the previous one.
//
// In a binary system, the do much the same thing, except that instead
// of basing the place values on multiples of ten, they are based on
// multiples of two. Also, there are only two digits in the base 2 system,
// 0 and 1.
//
// So a number such as 101b (the b only indicates it is a binary number so
// we don't get confused about what base we are in when we look at it), there
// is a 1 in the "ones" place, and 0 in the "twos" place, and a 1 in the 
// "fours" place. As the numbers get bigger, each successive place is a
// bigger multiple of two. (The first column is multiplied by 2^0 = 1, the
// second is 2^1 = 2, the third is 2^2 = 4, etc.)
//
// For the base 10 value 358, we would add 8 plus 5x10 plus 3x100 to get the
// value it is representing. For the base 2 value 101b, we would add 1x1=1 plus
// 0x2=0 plus 1x4=4 to get the value it is representing (5).
//
// Since most of us "think" in base 10 and thus have a much better feel for
// the relative size of a value when it is expressed in base 10, it often
// helps to convert a binary representation of a number to its decimal equivalent.
// ====== End of Number Systems Lecture =======
// So - to convert a number in binary to a number in decimal, we start with the
// least significant digit (the one on the far right) and start adding powers
// of two to the decimal sum based on whether there is a one or zero in a given
// place. For example, given 1011b, we would add 1+2+8 to get 11.
//
function binaryToDecimal (n) {
  var result = 0; // initialize our result to zero
  var arr = n.split("").reverse(); // make it easy to start with least significant digit
  for (var index=0;index<arr.length;index++){
    result += (arr[index] === "1") ? Math.pow(2, index) : 0; // if a one in a given place,
  }                                                   // add 2 raised to the power of the
  return result;                                      // place to the result
}

// The Functional Programming version
function binaryToDecimalFP (n) {
  return n.split('').reverse().reduce(function(accum, value, index){
    return (value === '1') ? accum + Math.pow(2, index) : accum;
  }, 0);
}
console.log(binaryToDecimal("100101"));
console.log(binaryToDecimalFP("100101"));