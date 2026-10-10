#
# Given three integers a, b, and c, 
# return the largest number obtained after inserting the operators +, *, and parentheses (). 
# In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.



def expression_matter(a, b, c):
    first = (a + b + c)
    second = a + b * c
    third = a * b + c
    fourth = a * b * c
    fifth = a + b + c
    sixth = a + (b + c)
    seventh = (a + b) * c
    eighth = a * (b + c)
    nineth = a * b + c
    tenth = a * (b + c)
    eleventh = a * b * c
    twevleth = a * (b * c)
    collection =[first,second,third,fourth,fifth,sixth,seventh,eighth,nineth,tenth,eleventh,twevleth]
    collection.sort()
    return collection[-1]