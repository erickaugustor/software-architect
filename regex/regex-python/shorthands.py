import re

texto = '''
  João trouxe    flores para sua amada.
  Maria era o nome dela!

  Foi um ano excelete.
  Ela gritou:
  "Jooooooooooooãooooooooooo, o café está pronto, veeeem!"
'''

print(re.findall(r'[a-z]', texto))
print(re.findall(r'[a-z]+', texto))
print(re.findall(r'[a-z]+', texto, flags=re.I))

# same
# \w === [a-zA-Z0-9À-ú_]
# flag re.A sem acentuação - igual em outras linguagens
print(re.findall(r'[a-zA-Z0-9À-ú]+', texto))
print(re.findall(r'\w+', texto))
print(re.findall(r'\w+', texto, flags=re.A))

# \d [0-9]
# \D [^0-9]

# \s [ \r\n\f\t]
# \S [^ \r\n\f\t]

# \b borda
print(re.findall(r'\bflo\w+', texto, flags=re.I))
print(re.findall(r'\w+e\b', texto, flags=re.I))
print(re.findall(r'\b\w{4}\b', texto, flags=re.I))

print(re.findall(r'flo\B', texto, flags=re.I))
