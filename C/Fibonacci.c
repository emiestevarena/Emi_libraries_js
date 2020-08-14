#include <stdio.h>
#include <stdlib.h>

int main(){
    int a,b;
    printf("Select a number in the Fibonacci sequence\n");
    scanf("%d",&a);
    b= Fibonacci(a);
    printf("%d\n",b);
    return 0;
}

int Fibonacci(int a){
    if(a<=0){
        return 0;
    }else if(a==1){
        return 1;
    }else{
        return Fibonacci(a-1) + Fibonacci (a-2);
    }
}