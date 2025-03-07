def calcular_valores(n):
    dobro = n * 2
    triplo = n * 3
    quadrado = n ** 2
    return dobro, triplo, quadrado

numero = 5 
dobro, triplo, quadrado = calcular_valores(numero)
print(f"Número informado: {numero}")
print(f"Dobro: {dobro}")
print(f"Triplo: {triplo}")
print(f"Quadrado: {quadrado}")