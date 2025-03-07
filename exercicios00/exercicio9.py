livro = {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R. Tolkien",
    "ano": 1954
}

titulo, autor = livro["titulo"], livro["autor"]

def obter_info_livro(livro):
    return f'Título: {livro["titulo"]}, Autor: {livro["autor"]}'

# Testando
print(f'Título: {titulo}, Autor: {autor}')
print(obter_info_livro(livro))
