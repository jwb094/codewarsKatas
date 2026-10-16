#Given a number n, return the number of positive odd numbers below n, EASY!
#Examples
#7  -> 3 (because odd numbers below 7 are [1, 3, 5])
# 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

def odd_count(limit):
  return len([number for number in list(range(1,limit)) if number % 2 != 0])


# def odd_count(limit):
#     odd_number_count = 0
#       for number in range(limit):
#         if number % 2 != 0:
#             odd_number_count += 1
#     return odd_number_count