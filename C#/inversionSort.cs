using System;


class MainClass {
  public static void Main (string[] args) {
    int[] array = {7,11,9,20,3,13,8,23,12,99,87,1,-7,34,23};
    for(int i=0;i<14;i++){
      for(int j=14;j>i;j--){
        int d=array[i];
        int e=array[j];
        if(d>e){
          array[i]=e;
          array[j]=d;
        }
      }
    }
    for(int i=0;i<15;i++){
       Console.Write($"{array[i]},");
    }
   
  }

}
