#Remove an exclamation mark from the end of a string. 
# For a beginner kata, you can assume that the input data is always a string, no need to verify it.



def remove(word):
  #logic for if the word is empty string
  if word == "":
    return ""
  #logic for if the word contain character
  last_character = word[-1]
  if "!" in last_character:
    word = word[:-1]
  return word