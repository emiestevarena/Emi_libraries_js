using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Emiliano
{
    class InsertionSort
    {
        static void Main(string[] args){
            int[] array = new int[7] { 2, 7, 4, 3, 90, 14, 23 };
            int j;
            for (j = 1; j < 7; j++) {
                int key = array[j];
                int i= j-1;
                while(i>0 && array[i]>key){
                    int k=i+1;
                    array[k] = array[i];
                    i = i-1;
                    k=i+1;
                    array[k] = key;
                };
                
            };
            for(j=0;j<7;j++){
                Console.Write(array[j]+",");
            };        
            Console.WriteLine(""); 

        }
        
    }
}
