var array=[2, 3, 8, 6, 1];

function Inversion(array){
    var inv=0;
    var mfq=0;
    var a,b,i,j;
    b=0;
    for(i=0;i<array.length;i++){
      a=0;
      for(j=i;j<array.length;j++){
        if(i<j && array[i]>array[j]){
                a++;
                inv++;
              	c=array[i];
                array[i]=array[j];
                array[j]=c;
            }
      }
      if(b<a){b=a;mfq=i;}
    }
    console.log("inversions: "+inv+", most frequent at index "+mfq);
  	return array;
} 

Inversion(array);

//With separate functions

var array2= [11,2,93,14,35,56,17,78,19];

function sort2(array,a,b){
  c=array[a];
  d=array[b];
  if(c>d){
    array[a]=d;
    array[b]=c;
  }
  return array;
}

function sort(array){
  for(a=0;a<array.length;a++){
    for (b=a+1;b<array.length;b++){
      sort2(array,a,b);
      console.log(array,a,b);
    }
  }
  return array;
}

console.log(sort(array2));

//with sort3 recursion

var array3= [9,8,7,6,5,4,3,2,1];

function sort3(array,a,b,c){
  sort2(array,a,b);
  sort2(array,a,c);
  sort2(array,b,c);
  return array;
}

function callSort3(array){
  i=0;
  for(k=array.length-1;k>i;k--){
    for(j=i;j<k;j++){
      sort3(array,i,j,k);
    }
    i++;
  }
  return array;
}

console.log(callSort3(array3));
