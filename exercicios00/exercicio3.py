def verificar_idade(idade):
    if idade < 18:
        print("Menor de idade.")
    elif idade >= 65:
        print("Idoso.")
    else:
        print("Maior de idade.")

idade = 70
print(f"Idade informada: {idade}")
verificar_idade(idade)