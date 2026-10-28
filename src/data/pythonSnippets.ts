import { ConceptItem, OperationInfo, QuizQuestion } from '../types';

export const BASIC_CALCULATOR_CODE = `# ==========================================
# CALCULADORA SIMPLES EM PYTHON
# Operações: +, -, *, / e % (Porcentagem)
# ==========================================

# 1. DEFINIÇÃO DAS FUNÇÕES
# Cada função recebe dois parâmetros (a, b) e retorna o resultado da conta

def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    # Regra matemática: Não existe divisão por zero!
    if b == 0:
        return "Erro: Não é possível dividir por zero!"
    return a / b

def porcentagem(a, b):
    # Calcula b% de a: exemplo: a = 200, b = 15 -> 15% de 200 = 30.0
    return (a * b) / 100

# 2. APRESENTAÇÃO DO MENU
print("=" * 35)
print("     CALCULADORA EM PYTHON")
print("=" * 35)
print("Escolha a operação desejada:")
print("  1 -> Adição (+)")
print("  2 -> Subtração (-)")
print("  3 -> Multiplicação (*)")
print("  4 -> Divisão (/)")
print("  5 -> Porcentagem (%)")
print("=" * 35)

# 3. ENTRADA DE DADOS DO USUÁRIO
opcao = input("Digite a opção (1/2/3/4/5): ")

# O input() sempre lê texto, por isso usamos float() para converter em número decimal
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

# 4. ESTRUTURA CONDICIONAL (IF / ELIF / ELSE)
# O programa decide qual função chamar com base na opção escolhida
if opcao == '1':
    resultado = somar(num1, num2)
    print(f"\\nResultado: {num1} + {num2} = {resultado}")

elif opcao == '2':
    resultado = subtrair(num1, num2)
    print(f"\\nResultado: {num1} - {num2} = {resultado}")

elif opcao == '3':
    resultado = multiplicar(num1, num2)
    print(f"\\nResultado: {num1} * {num2} = {resultado}")

elif opcao == '4':
    resultado = dividir(num1, num2)
    if isinstance(resultado, str):
        print(f"\\n{resultado}")
    else:
        print(f"\\nResultado: {num1} / {num2} = {resultado}")

elif opcao == '5':
    resultado = porcentagem(num1, num2)
    print(f"\\nResultado: {num2}% de {num1} = {resultado}")

else:
    print("\\nOpção inválida! Escolha um número de 1 a 5.")
`;

export const ADVANCED_CALCULATOR_CODE = `# ==========================================
# CALCULADORA EM PYTHON (COM LOOP E VALIDAÇÃO)
# Permite realizar múltiplos cálculos e evita travamentos
# ==========================================

def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Erro: Impossível dividir por zero!"
    return a / b

def porcentagem(a, b):
    return (a * b) / 100

def obter_numero(mensagem):
    """Lê um número e garante que o usuário não digite letras"""
    while True:
        try:
            return float(input(mensagem))
        except ValueError:
            print("Entrada inválida! Digite apenas números reais.")

# Loop principal: o programa continuará rodando até o usuário desejar sair
while True:
    print("\\n" + "=" * 40)
    print("      CALCULADORA INTERATIVA")
    print("=" * 40)
    print("  1. Somar (+)")
    print("  2. Subtrair (-)")
    print("  3. Multiplicar (*)")
    print("  4. Dividir (/)")
    print("  5. Porcentagem (%)")
    print("  0. Sair do programa")
    print("=" * 40)

    opcao = input("Escolha uma opção (0 a 5): ").strip()

    if opcao == '0':
        print("\\nObrigado por usar a calculadora! Até logo!")
        break

    if opcao not in ['1', '2', '3', '4', '5']:
        print("\\nOpção inválida! Tente novamente.")
        continue

    # Leitura segura dos dois números
    n1 = obter_numero("Digite o primeiro número (base): ")
    n2 = obter_numero("Digite o segundo número (% ou valor): ")

    if opcao == '1':
        print(f"\\n>>> {n1} + {n2} = {somar(n1, n2)}")
    elif opcao == '2':
        print(f"\\n>>> {n1} - {n2} = {subtrair(n1, n2)}")
    elif opcao == '3':
        print(f"\\n>>> {n1} * {n2} = {multiplicar(n1, n2)}")
    elif opcao == '4':
        res = dividir(n1, n2)
        print(f"\\n>>> {res if isinstance(res, str) else f'{n1} / {n2} = {res}'}")
    elif opcao == '5':
        print(f"\\n>>> {n2}% de {n1} = {porcentagem(n1, n2)}")

    # Pergunta se o usuário quer fazer outro cálculo
    continuar = input("\\nDeseja fazer outro cálculo? (s/n): ").lower()
    if continuar != 's':
        print("\\nFinalizando o programa. Bons estudos em Python!")
        break
`;

export const OPERATIONS: OperationInfo[] = [
  {
    symbol: '+',
    name: 'Adição',
    funcName: 'somar(a, b)',
    pythonSyntax: 'a + b',
    example: '15 + 7 = 22',
    description: 'Soma dois valores numéricos inteiros ou com casas decimais (float).'
  },
  {
    symbol: '-',
    name: 'Subtração',
    funcName: 'subtrair(a, b)',
    pythonSyntax: 'a - b',
    example: '20 - 8 = 12',
    description: 'Calcula a diferença entre o primeiro e o segundo operando.'
  },
  {
    symbol: '*',
    name: 'Multiplicação',
    funcName: 'multiplicar(a, b)',
    pythonSyntax: 'a * b',
    example: '6 * 4 = 24',
    description: 'Multiplica os dois números usando o asterisco (*) como operador.'
  },
  {
    symbol: '/',
    name: 'Divisão',
    funcName: 'dividir(a, b)',
    pythonSyntax: 'a / b',
    example: '25 / 4 = 6.25',
    description: 'Divide o primeiro valor pelo segundo. Em Python, a barra (/) sempre retorna float.'
  },
  {
    symbol: '%',
    name: 'Porcentagem',
    funcName: 'porcentagem(a, b)',
    pythonSyntax: '(a * b) / 100',
    example: '15% de 200 = 30.0',
    description: 'Calcula b% de a multiplicando o valor base pela taxa percentual e dividindo por 100.'
  }
];

export const CONCEPTS: ConceptItem[] = [
  {
    id: 'funcoes',
    title: 'Funções (def)',
    badge: 'Organização e Reúso',
    syntax: 'def nome_da_funcao(param1, param2):',
    explanation: 'Funções são blocos de código com um propósito específico que só rodam quando chamados. Elas tornam seu código modular, fácil de testar e muito mais legível.',
    whyItMatters: 'Em vez de repetir cálculos matemáticos em vários lugares do programa, você define uma função uma vez e pode usá-la dezenas de vezes.',
    exampleSnippet: `def somar(a, b):\n    return a + b\n\nresultado = somar(10, 5)  # resultado será 15`,
    beginnerTip: 'Não se esqueça do comando return! Ele é o responsável por "devolver" o resultado do cálculo para quem chamou a função.'
  },
  {
    id: 'input-float',
    title: 'Entrada de Dados (input & float)',
    badge: 'Captura & Conversão',
    syntax: 'num = float(input("Digite um número: "))',
    explanation: 'A função input() aguarda o usuário digitar algo no teclado e sempre entrega o dado no formato texto (string). Para fazer contas, precisamos converter para número com float() ou int().',
    whyItMatters: 'Se você fizer "10" + "5" sem converter, o Python junta os textos e o resultado será "105" (concatenação) em vez de 15!',
    exampleSnippet: `texto = input("Digite: ")      # Tipo str: "12.5"\nnumero = float(texto)          # Tipo float: 12.5`,
    beginnerTip: 'Use float() em calculadoras porque ele aceita números com vírgula/ponto decimal (ex: 3.14, 7.5, -2.0).'
  },
  {
    id: 'condicionais',
    title: 'Decisões (if, elif, else)',
    badge: 'Fluxo Lógico',
    syntax: 'if condicao_1:\n    # ação\nelif condicao_2:\n    # ação\nelse:\n    # caso contrário',
    explanation: 'Permite que o programa tome caminhos diferentes dependendo da escolha feita pelo usuário no teclado.',
    whyItMatters: 'O computador precisa saber se você quer somar, subtrair, multiplicar ou dividir. O if testa a primeira condição, os elif testam as seguintes e o else cuida de entradas inválidas.',
    exampleSnippet: `if operacao == "1":\n    print("Você escolheu soma")\nelif operacao == "2":\n    print("Você escolheu subtração")\nelse:\n    print("Opção inválida!")`,
    beginnerTip: 'Atenção aos dois-pontos (:) no final de cada cláusula e à indentação (espaçamento de 4 espaços) dentro de cada bloco!'
  },
  {
    id: 'divisao-zero',
    title: 'Prevenção de Divisão por Zero',
    badge: 'Segurança & Validação',
    syntax: 'if b == 0:\n    return "Erro: divisão por zero!"',
    explanation: 'Na matemática, dividir qualquer número por zero é uma indefinição. No Python, se você tentar rodar 10 / 0, o programa para imediatamente com o erro ZeroDivisionError.',
    whyItMatters: 'Programas de qualidade nunca deixam o sistema quebrar na mão do usuário. Verificar se o segundo número é zero antes de dividir garante estabilidade.',
    exampleSnippet: `def dividir(a, b):\n    if b == 0:\n        return "Erro: não divida por zero"\n    return a / b`,
    beginnerTip: 'Sempre pense em "casos extremos" (edge cases) ao programar: o que acontece se o usuário digitar zero, número negativo ou letras?'
  },
  {
    id: 'f-strings',
    title: 'Impressão Elegante (f-strings)',
    badge: 'Formatação de Saída',
    syntax: 'print(f"O resultado de {num1} + {num2} é {resultado}")',
    explanation: 'As f-strings (format strings), introduzidas no Python 3.6, são a forma mais moderna e limpa de misturar texto com variáveis.',
    whyItMatters: 'Basta colocar a letra f antes das aspas e envolver qualquer variável ou expressão entre chaves {}. Não precisa de vírgulas infinitas nem conversores manuais str().',
    exampleSnippet: `nome = "Ana"\nidade = 20\nprint(f"Olá, {nome}! Você tem {idade} anos.")`,
    beginnerTip: 'Você pode até fazer cálculos dentro das chaves, como f"O dobro de 5 é {5 * 2}".'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Por que usamos float(input(...)) em vez de apenas input(...) ao pedir um número para a calculadora?',
    options: [
      'Porque o Python obriga todos os códigos a terem float().',
      'Porque input() sempre lê dados como texto (string), impedindo cálculos matemáticos diretos.',
      'Porque float() faz o programa executar mais rápido.',
      'Porque input() só aceita números inteiros.'
    ],
    correctIndex: 1,
    explanation: 'Exato! A função input() sempre retorna uma string (texto). Sem a conversão float(), "5" + "3" resultaria em "53" por concatenação de texto!'
  },
  {
    id: 2,
    question: 'Qual é o papel fundamental do comando "return" dentro de uma função em Python?',
    options: [
      'Ele apaga as variáveis da memória para economizar espaço.',
      'Ele imprime obrigatoriamente o resultado na tela do terminal.',
      'Ele encerra a função e devolve o valor calculado para quem a chamou.',
      'Ele faz a função reiniciar do início.'
    ],
    correctIndex: 2,
    explanation: 'Perfeito! O return devolve o valor de volta para o código principal, permitindo que você guarde o resultado em uma variável ou use em outros cálculos.'
  },
  {
    id: 3,
    question: 'O que aconteceria no Python se tentássemos calcular "20 / 0" sem nenhuma validação prévia?',
    options: [
      'O Python retornaria o número zero como resposta.',
      'O Python geraria uma exceção ZeroDivisionError e interromperia o programa com erro.',
      'O Python converteria o número automaticamente para infinito (inf).',
      'O programa entraria em um loop infinito sem fim.'
    ],
    correctIndex: 1,
    explanation: 'Correto! Em Python, tentar dividir qualquer número por 0 levanta um erro fatal (ZeroDivisionError). Por isso é essencial checar `if b == 0:` antes da operação!'
  },
  {
    id: 4,
    question: 'Qual é a forma recomendada e moderna no Python para imprimir o texto: "Resultado: 5 + 3 = 8"?',
    options: [
      'print(f"Resultado: {a} + {b} = {resultado}")',
      'print("Resultado: " + a + " + " + b + " = " + resultado)',
      'print("Resultado: %a + %b = %resultado")',
      'print(a, b, resultado, "Resultado")'
    ],
    correctIndex: 0,
    explanation: 'Excelente! As f-strings (prefixo f"...") são o padrão moderno do Python: extremamente limpas, fáceis de ler e suportam variáveis direto entre chaves {}.'
  }
];

export const README_MARKDOWN = `# Calculadora Simples em Python 🧮

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Imersão Dev](https://img.shields.io/badge/Alura-Imers%C3%A3o%20Dev-0070f3.svg)](https://www.alura.com.br/)
[![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen.svg)]()

> Projeto desenvolvido por **Vini Baboghlian** durante a **Imersão Dev com Google AI Studio & Alura**, consolidando conceitos fundamentais de programação em Python: funções, estruturas de controle de fluxo, validações e tratamento de erros.

---

## 📋 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Pré-requisitos e Instalação](#-pré-requisitos-e-instalação)
- [Como Executar](#-como-executar)
- [Exemplo de Uso](#-exemplo-de-uso)
- [Conceitos Teóricos Aplicados](#-conceitos-teóricos-aplicados)
- [Possíveis Melhorias Futuras](#-possíveis-melhorias-futuras)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

Este repositório contém uma **calculadora de terminal desenvolvida em Python**, capaz de executar com precisão as operações matemáticas fundamentais: **adição**, **subtração**, **multiplicação**, **divisão** e **porcentagem**.

O projeto foi construído com foco em **código limpo**, **modularidade** e **experiência do usuário (UX no terminal)**, servindo como projeto prático para conclusão da certificação na **Imersão Dev da Alura**.

---

## ✨ Funcionalidades

- ➕ **Adição:** Soma de números inteiros ou decimais (\`float\`).
- ➖ **Subtração:** Diferença entre dois valores numéricos.
- ✖️ **Multiplicação:** Produto aritmético entre dois números.
- ➗ **Divisão com Validação:** Divisão de números reais com verificação prévia para evitar o erro \`ZeroDivisionError\`.
- 📊 **Porcentagem:** Cálculo de percentual (\`b% de a\`) com fórmula matemática direta.
- 💬 **Menu Interativo:** Interface via linha de comando amigável com instruções claras.
- 📄 **Saída Formatada:** Uso de *f-strings* modernas para apresentação clara dos resultados.

---

## 💻 Como Executar

Execute o script diretamente pelo terminal:

\`\`\`bash
python calculadora.py
\`\`\`

---

## 🖥️ Exemplo de Uso

\`\`\`text
===================================
     CALCULADORA EM PYTHON
===================================
Escolha a operação desejada:
  1 -> Adição (+)
  2 -> Subtração (-)
  3 -> Multiplicação (*)
  4 -> Divisão (/)
  5 -> Porcentagem (%)
===================================
Digite o número da operação (1/2/3/4/5): 5
Digite o primeiro número: 200
Digite o segundo número: 15

Resultado: 15.0% de 200.0 = 30.0
\`\`\`
`;
