#include <stdio.h>
#include<stdlib.h>

int main(){
    int array[]={2, 3, 8, 6, 1};
    int inversions=0;
    int mostFrequent=0;
    int a,b,i,j;
    for(i=0;i<5;i++){
        a=0;
        for(j=0;j<5;j++){
            if(i<j && array[i]>array[j]){
                inversions++;
                a++; 
            }
        }
        if(i==0||b<a){b=a;mostFrequent=i;}
    }
    printf("inversions: %d, most frequent at index: %d",inversions,mostFrequent);
    return 0;
}