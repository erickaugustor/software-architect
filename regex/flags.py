import re

texto = '''
  212.121.343-54
  543.343.341-53
'''

# flags
# A tabela ASC
# I ignore case
# M multiline - ^ $
# S dotall

print(re.findall(r'^\d{3}\.\d{3}$', texto, flags=re.M))

texto2 = 'O joão gosta de folia \n e também'

# . não reconhece quebra de linha
print(re.findall(r'^o.*o$', texto, flags=re.I))
print(re.findall(r'^o.*o$', texto, flags=re.I | re.S))
