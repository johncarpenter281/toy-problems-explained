// Binary Search
// This is a very effient way (O(log n)) to find the location of a value
// in a SORTED array.
//
// The algorithm starts with the whole array, storing the location of the first
// and last elements in minIndex and maxIndex.
// It calculates the location of the middle value by adding minIndex and
// maxIndex and dividing by 2 and throwing away any fractional part of the
// result. This value gets saved as curIndex.
//
// For example, if there are eight values in the array,
//      0 + 7 = 7     (arrays in Javascript are zero-based)
//        7/2 = 3.5
//   Math.floor(3.5) = 3
// so the middle location for this example would be three.
// 
// It then determines if the desired value is in a location above or below
// the middle location.
//
// If the desired value is above the current location we narrow down our search
// to the upper part of the array. Otherwise, we will start looking in the bottom
// half of the array. To do this we set either minIndex to one location above
// the middle (leaving maxIndex at the end of the current range), or maxIndex
// equal to one location below the middle (leaving minIndex pointing to the low
// end of the current range) depending on which part of the array we want
// to search next.
//
// In the above example, if we determine that the desired value is
// in some location higher than 3, we set minIndex = 4. maxIndex would stay at 7,
// so our new search range would be from index 4 to index 7, the top half of the array.
//
// Now that we have a new minIndex or maxIndex, we start all over again, but
// now we are only looking at half the values we were looking at before. We
// continue in this manner, cutting the range of possible locations in half
// each time, until we find the desired value.
//
//
// This algorithm is O(log n) because, given an array of length n, it will take 
// no more than log(n) operations to complete. Revisiting the above example, 
// log(8) = 3 (with base 2.) Thus it will take no more than three passes to find the 
// desired location.
//
function binarySearch(arr, target){
    var minIndex = 0;
    var maxIndex = arr.length-1;
    var curIndex;
    var curValue;

    while (minIndex <= maxIndex) {    // if these pass each other, the value is not here
        curIndex = Math.floor((minIndex + maxIndex) / 2); // get location in middle of current range
        
        curValue = arr[curIndex];     // get the value at the middle location
        if (target > curValue) {      // is the desired value greater than the value at the middle?
            minIndex = curIndex + 1;  // set the new range to upper half of current range
        }
        else if (target < curValue) { // is the desired value less than the value at the middle?
            maxIndex = curIndex - 1;  // set the new range to lower half of current range
        }
        else {
            return curIndex;          // otherwise - we found it!
        }
    }
    return -1; // the min and max indexes crossed each other, so the value was not here
}
console.log(binarySearch([25,26,27,28,29,30,31,32], 30)) // 5
