public class MergeSortBigtoSmall {

    public static void main(String []args){
        int[] array={11,2,93,14,35,56,17,78,19};
        int[] arrayBig = new int[5];
        int[] arraySmall = new int[4];
        int i,a,b,c,p,q,r;
        arrayBig[4]=array[8];
        a=array.length;
        b=0;
        for(i=1;i<a;i+=2){
            p=array[i-1];
            q=array[i];
            if(p<q){
                arrayBig[b]=q;
                arraySmall[b]=p;
            }else{
                arrayBig[b]=p;
                arraySmall[b]=q;
            }
            b++;
        }
        System.out.print("Array big unsorted: ");
        for(i=0;i<5;i++){
            System.out.print(arrayBig[i]+",");
        }
        System.out.println("");
        System.out.print("Array small unsorted: ");
        for(i=0;i<4;i++){
            System.out.print(arraySmall[i]+",");
        }
        System.out.println("");
        for(i=1;i<4;i++){
            p=arrayBig[i-1];
            q=arrayBig[i];
            r=arrayBig[i+1];
            if(p<q){
                arrayBig[i]=p;
                arrayBig[i-1]=q;
            }
            if(q<r){
                arrayBig[i]=r;
                arrayBig[i+1]=q;
                if(arrayBig[i]>p){
                    arrayBig[i]=p;
                    arrayBig[i-1]=r;
                    i=0;
                }
            }
        }
        System.out.print("Array big sorted: ");
        for(i=0;i<5;i++){
            System.out.print(arrayBig[i]+",");
        }
        System.out.println("");
        for(i=1;i<3;i++){
            p=arraySmall[i-1];
            q=arraySmall[i];
            r=arraySmall[i+1];
            if(p<q){
                arraySmall[i]=p;
                arraySmall[i-1]=q;
            }
            if(q<r){
                arraySmall[i]=r;
                arraySmall[i+1]=q;
                if(arraySmall[i]>p){
                    arraySmall[i]=p;
                    arraySmall[i-1]=r;
                    i=0;
                }
            }
        }
        System.out.print("Array small sorted: ");
        for(i=0;i<4;i++){
            System.out.print(arraySmall[i]+",");
        }
        System.out.println("");
        b=0;
        c=0;
        for(i=0;i<a;i++){
            if(b<5&&c<4){
                if(arrayBig[b]>arraySmall[c]){
                    array[i]=arrayBig[b];
                    b++;
                }else{
                    array[i]=arraySmall[c];
                    c++;
                }
            }else if(b==5){
                array[i]=arraySmall[c];
                c++;
            }else if(c==4){
                array[i]=arrayBig[b];
                b++;
            }else{};
        }
        System.out.print("Array sorted: ");
        for(i=0;i<a;i++){
            System.out.print(array[i]+",");
        }
        System.out.println("");
    }
    
}