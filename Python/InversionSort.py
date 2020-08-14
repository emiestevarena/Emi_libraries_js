miLista3=[105,114,213,112,211,130,199,280,307,406,505,640,303,202,113]


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

miLista=[105,114,213,112,211,130,199,280,307,406,505,640,303,202,113]

a=0
l=0
k=len(miLista)-1
while k>l:
  n=l+1
  while n<k:
    sort3(miLista,l,n,k)
    n=n+1
    a=a+1  
  k=k-1
  l=l+1
print (miLista[:],a)

a=0
l=0
k=len(miLista3)
while k>l:
  n=l+1
  while n<k:
    sort2(miLista3,l,n)
    n=n+1
    a=a+1  
  l=l+1
print (miLista3[:],a)  

