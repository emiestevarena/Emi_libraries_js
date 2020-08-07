#include<stdlib.h>
#include<stdio.h>

int main(){
    int array[7]={2,7,4,3,90,14,23};
    int j,i,k,key;
    for(j=1;j<7;j++){
        key= array[j];
        i = j-1;
        while(i>0 && array[i]>key){
            k=i+1;
            array[k] = array[i];
            i--;
            k=i+1;
            array[k] = key;
        }
    }
    for(i=0;i<7;i++){
    printf("%d, ",array[i]);
    }
    return 0;
};