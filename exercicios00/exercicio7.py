def manipular_strings(arr):
    maiusculas = [s.upper() for s in arr]  
    filtradas = [s for s in maiusculas if s.startswith('A')]  
    comprimentos = [len(s) for s in arr]  
    
    return maiusculas, filtradas, comprimentos


strings = ["Maçã", "Banana", "Abacaxi", "Laranja"]  
maiusculas, filtradas, comprimentos = manipular_strings(strings)
    
print(f"Strings em maiúsculas: {maiusculas}")
print(f"Strings que começam com 'A': {filtradas}")
print(f"Comprimento de cada string: {comprimentos}")
