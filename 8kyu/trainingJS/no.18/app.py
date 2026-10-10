


def split_and_merge(string_, separator):
    statement  = string_.split(" ")
    words = []
    for  value in statement:
     words.append(separator.join(value))
    return " ".join(words)

  
#  options 2
    #print(" ".join([separator.join(word) for word in string_.split(" ")]))