module.exports = function longestConsecutiveLength(array) {
  let set = new Set();
  for(let i = 0; i < array.length; i++){
    if(!set.has(array[i])){
      set.add(array[i]);
    }
  }
  let max = 0;
  let count = 0;
  for(i in array){
    temp = array[i];
    if(set.has(array[i])){
      count = 1;
      set.delete(array[i]);
    }        
    while(set.has(temp - 1)){
      if(set.has(temp - 1)){
        count ++;
        set.delete(temp - 1);
        temp -= 1;
      }   
    }
    temp = array[i];
    while(set.has(temp + 1)){
      if(set.has(temp + 1)){
        count ++;
        set.delete(temp + 1);
        temp += 1;
      }   
    }
    if(count > max){
      max = count;
    }
  }
  return module.exports=max;
}