//6) Consider the problem of adding two n-bit binary integers, stored in two n-element
//arrays A and B. The sum of the two integers should be stored in binary form in
//an element array C.
var binary1=[1,0,1,0,1,1,0];
var binary2=[1,0,1,1,0,0];

function binarySum(b1,b2){
  var m;
  var binary=[];
  b1=b1.reverse();
  b2=b2.reverse();
  if(b1.length>b2.length){
    m=b1.length;
  }else {m=b2.length;}
  for(i=0;i<m;i++){
    if(b1[i]===null||b1[i]===undefined){
      binary[i]=b2[i];
    }else if(b2[i]===null||b2[i]===undefined){
      binary[i]=b1[i];
    }else{
      binary[i]=b1[i]+b2[i];
    }
  }
  for(i=0;i<m;i++){
    if (binary[i]>1){
      binary[i+1]+=binary[i]-1;
      binary[i]=0;
      if(i===m-1){
        binary[i+1]=1;
      }
    }
    console.log(binary1[i]);
  }
  binary=binary.reverse();
  return binary;
}
 console.log(binarySum(binary1,binary2));
