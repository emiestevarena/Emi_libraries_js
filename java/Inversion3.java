import java.util.Scanner;
public class Inversion3{
    public static void main(String []args) {
        Scanner read = new Scanner(System.in);
        System.out.println("Ingrese largo del vector");
        int a= read.nextInt();
        int[] array= new int[a];
        System.out.println("Ingrese vector:");
        int i,j,k;
        for(i=0;i<a;i++){
            array[i]=read.nextInt();
        }
        read.close();
        k=a-1;
        System.out.print("Vector:");
        for(i=0;i<a;i++){
            for(j=i+1;j<k;j++){
                sort3(array,i,j,k);
            }
            k--;
            System.out.print(array[i]+",");
        }
        System.out.println("");

    }

    public static int[] sort2(int[] array,int a,int b){
        int c= array[a];
        int d= array[b];
        if(array[a]>array[b]){
            array[a]=d;
            array[b]=c;
        }
        return array;
    }

    public static int[] sort3(int[] array,int a,int b,int c){
        sort2(array,a,b);
        sort2(array,a,c);
        sort2(array,b,c);
        return array;
    }

}

