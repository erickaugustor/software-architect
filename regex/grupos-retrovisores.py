import re
import pprint import pprint

# ()  \1
# () ()  \1 \2
# (()) () \1 \2 \3 count the (

texto = '''
  <p>Frase 1</p> <p>Frase 2</p> <p>Frase 3</p> <div>Frase 4</div>
'''

print(re.findall(r'<([pdiv]{1,3})>.*?<\/\1>', texto))
print(re.findall(r'(<([pdiv]{1,3})>.*?<\/\2>)', texto))

tags = re.findall(r'(<([pdiv]{1,3})>(.*?)<\/\2>)', texto)
pprint(tags)

# ?: don't save the group
print(re.findall(r'(<([pdiv]{1,3})>(?:.*?)<\/\2>)', texto))


#cpf
cpf = '147.423.213-12'
print(re.findall(r'[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}', cpf))

print(re.findall(r'([0-9]{3}\){2}[0-9]{3}-[0-9]{2}', cpf))
print(re.findall(r'((?:[0-9]{3}\){2}[0-9]{3}-[0-9]{2})', cpf))

# python - nomed group
print(re.findall(r'(<(?P<tag>[pdiv]{1,3})>(?:.*?)<\/(?P=tag)>)', texto))

print(re.sub(r'(<(.+?)>)(.+?)(<\/\2>)', r'\1 \3 \4', texto))
