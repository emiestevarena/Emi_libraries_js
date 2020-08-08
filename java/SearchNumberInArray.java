import java.util.Scanner;
public class SearchNumberInArray{
    public static void main(String []args) {
        final Scanner read = new Scanner(System.in);
        final int[] array = { 2, 7, 4, 3, 90, 14, 23 };
    int j,n,x;
    x=0;
    System.out.println("ingrese un número");
    n=read.nextInt();
    read.close();
    for(j=0;j<array.length;j++){
        if(array[j]==n){x=1;break;}
    }
    if(x==1){System.out.println(n+" is at index "+j);}
    else{System.out.println("number not found");}
    }
   
}