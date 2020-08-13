miLista2=[300,100,30,20,18,10,9,7,5]  

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
