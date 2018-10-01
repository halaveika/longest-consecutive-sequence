module.exports = function longestConsecutiveLength(array) {
    // if array is empty, return 0
    
    if (array.length == 0) {
        return 0;
    }
 
    let set = [];
    let max = 1;
 
    let i=array.length;
    while (--i>=0) set.push(array[i]);
 
    i=array.length;
    while (--i>=0) {
        let left = array[i] - 1;
        let right = array[i] + 1;
        let count = 1;
 
        while (set.indexOf(left) != -1) {
            count++;
            set.splice(set.indexOf(left), 1);
            left--;
        }
 
        while (set.indexOf(right) != -1) {
            count++;
            set.splice(set.indexOf(right), 1);
            right++;
        }
 
        max = Math.max(count, max);
    }
 
   return module.exports=max;
}