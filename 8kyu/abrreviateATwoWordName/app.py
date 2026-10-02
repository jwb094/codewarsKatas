#Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

#Sam Harris => S.H

def abbrev_name(name):
    full_name = name.split()
    name_abbreved = []
    for letter in full_name:
        name_abbreved.append(letter[:1].upper())
    name_abbreved.insert(1,".")
    return "".join(name_abbreved)