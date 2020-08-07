
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


  //3) The number of m elements from n is equal to:
	// m/n = m!/(n!*(m-n)!)
	// calculate m/n combination
function combination(n){
  let m = n
  let pop = 0
  while(pop===0){
    pop= combinatorio(m,n)
    if(pop===0){m=m+1}
  }
  return "numero combinatorio: " + m +"/" + n
  }
    
  function combinatorio(m,n){
    let pip
    var facM= factorial(m)
    var facN= factorial(n)
    var p = m-n
    var facP= factorial(p)
    var div1= m/n
    var m1=facN*facP
    var div2=facM/m1
    if(div1===div2){pip=1}else{pip=0} 
    return pip}
  
  function factorial(f){
    var ff
    if(f===0 || f===1){ff=1}else{ff=f*factorial(f-1)}
    return ff}
    
  console.log(combination(90))

//4) Euclides algorithm
function Euclides(num1,num2){
  let e, div;
  if(num1>=num2){e=num2}else{e=num1}
	if(e===1){div=1}else{div=0}
	for(i=1;i<=e;i++){
    let c=num1%i
    let d=num2%i
    if(c===0 && d===0){div=i}
  }
  return  "máximo común divisor: "+ div;
}

console.log(Euclides(8,4))



 