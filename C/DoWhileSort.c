#include <stdio.h>

int main(void) {
  int array[]={3,41,52,26,38,57,9,49,5,2,4,7,1,3,2,6,10};
  size_t n = sizeof(array) / sizeof(array[0]);
  int i=1, j=0, k=0;
  do{
    int l = array[i];
    if(l<array[i-1]){
      array[i]=array[i-1];
      array[i-1]=l;
      j++;i=i-2;
    }
    i++; k++;
  }while(i<n);
  printf("Array: ");
  for(int i=0;i<n;i++){
    printf("%d, ",array[i]);
  }
  printf("\n");
  printf("Comparisons: %d\n",k);
  printf("Inversions: %d\n",j);
  return 0;
}
