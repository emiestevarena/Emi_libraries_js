//5) Search algorithm
function SearchArray(array,value){
    var x=0
    for(i=0;i<array.length;i++){
      if(value===array[i]){
        x=1;
        break;
      }
    }
    if(x===1){return value+" is at index "+i;}
    else{return null;}
  }
  console.log(SearchArray(array,3));
  