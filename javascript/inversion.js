var array=[2, 3, 8, 6, 1];

function Inversion(array){
    var inv=0;
    var mfq=0;
    var a,b,i,j;
    var c= array.length;
    b=0;
    for(i=0;i<c;i++){
      a=0;
      for(j=0;j<c;j++){
        if(i<j && array[i]>array[j]){
                a++;
                inv++;
            }
      }
      if(b<a){b=a;mfq=i;}
    }
    console.log("inversions: "+inv+", most frequent at index "+mfq);
} 

Inversion(array);

