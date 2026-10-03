


import re
def is_digit(n):
    result = re.findall("^\d$",n)
    if result:
        return True
    else:
        return False
    
    
# import re
# def is_digit(n):
#     result = re.findall("^\d$",n)
#     if result:
#         return True
#     else:
#         return False