#You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

#The returned value must be a string, and have "***" between each of its letters.

#You should not remove or add elements from/to the array.

def two_sort(array):
  selected_element = sorted(array)[0]
  element = []
  for index,letter in enumerate(selected_element):
     letter = selected_element[index]
     if index != len(selected_element)-1:
       element.append(letter+"***")
     else:
       element.append(letter)
  return "".join(element)