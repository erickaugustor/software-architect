import re

texto = '''
  João trouxe    flores para sua amada.
  Maria era o nome dela!

  Foi um ano excelete.
  Ela gritou:
  "Jooooooooooooãooooooooooo, o café está pronto, veeeem!"
'''

print(re.findall(r'João|Maria', texto))
print(re.findall(r'J.ão', texto))
print(re.findall(r'[jJ]oão|[Mm]aria'))          # similar to the |
print(re.findall(r'[a-zA-Z]aria', texto))

print(re.findall(r'JoãO', flags=re.I))
print(re.findall(r'JoãO', flags=re.IGNORECASE))