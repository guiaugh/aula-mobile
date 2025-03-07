def operacoes_numeros(a, b):
    print(f"Soma: {a} + {b} = {a + b}")
    print(f"Subtração: {a} - {b} = {a - b}")
    print(f"Multiplicação: {a} * {b} = {a * b}")
    
    if b != 0:
        print(f"Divisão: {a} / {b} = {a / b}")
    else:
        print("Divisão por zero não é permitida.")
    
    print(f"{a} é maior que {b}? {a > b}")


num1, num2 = 15, 5 
operacoes_numeros(num1, num2)
