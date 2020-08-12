using System;

class MainClass {
  public static void Main (string[] args) {
    Console.Write("Presum: ");
    int[] binary1 = new int[7] { 1, 0, 1, 0, 1, 1, 0 };
    int[] binary2 =new int[6] { 1, 0, 1, 1, 0, 0 };
    int[] binary = new int[8];
        int i;
        //initial sum
        for(i=7;i>0;i--){
            if(i>=2){binary[i]=binary1[i-1]+binary2[i-2];}
            else{binary[i]=binary1[i-1];}
        }
        //checking for twos
        for(i=1;i<8;i++){
            Console.Write(binary[i]);
        }
        //displacing twos
        Console.WriteLine("");
        for(i=7;i>0;i--){
            if(binary[i]==2){
                binary[i]=0;
                binary[i-1]+=1;
            }
        }
        //final array
        Console.Write("Binary: ");
        for(i=0;i<8;i++){
            Console.Write(binary[i]);
        }
        Console.WriteLine("");
  }
}
