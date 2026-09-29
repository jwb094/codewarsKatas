# Your task is to write a function that takes two parameters: 
# the year of birth and the year to count years in relation to. 
# As Philip is getting more curious every day he may soon want to know how many years 
# it was until he would be born, so your function needs to work with both dates in the future and in the past.
# Provide output in this format: 
# For dates in the future: "You are ... year(s) old." 
# For dates in the past: "You will be born in ... year(s)." 
# If the year of birth equals the year requested 
# return: "You were born this very year!"
# "..." are to be replaced by the number, 
# followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
# 
def calculate_age(year_of_birth, current_year):
    answerStatement = ""
    if current_year > year_of_birth:
        years = current_year - year_of_birth
        answerStatement = "You are " + str(years) +" years old." if years > 1 else  "You are " + str(years) +" year old.";
    if current_year < year_of_birth:
        years = year_of_birth -current_year 
        answerStatement = "You will be born in " + str(years) +" years." if years > 1 else  "You will be born in " + str(years) +" year.";
    if current_year == year_of_birth: 
        answerStatement = "You were born this very year!";
    return answerStatement
  