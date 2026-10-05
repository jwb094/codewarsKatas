#option 1

def say_hello(name, city, state):
      return "Hello, "+" ".join(name) + "! Welcome to " + city + ", " + state +"!"
  
  
  
#option2
def say_hello(name, city, state):
    return f"Hello {" ".join(name)}! Welcome to {city}, {state}!"