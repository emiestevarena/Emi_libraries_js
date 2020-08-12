using System;

class MainClass {
  public static void Main (string[] args) {
    int[] array = new int[7] { 2, 7, 4, 3, 90, 14, 23 };
    int j,n,x;
    x=0;
    Console.WriteLine("ingrese un número");
    n=Convert.ToInt32(Console.ReadLine());
    for(j=0;j<7;j++){
        if(array[j]==n){x=1;break;}
    }
    if(x==1){Console.WriteLine(n+" is at index "+j);}
    else{Console.WriteLine("number not found");}
  }
}
