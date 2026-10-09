# Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

# e.g. Feburay = 2 = 1st Quarter
def quarter_of(month): 
    months = {
        1 : [1,2,3],
        2 : [4,5,6],
        3 : [7,8,9],
        4 : [10,11,12],
      }
    for key,value in months.items():
        if month in value: return key