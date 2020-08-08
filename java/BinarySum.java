public class BinarySum {

    public static void main(final String[] args) {    
        final int[] binary1 = { 1, 0, 1, 0, 1, 1, 0 };
        final int[] binary2 = { 1, 0, 1, 1, 0, 0 };
        final int[] binary = new int[8];
        int i;
        //initial sum
        for(i=7;i>0;i--){
            if(i>=2){binary[i]=binary1[i-1]+binary2[i-2];}
            else{binary[i]=binary1[i-1];}
        }
        //checking for twos
        for(i=1;i<8;i++){
            System.out.print(binary[i]);
        }
        //displacing twos
        System.out.println("");
        for(i=7;i>0;i--){
            if(binary[i]==2){
                binary[i]=0;
                binary[i-1]+=1;
            }
        }
        //final array
        System.out.println("Binary: ");
        for(i=0;i<8;i++){
            System.out.print(binary[i]);
        }
        System.out.println("");
    }
}