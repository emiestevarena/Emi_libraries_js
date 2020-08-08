#include<stdio.h>
#include<stdlib.h>

int main(){
    int binary1[7] = { 1, 0, 1, 0, 1, 1, 0 };
    int binary2[6] = { 1, 0, 1, 1, 0, 0 };
    int binary[8]={};
    int i;
    //initial sum
    for(i=7;i>0;i--){
        if(i>=2){binary[i]=binary1[i-1]+binary2[i-2];}
        else{binary[i]=binary1[i-1];}
    }
    //checking for twos
    for(i=1;i<8;i++){
        printf("%d",binary[i]);
    }
    printf("\n");
    //displacing twos
    for(i=7;i>0;i--){
        if(binary[i]==2){
            binary[i]=0;
            binary[i-1]+=1;
        }
    }
    //final array
    printf("Binary: ");
    for(i=0;i<8;i++){
        printf("%d",binary[i]);
    }
    printf("\n");
    return 0;
}


        
        
        
        
        
        
        