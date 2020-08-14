miLista2=[300,15,30,20,37,10,4,7,50]  

def sort2(lista,a,b):
  c=lista[b]
  d=lista[a]
  if lista[a]>lista[b]:
    lista[b]=d
    lista[a]=c  
  return lista

def sort3(lista,a,b,c):
  sort2(lista,a,b)
  sort2(lista,a,c)
  sort2(lista,b,c)
  return lista

print(miLista2[:])
sort3(miLista2,0,1,2) #1
print(miLista2[:])
sort3(miLista2,1,3,4) #2
print(miLista2[:])
sort3(miLista2,2,5,6) #3
print(miLista2[:])
sort3(miLista2,3,7,8) #4
print(miLista2[:])
sort3(miLista2,6,7,8) #5
print(miLista2[:])
sort3(miLista2,4,7,8) #6
print(miLista2[:])
sort3(miLista2,0,2,6) #7
print(miLista2[:])
sort3(miLista2,4,5,6) #8
print(miLista2[:])
sort3(miLista2,0,1,4) #9
print(miLista2[:])
sort3(miLista2,0,1,3) #10 -30 comparisons
print(miLista2[:])


# 13 Array Length Tree
miLista=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]


print(miLista[:])
sort3(miLista,0,1,2) #1
print(miLista[:],"1")
sort3(miLista,1,3,4) #2
print(miLista[:],"2")
sort3(miLista,2,5,6) #3
print(miLista[:],"3")
sort3(miLista,3,7,8) #4
print(miLista[:],"4")
sort3(miLista,4,9,10) #5
print(miLista[:],"5")
sort3(miLista,5,11,12) #6
print(miLista[:],"6")
sort3(miLista,6,13,14) #7
print(miLista[:],"7")
sort3(miLista,1,10,13) #8
print(miLista[:],"8")
sort3(miLista,0,9,12) #9
print(miLista[:],"9")
sort3(miLista,2,8,11) #10
print(miLista[:],"10")
sort3(miLista,0,3,6) #11
print(miLista[:],"11")
sort3(miLista,2,3,5) #12
print(miLista[:],"12")
