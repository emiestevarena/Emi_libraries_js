using System;

namespace Emi_js_library
{
    class Inversions3{
        static void Main(string[] args){
            int[] array;
            Console.WriteLine("Introduce array length");
            int a=int.Parse(Console.ReadLine());
            array = new int[a];
            for(int i=0;i<a;i++){
              array[i]=int.Parse(Console.ReadLine());
            }
            int b=0;
            int c=a;
            for(int i=0;i<a;i++){
                for(int j=i+1;j<a-1;j++){
                    sort3(array,i,j,a-1);
                    b++;
                }
                a--;
            }
            print(array,b,c);
        }
        static int[] sort2(int[] array,int a, int b){
            int c=array[a];
            int d=array[b];
            if(c>d){
                array[a]=d;
                array[b]=c;                
            }
            return array;
        }
        static int[] sort3(int[] array, int a, int b, int c){
            sort2(array,a,b);
            sort2(array,a,c);
            sort2(array,b,c);
            return array;
        }
        static void print(int[] array, int b, int c){
            Console.WriteLine($"Inversions: {b}");
            Console.Write("Array: ");
            for(int i=0;i<c;i++){
            Console.Write($" {array[i]} ,");}
            Console.WriteLine("");
        }
    } 
}
