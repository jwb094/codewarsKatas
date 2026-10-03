#The code provided is supposed replace all the dots . in the specified String str with dashes -

#But it's not working properly.

#Task
#Fix the bug so we can all go home early.

#Problem
# import re
# def replace_dots(s):
#     return re.sub(r".", "-", s)


def replace_dots(s):
    return s.replace(".","-")