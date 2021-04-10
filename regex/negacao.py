import re

# ^ start with
# $ ends with

cpf = '123.122.233-21'

print(re.findall(r'^([0-9]{3})$'))

# not
# get something different from the group a-z
print(re.findall(r'[^a-z]'))
