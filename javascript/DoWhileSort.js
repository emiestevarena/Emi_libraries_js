var array2 = [3,41,52,26,38,57,9,49,5,2,4,7,1,3,2,6,10];

function DoWhileSort(array){
  var i=1, j=0, k=0;
  do{
    var l = array[i]
    if(l<array[i-1]){
      array[i]=array[i-1];
      array[i-1]=l;
      j++;i=i-2;
    }
    i++; k++;
  }while(i<array.length);
  console.log("Inversiones: "+j);
  console.log("Comparaciones: "+k);
  return array;
}

console.log(DoWhileSort(array2));
