import { ConceptItem, OperationInfo, QuizQuestion } from '../types';

export const BASIC_CALCULATOR_CODE = `# ==========================================
# CALCULADORA SIMPLES EM PYTHON
# Operações básicas: +, -, * e /
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

# 2. APRESENTAÇÃO DO MENU
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
opcao = input("Digite a opção (1/2/3/4): ")

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

else:
    print("\\nOpção inválida! Escolha um número de 1 a 4.")
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
    print("  0. Sair do programa")
    print("=" * 40)

    opcao = input("Escolha uma opção (0 a 4): ").strip()

    if opcao == '0':
        print("\\nObrigado por usar a calculadora! Até logo!")
        break

    if opcao not in ['1', '2', '3', '4']:
        print("\\nOpção inválida! Tente novamente.")
        continue

    # Leitura segura dos dois números
    n1 = obter_numero("Digite o primeiro número: ")
    n2 = obter_numero("Digite o segundo número: ")

    if opcao == '1':
        print(f"\\n>>> {n1} + {n2} = {somar(n1, n2)}")
    elif opcao == '2':
        print(f"\\n>>> {n1} - {n2} = {subtrair(n1, n2)}")
    elif opcao == '3':
        print(f"\\n>>> {n1} * {n2} = {multiplicar(n1, n2)}")
    elif opcao == '4':
        res = dividir(n1, n2)
        print(f"\\n>>> {res if isinstance(res, str) else f'{n1} / {n2} = {res}'}")

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

Este repositório contém uma **calculadora de terminal desenvolvida em Python**, capaz de executar com precisão as quatro operações matemáticas fundamentais: **adição**, **subtração**, **multiplicação** e **divisão**.

O projeto foi construído com foco em **código limpo**, **modularidade** e **experiência do usuário (UX no terminal)**, servindo como projeto prático para conclusão da certificação na **Imersão Dev da Alura**.

### Destaques do Projeto:
- **Organização conforme a PEP 8:** Nomes descritivos de variáveis e funções, indentação consistente de 4 espaços.
- **Funções Puras e Modulares:** Cada cálculo aritmético possui sua própria função isolada (\`def\`), facilitando testes e manutenções.
- **Prevenção de Falhas Críticas:** Tratamento preventivo de divisão por zero antes que ocorra a quebra com \`ZeroDivisionError\`.

---

## ✨ Funcionalidades

- ➕ **Adição:** Soma de números inteiros ou decimais (\`float\`).
- ➖ **Subtração:** Diferença entre dois valores numéricos.
- ✖️ **Multiplicação:** Produto aritmético entre dois números.
- ➗ **Divisão com Validação:** Divisão de números reais com verificação prévia para evitar o erro \`ZeroDivisionError\`.
- 💬 **Menu Interativo:** Interface via linha de comando amigável com instruções claras.
- 📄 **Saída Formatada:** Uso de *f-strings* modernas para apresentação clara dos resultados.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [Python 3.8+](https://www.python.org/)
- **Paradigma:** Programação Estruturada e Modular
- **Ferramentas de Desenvolvimento:** VS Code / Terminal / Git

---

## 📂 Estrutura do Repositório

\`\`\`plaintext
calculadora-python/
│
├── calculadora.py           # Código-fonte principal com as 4 operações
├── calculadora_avancada.py  # Versão com loop contínuo e tratamento try/except
├── README.md                # Documentação completa do projeto
└── LICENSE                  # Licença de uso aberta (MIT)
\`\`\`

---

## 🚀 Pré-requisitos e Instalação

Para clonar e testar o projeto no seu computador:

### 1. Clonar o repositório

**Via SSH (recomendado):**
\`\`\`bash
git clone git@github.com:vinibaboghlian/imersao-dev-ia-studio-alura.git
cd imersao-dev-ia-studio-alura
\`\`\`

**Via HTTPS:**
\`\`\`bash
git clone https://github.com/vinibaboghlian/imersao-dev-ia-studio-alura.git
cd imersao-dev-ia-studio-alura
\`\`\`

### 2. Verificar a instalação do Python
Abra o seu terminal (Prompt de Comando, PowerShell ou Bash) e verifique se o Python está configurado:
\`\`\`bash
python --version
# ou em alguns sistemas Unix:
python3 --version
\`\`\`

---

## 💻 Como Executar

Execute o script diretamente pelo terminal:

\`\`\`bash
# Versão padrão
python calculadora.py

# Caso utilize Linux/macOS e a versão padrão aponte para python2:
python3 calculadora.py
\`\`\`

---

## 🖥️ Exemplo de Uso

Ao iniciar a aplicação, o menu interativo é exibido:

\`\`\`text
===================================
     CALCULADORA EM PYTHON
===================================
Escolha a operação desejada:
  1 -> Adição (+)
  2 -> Subtração (-)
  3 -> Multiplicação (*)
  4 -> Divisão (/)
===================================
Digite a opção (1/2/3/4): 1
Digite o primeiro número: 15
Digite o segundo número: 7

Resultado: 15.0 + 7.0 = 22.0
\`\`\`

### Teste de Prevenção de Erro (Divisão por Zero):
\`\`\`text
Digite a opção (1/2/3/4): 4
Digite o primeiro número: 10
Digite o segundo número: 0

Erro: Não é possível dividir por zero!
\`\`\`

---

## 🧠 Conceitos Teóricos Aplicados

Durante o desenvolvimento deste projeto, foram praticados e documentados os seguintes pilares da ciência da computação:

1. **Modularização com Funções (\`def\` e \`return\`):**
   Criação de blocos reutilizáveis de código, garantindo baixo acoplamento e facilidade na realização de testes unitários futuros.

2. **Entrada e Tipagem Dinâmica (\`input\` e \`float\`):**
   Compreensão de que a função nativa \`input()\` retorna dados do tipo \`str\` (texto), exigindo a conversão explícita (type casting) com \`float()\` para permitir operações com casas decimais.

3. **Controle de Fluxo e Condicionais (\`if\`, \`elif\`, \`else\`):**
   Avaliação lógica de condições booleanas para direcionar o fluxo de execução para a função correspondente à escolha do usuário.

4. **Tratamento de Edge Cases (Casos de Borda):**
   Validação preventiva do denominador em divisões, assegurando que o programa não seja abortado abruptamente com uma exceção não tratada.

5. **Interpolação de Strings (\`f-strings\`):**
   Formatação limpa e legível de saídas no terminal, recurso nativo introduzido a partir do Python 3.6.

---

## 📈 Possíveis Melhorias Futuras

- [ ] Implementar operações adicionais (potenciação \`**\`, raiz quadrada e módulo \`%\`).
- [ ] Construir uma interface gráfica com bibliotecas como \`Tkinter\` ou \`PyQt\`.
- [ ] Adicionar histórico de cálculos em arquivo \`.txt\` ou \`.csv\`.
- [ ] Implementar testes automatizados com \`pytest\` ou \`unittest\`.

---

## 📜 Licença

Distribuído sob a licença **MIT**. Veja o arquivo \`LICENSE\` para mais informações.

---

## 👤 Autor

Desenvolvido por **Vini Baboghlian**  
- **GitHub:** [@vinibaboghlian](https://github.com/vinibaboghlian)  
- **Repositório:** [imersao-dev-ia-studio-alura](https://github.com/vinibaboghlian/imersao-dev-ia-studio-alura)  

---
*Projeto desenvolvido para a Imersão Dev com Google AI Studio da Alura.*
`;

