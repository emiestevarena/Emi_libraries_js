#include <stdio.h>
#include <stdlib.h>

int main(){
    int array [15]={15,14,13,12,11,10,9,8,7,6,5,4,3,2,1};
    int* ptr_array = array;
    int i,k,j;
    printf("set array: \n");
    j=15;
    for(i=0;i<15;i++){
        scanf("%d",&array[i]);
    }
    for(i=0;i<j;i++){
        for(k=i+1;k<j;k++){
            sort3(ptr_array,i,k,j);
        }
        j--;
    }
    printf("sorted array: \n");
    j=15;
    for(i=0;i<15;i++){
        printf("%d,",array[i]);
    }
    printf("\n");
    return 0;
}

void sort2(int* array,int a,int b){
    int c= array[a];
    int d= array[b];
    if(array[a]>array[b]){
        array[a]=d;
        array[b]=c;
    }
    return array;
}

void sort3(int* array,int a,int b, int c){
    sort2(array,a,b);
    sort2(array,a,c);
    sort2(array,b,c);
    return array;
}