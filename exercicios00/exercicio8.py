def manipular_pessoa(pessoa):
    pessoa["profissao"] = "Engenheiro"  
    pessoa.pop("cidade", None)  
    propriedades = list(pessoa.keys())  
    
    return pessoa, propriedades


pessoa = {"nome": "Mario", "idade": 28, "cidade": "Brasilia"}  
novo_pessoa, propriedades = manipular_pessoa(pessoa)
    
print(f"Objeto atualizado: {novo_pessoa}")
print(f"Propriedades do objeto: {propriedades}")