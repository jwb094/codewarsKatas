#Write a function to split a string of space-separated words and convert it into an array of words. 
# Words in the input will be separated by exactly one space. 
# The input will not have leading or trailing spaces. 
# A "word" is any contiguous sequence of characters that does not contain any space.
def string_to_array(s):
  if s == "":
    return [""]
  else:
    return s.split()