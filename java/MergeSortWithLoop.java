public class MergeSortWithLoop{
    public static void main(String []args){
        int[] array={2,7,4,3,90,14,23,41,49};
        int[] arrayBig= new int[5];
        int[] arraySmall= new int[4];
        int p, q, r, h, i, j;
        int a=0;
        for(i=1;i<9;i+=2){ //divide
         h=i-1;
         p=array[h];
         q=array[i];
        if(p>q){
           arrayBig[a]=p;
           arraySmall[a]=q;
         }else{
           arrayBig[a]=q;
           arraySmall[a]=p;
        }a++;}
        arrayBig[4]=array[8];//push dangling number
        //printing divided arrays
        System.out.print("arrayBig: ");
        for(i=0;i<5;i++){
            System.out.print(arrayBig[i]+", ");
        }
        System.out.println("");
        System.out.print("arraySmall: ");
        for(i=0;i<4;i++){
          System.out.print(arraySmall[i]+", ");
        }
        System.out.println("");
        for(i=1;i<5-1;i++){ //conquerBig
        h=i-1;
        j=i+1;
        p=arrayBig[h];
        q=arrayBig[i];
        r=arrayBig[j];
        if(p>q){
          arrayBig[i]=p;
          arrayBig[h]=q;
          if(arrayBig[i]>r){
              arrayBig[i]=r;
            arrayBig[j]=p;
            i=0;}
        }
        if(q>r){
          arrayBig[i]=r;
          arrayBig[j]=q;
          i=0;
        }
      }
      for(i=1;i<4-1;i++){ //conquerSmall
        h=i-1;
        j=i+1;
        p=arraySmall[h];
        q=arraySmall[i];
        r=arraySmall[j];
        if(p>q){
          arraySmall[i]=p;
          arraySmall[h]=q;
          if(arraySmall[i]>r){
              arraySmall[i]=r;
            arraySmall[j]=p;
            i=0;}
        }
        if(q>r){
          arraySmall[i]=r;
          arraySmall[j]=q;
          i=0;
        }
      }
      //printing sorted divided arrays
      System.out.print("arrayBig: ");
        for(i=0;i<5;i++){
          System.out.print(arrayBig[i]+", ");
        }
        System.out.println("");
        System.out.print("arraySmall: ");
        for(i=0;i<4;i++){
          System.out.print(arraySmall[i]+", ");
        }
        System.out.println("");
        a=0;
      for (i=0;i<4;i++){ //merge
        array[i]=arraySmall[i];
        a++;
      } 
      for (i=0;i<5;i++){
        j=a+i;
        array[j]=arrayBig[i];
      }
      for(i=1;i<9-1;i++){ //conquerAll
        h=i-1;
        j=i+1;
        p=array[h];
        q=array[i];
        r=array[j];
        if(p>q){
          array[i]=p;
          array[h]=q;
          if(array[i]>r){
              array[i]=r;
            array[j]=p;
            i=0;}
        }
        if(q>r){
          array[i]=r;
          array[j]=q;
          i=0;
        }
      }
      System.out.print("arraySmall: ");
        for(i=0;i<9;i++){
          System.out.print(array[i]+", ");
        }
        System.out.println("");
    }
}