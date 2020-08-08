public class InsertionSort{
    public static void main(final String[] args) {
        final int[] array = { 2, 7, 4, 3, 90, 14, 23 };
        int j;
        for (j = 1; j < array.length; j++) {
            final int key = array[j];
        int i= j-1;
        while(i>0 && array[i]>key){
            int k=i+1;
            array[k] = array[i];
            i = i-1;
            k=i+1;
            array[k] = key;    
        }
    };
    for(j=0;j<7;j++){
        System.out.print(array[j]+",");
    }
    System.out.println("");
    }
}