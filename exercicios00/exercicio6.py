def manipular_array(arr, novo_numero):
    arr.append(novo_numero)  
    primeiro_removido = arr.pop(0)  
    maior_numero = max(arr) 
    menor_numero = min(arr) 
    
    return arr, primeiro_removido, maior_numero, menor_numero


numeros = [10, 20, 30, 40, 50] 
novo_numero = 60 
    
novo_array, removido, maior, menor = manipular_array(numeros, novo_numero)
    
print(f"Array após adição e remoção: {novo_array}")
print(f"Número removido: {removido}")
print(f"Maior número: {maior}")
print(f"Menor número: {menor}")
