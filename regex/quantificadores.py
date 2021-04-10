import re

texto = '''
  João trouxe    flores para sua amada.
  Maria era o nome dela!

  Foi um ano excelete.
  Ela gritou:
  "Jooooooooooooãooooooooooo, o café está pronto, veeeem!"
'''

print(re.findall(r'JO+ão', texto, flags=re.I))
print(re.findall(r'JO+ão+', texto, flags=re.I))
print(re.findall(r'jo?ão*', texto))

print(re.findall(r'jo{,1}ão{1,}', texto))
print(re.findall(r'Ve{3}m{1,2}', texto))

print(re.findall(r'ama[do]', 'ama amado', flags=re.I)
print(re.findall(r'ama[do]{2}', 'ama amado', flags=re.I)
print(re.findall(r'ama[do]{,2}', 'ama amado', flags=re.I)
print(re.findall(r'ama[do]*', 'ama amado', flags=re.I)

# * === {0,n}