#Write a method, that will get an integer array as parameter and will process every number from this array.
# Return a new array with processing every number of the input-array like this:
# If the number has an integer square root, take this, otherwise square the number.

import math
def square_or_square_root(arr):
      return list(map(lambda x: 
                      int(math.sqrt(x)) # value if true
                      if math.sqrt(x).is_integer() # if condition 
                      else (x * x), arr)) # value if else