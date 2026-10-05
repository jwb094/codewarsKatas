def well(good_and_bad_list):
    result = list(filter(count_no_of_good_in_the_list,good_and_bad_list))
    if len(result) == 0:
      return "Fail!"
    if len(result) == 1 or len(result) == 2:
      return "Publish!"
    if len(result) > 2:
      return "I smell a series!"

def count_no_of_good_in_the_list(mark):
  return mark == "good"


#option 2
def well(good_and_bad_list):
    result = good_and_bad_list.count("good")
    if result == 0:
      return "Fail!"
    if result == 1 or result== 2: 
      return "Publish!"
    if result > 2: 
      return "I smell a series!"
   
