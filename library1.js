// Insertion sort algorithm
// input = (a1...an), where numbers are not a1<=a2<=a3
// efficient provided that input array is small
var array = [2,7,4,3,90,14,23]
// output = a1<= a2 <= a...n
function insertionSort(array){
    for(j=1;j<array.length;j++){
        var key= array[j]
        var i = j-1;
        while(i>0 && array[i]>key){
            array[i+1] = array[i];
            i = i-1;
            array[i+1] = key;
        }
    }
    return array;
}
console.log(insertionSort(array));

// a1<a2 insertion sort w/ method
function insertionSortB(array){
    for(j=1;j<array.length;j++){
        var key= array[j]
        var i = j-1;
        while(i>0 && array[i]<key){
            array[i+1] = array[i];
            i = i-1;
            array[i+1] = key;
        }
    }
    if(array[0]<array[array.length-1]){array.push(array[0]); array.shift(array[0])}
    return array;
}


//2) number center
function centernumber(j){
    var	centro=[];
    var	c=1;
    var	i=0;
    do{
      c += 1;
      var a=1;
      var	suma1=0;
      var suma2=0;
      while(a<c){
        suma1 +=a;
        a +=1;
      };
      b=c+1;
      while(suma2<suma1){
        suma2 += b;
        b +=1;
      };
      if(suma1===suma2){
        centro[i]=c;
        i +=1;
      }
    }while(i<j);
    return centro;
    }
    
    console.log(centernumber(5));