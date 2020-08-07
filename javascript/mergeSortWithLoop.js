// Merge sort
var array2 = [3,41,52,26,38,57,9,49,5,2,4,7,1,3,2,6,10];

function mergeSort(array){ 
  var arrayBig=[]
  var arraySmall=[]
  var p;
  var q;
  var r;
  var a=0
  for(i=1;i<array.length;i+=2){ //divide
     p=array[i-1];
     q=array[i];
    if(p>q){
       arrayBig[a]=p;
       arraySmall[a]=q;
     }else{
       arrayBig[a]=q;
       arraySmall[a]=p;
    }a++;}
 if(array.length%2===1){arrayBig.push(array[array.length-1]);}//push dangling number
 console.log(arrayBig);
 console.log(arraySmall);
	for(i=1;i<arrayBig.length-1;i++){ //conquerBig
    p=arrayBig[i-1];
    q=arrayBig[i];
    r=arrayBig[i+1];
    if(p>q){
      arrayBig[i]=p;
      arrayBig[i-1]=q;
      if(arrayBig[i]>r){
      	arrayBig[i]=r;
        arrayBig[i+1]=p;
        i=-1;}
    }
    if(q>r){
      arrayBig[i]=r;
      arrayBig[i+1]=q;
      i=-1;
    }
  }
	for(i=1;i<arraySmall.length-1;i++){ //conquerSmall
    p=arraySmall[i-1];
    q=arraySmall[i];
    r=arraySmall[i+1];
    if(p>q){
      arraySmall[i]=p;
      arraySmall[i-1]=q;
      if(arraySmall[i]>r){
      	arraySmall[i]=r;
        arraySmall[i+1]=p;
        i=0;}
    }
    if(q>r){
      arraySmall[i]=r;
      arraySmall[i+1]=q;
      i=0;
    }
  }
   console.log(arraySmall);
   console.log(arrayBig);
  a=0;
  for (i=0;i<arraySmall.length;i++){ //merge
    array[i]=arraySmall[i];
    a++;
  } 
  for (i=0;i<arrayBig.length;i++){
    array[i+a]=arrayBig[i];
  }
  for(i=array.length-2;i>-1;i--){ //reorder
    p=array[i-1];
    q=array[i];
    r=array[i+1];
    if(p>q){
      array[i]=p;
      array[i-1]=q;
      if(array[i]>r){
      	array[i]=r;
        array[i+1]=p;
        i=array.length-1;}}
    if(q>r){
      arraySmall[i]=r;
      arraySmall[i+1]=q;
      i=array.length-1;
    }
  }
  return array;
 }
console.log(mergeSort(array2));