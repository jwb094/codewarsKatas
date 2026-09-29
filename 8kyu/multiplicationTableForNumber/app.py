#Your goal is to return multiplication table for 
# number that is always an integer from 1 to 10.

def multi_table(number):
  multiTableString = ""; 
  for num in range(1,11): # range is 1=>10 stop is exclusive
    if num < 10:
      multiTableString += str(num) + " * " + str(number) + " = " + str(num * number)+"\n"
    else:
      multiTableString += str(num) + " * " + str(number) + " = " + str(num * number) 
  return multiTableString