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