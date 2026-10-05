#Create a function that checks if a number n is divisible by two numbers x AND y. 
# All inputs are positive, non-zero numbers.



#Option 1
# def is_divisible(n,x,y):
#   if n % x == 0 and n % y ==0:
#     return True
#   else: 
#     return False

def is_divisible(n,x,y):
    return True if n % x == 0 and n % y ==0 else  False