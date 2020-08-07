#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<string.h>

int main(){
	int value;
	printf("enter a value\n");
	scanf("%d",&value);
    searchValue(value);
	return 0;
}

int searchValue(int value){
	int array[7]={2,7,4,3,90,14,23};
	int x=0;
	int i;
    for(i=0;i<7;i++){
      if(value==array[i]){
        x=1;
        break;
      }
    }
    if(x==1){printf("%d is at index %d\n",value,i);return 0;}
    else{return 1;}
};
