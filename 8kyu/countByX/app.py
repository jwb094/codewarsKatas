
# Create a function with two arguments 
# that will return an array of the first n multiples of x.



def count_by(multipleNumber, limit):
    multiple = []
    index = 1
    while len(multiple) < limit:
        if index % multipleNumber == 0:
            multiple.append(index)
        index += 1
    return multiple
    """
    Return a sequence of numbers counting by `x` `n` times.
    """