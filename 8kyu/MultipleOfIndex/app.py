#Return a new array consisting of elements which are 
# multiple of their own index in input array (length > 1).



def multiple_of_index(arr):
  resultIndex = []
  result = list(filter(lambda item: item , enumerate(arr)))
  for x in result:
    if x[0] == 0 and  x[1] == 0:
        resultIndex.append(x[1])
    if x[0] != 0:
      if (x[1] % x[0] == 0):
        resultIndex.append(x[1])
  return resultIndex