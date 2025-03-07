def manipular_string(s):
    print("String original:", s)
    print("Maiúsculas:", s.upper())
    print("Minúsculas:", s.lower())
    print("Invertida:", s[::-1])
    
    letra_antiga = input("Digite a letra que deseja substituir: ")
    letra_nova = input("Digite a nova letra: ")
    print("String modificada:", s.replace(letra_antiga, letra_nova))

    
texto = input("Digite uma string: ")
manipular_string(texto)