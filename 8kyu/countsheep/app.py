#Consider an array/list of sheep where some sheep may be missing from their place. 
# We need a function that counts the number of sheep present in the array (true means present).



def count_sheeps(sheep):
   return len(list(filter(get_present_sheep,sheep)))

#filter array function
def get_present_sheep(mark):
  return mark == True