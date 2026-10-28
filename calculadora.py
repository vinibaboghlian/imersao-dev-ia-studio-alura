# ==========================================
# CALCULADORA SIMPLES EM PYTHON
# Imersão Dev com Google AI Studio & Alura
# Autor: Vini Baboghlian
# Repositório: vinibaboghlian/imersao-dev-ia-studio-alura
# As 4 operações básicas: +, -, * e /
# ==========================================

# 1. DEFINIÇÃO DAS FUNÇÕES
# Cada função recebe dois números (a e b) e devolve o resultado da conta.

def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    # Regra matemática: não existe divisão por zero!
    if b == 0:
        return "Erro: Não é possível dividir por zero!"
    return a / b


# 2. MENU DE OPÇÕES
print("=" * 35)
print("     CALCULADORA EM PYTHON")
print("=" * 35)
print("Escolha a operação desejada:")
print("  1 -> Adição (+)")
print("  2 -> Subtração (-)")
print("  3 -> Multiplicação (*)")
print("  4 -> Divisão (/)")
print("=" * 35)

# 3. ENTRADA DE DADOS DO USUÁRIO
opcao = input("Digite o número da operação (1/2/3/4): ")

# O input() sempre lê texto (string), por isso usamos float() para converter em número
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))


# 4. ESTRUTURA CONDICIONAL (IF / ELIF / ELSE)
# O programa decide qual operação executar de acordo com a opção escolhida.
if opcao == '1':
    resultado = somar(num1, num2)
    print(f"\nResultado: {num1} + {num2} = {resultado}")

elif opcao == '2':
    resultado = subtrair(num1, num2)
    print(f"\nResultado: {num1} - {num2} = {resultado}")

elif opcao == '3':
    resultado = multiplicar(num1, num2)
    print(f"\nResultado: {num1} * {num2} = {resultado}")

elif opcao == '4':
    resultado = dividir(num1, num2)
    if isinstance(resultado, str):
        print(f"\n{resultado}")
    else:
        print(f"\nResultado: {num1} / {num2} = {resultado}")

else:
    print("\nOpção inválida! Escolha um valor entre 1 e 4.")
