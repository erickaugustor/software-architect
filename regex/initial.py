import re

# findall search sub
# compile

string = 'Esse é um teste de expressões regulares.'
print(re.search(r'teste', string))     # first occurence
print(re.findall(r'teste', string))    # all occurrences
print(re.sub(r'teste', 'abc' string, count = 0))  # replace, count 0 === repalce all

regexp = re.compile(r'teste')
regexp.search(string)