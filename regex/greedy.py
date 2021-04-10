# greedy / lazy

import re

texto = '''
  <p>Frase 1</p> <p>Frase 2</p> <p>Frase 3</p> <div>Frase 4</div>
'''

# Amibguous expression, could get anyone
# greedy
print(re.findall(r'<[pdiv]{1,3}>.*<\/[pdiv]{1,3}>', texto))

# using ? will behavior like lazy
# non greedy
print(re.findall(r'<[pdiv]{1,3}>.*?<\/[pdiv]{1,3}>', texto))
