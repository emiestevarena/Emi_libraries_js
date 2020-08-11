public class InversionSort {
    public static void main(String []args) {
        int[] array={2, 3, 8, 6, 1};
        int mfq,inv,i,j,a,b,c;
        mfq=0;
        inv=0;
        b=0;
        System.out.print("array: ");
        for(i=0;i<array.length;i++){
            a=0;
            for(j=i;j<array.length;j++){
                if(i<j && array[i]>array[j]){
                     inv++;
                     a++;
                     c=array[i];
                     array[i]=array[j];
                     array[j]=c;
                }
            }
            if(b<a){b=a;mfq=i;}
            System.out.print(array[i]+",");
        }
        System.out.println("");
        System.out.println("inversiones: "+inv+", con más frecuencia en índice: "+mfq);
    }
}