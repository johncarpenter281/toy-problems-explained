// Reverse a string recursively
//
// This is a simple example of recursion. It exhibits a typical way of
// dealing with lists (here a string is treated as a list of characters.)
// It looks at the list as having two parts - the first entry, and the rest
// of the list. This is a common motif in how functional
// programming languages (such as Haskell) treat lists.
//
// Similarly, a recursive function has two basic parts - the base case, and
// the recursive case.
// The base case is how the algorithm knows when it is done. In this situation,
// we are cutting the first character off of the string each time, so when the
// string gets down to length zero, we know we are done and return an empty string.
//
// Otherwise, we cut off the first character of the string and attach it to the
// back of the rest of the string - AFTER is has been reversed by a recursive
// call to the function.
function reverse(str) {
  if (str.length === 0){ // base case - if the string is empty, we are done
    return ""; // we return the empty string that gets attached to the end of the rest
  } else {
    return reverse(str.slice(1)) + str.charAt(0); // call reverse with most of the string
                                                  // and append the first char to the end
  }
}
console.log(reverse("actual"));