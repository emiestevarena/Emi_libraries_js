function SearchArray2(array,value){
    var i=0;
    var j=array.length-1;
    while(i!=j){
				if(array[i]==value){
          return value+" is at index "+i;
        }else if(array[j]==value){
          return value+" is at index "+j;
        }else{
          i++;j--;
        }
          }
    return null;
  }
