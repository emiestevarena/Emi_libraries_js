public class Inversions {
    public static void main(String []args) {
        int[] array={2, 3, 8, 6, 1};
        int mfq,inv,i,j,a,b;
        mfq=0;
        inv=0;
        b=0;
        for(i=0;i<array.length;i++){
            a=0;
            for(j=i;j<array.length;j++){
                if(i<j && array[i]>array[j]){
                     inv++;
                     a++;
                }
            }
            if(b<a){b=a;mfq=i;}
        }
        System.out.println("inversiones: "+inv+", con más frecuencia en índice: "+mfq);
    }
    
}