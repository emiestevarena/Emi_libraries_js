# 15 Array Length Tree - 17 loops, 51 comparisons
# where: 
#   first: 0++ < 7 < 14--  with reset when 7 changes value
#   second: 0++ < 3 < 6--   with reset when 7 changes value
#   third:  8++ < 11 < 15--  with reset when 7 changes value
#   fourth:  0 < 1 < 2 and 4 < 5 < 6 and 8 < 9 < 10 and 11 < 12 < 13

milista = [14,42,33,44,55,663,47,58,69,710,311,512,613,714,185]

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

def sort(lista):
  a=0
  l=0
  while l<3:
    if l==0:
      i=0
      j=14
      k=7
    else:
      if l==1:
        i=0
        j=6
        k=3
      else:
        i=8
        k=11
        j=14
    aux=lista[k]
    while j>k:
      sort3(lista,i,k,j)
      if lista[k]<aux:
        aux=lista[k]
        if l==0:
          i=0
          j=14
        else:
          if l==1:
            i=0
            j=6
          else:
            i=8
            j=14
      else:
        i=i+1
        j=j-1
      a=a+1
    l=l+1
  l=0
  i=0
  while l<4:
    j=i+1
    k=i+2
    sort3(lista,i,j,k)
    a=a+1
    l=l+1
    i=i+4
  print(lista[:],a)    

sort(milista)

#prior attempts with 9-length array

miLista2=[300,15,30,20,37,10,4,7,50]

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
