import math

def round_it(n): 
    numbers_left_of_decimal_place = len(str(n).split(".")[0])
    numbers_right_of_decimal_place = len(str(n).split(".")[1])
    
    if numbers_left_of_decimal_place <  numbers_right_of_decimal_place: return math.ceil(n)
    if numbers_left_of_decimal_place >  numbers_right_of_decimal_place: return math.floor(n)
    if numbers_left_of_decimal_place ==  numbers_right_of_decimal_place: return round(n)