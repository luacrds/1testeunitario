from calculadora import somar, subtrair, multiplicar, dividir


resultado_soma = somar(3, 5)
if resultado_soma == 8:
    print("O teste funcionou")
else:
    print("O teste falhou. Resultado:", resultado_soma)

 


resultado_subtracao = subtrair(10, 3)
if resultado_subtracao == 7:
    print("O teste funcionou")
else:
    print("O teste falhou. Resultado:", resultado_subtracao)

 


resultado_multiplicacao = multiplicar(4, 6)
if resultado_multiplicacao == 24:
    print("O teste funcionou")
else:
    print("O teste falhou. Resultado:", resultado_multiplicacao)

 

# Teste de divisão
resultado_divisao = dividir(8, 2)
if resultado_divisao == 4:
    print("O teste funcionou")
else:
    print("O teste falhou. Resultado:", resultado_divisao)