# Calculadora Simples em Python 🧮

[![Python Version](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Imersão Dev](https://img.shields.io/badge/Alura-Imers%C3%A3o%20Dev-0070f3.svg)](https://www.alura.com.br/)
[![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen.svg)]()

> Projeto desenvolvido por **Vini Baboghlian** durante a **Imersão Dev com Google AI Studio & Alura**, consolidando conceitos fundamentais de programação em Python: funções, estruturas de controle de fluxo, validações e tratamento de erros.

---

## 📋 Sumário
- [Notas de Atualização (Changelog)](#-notas-de-atualização-changelog)
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

## 📌 Notas de Atualização (Changelog)

> [!NOTE]
> **Desafio do Dia 02 — Implementação da Operação de Porcentagem (%)**
> - **Nova Função:** Adicionada a função modular `def porcentagem(a, b): return (a * b) / 100` para cálculo direto de taxas percentuais.
> - **Expansão do Menu:** Inclusão da opção `5 -> Porcentagem (%)` no menu do terminal e ajuste no leitor `input()` para aceitar opções de `1` a `5`.
> - **Controle de Fluxo:** Adicionado o bloco `elif opcao == '5':` com formatação f-string dedicada (`{b}% de {a} = {resultado}`).
> - **Simulador Web Interativo:** Suporte ao cálculo e rastreamento de variáveis de porcentagem no simulador da aplicação web.

---

## 🎯 Sobre o Projeto

Este repositório contém uma **calculadora de terminal desenvolvida em Python**, capaz de executar com precisão as operações matemáticas fundamentais: **adição**, **subtração**, **multiplicação**, **divisão** e **porcentagem**.

O projeto foi construído com foco em **código limpo**, **modularidade** e **experiência do usuário (UX no terminal)**, servindo como projeto prático para conclusão da certificação na **Imersão Dev da Alura**.

### Destaques do Projeto:
- **Organização conforme a PEP 8:** Nomes descritivos de variáveis e funções, indentação consistente de 4 espaços.
- **Funções Puras e Modulares:** Cada cálculo aritmético possui sua própria função isolada (`def`), facilitando testes e manutenções.
- **Prevenção de Falhas Críticas:** Tratamento preventivo de divisão por zero antes que ocorra a quebra com `ZeroDivisionError`.

---

## ✨ Funcionalidades

- ➕ **Adição (`+`):** Soma de números inteiros e decimais (`float`).
- ➖ **Subtração (`-`):** Subtração entre dois valores com suporte a números negativos.
- ✖️ **Multiplicação (`*`):** Produto aritmético com precisão decimal.
- ➗ **Divisão (`/`):** Divisão com validação preventiva de denominador nulo (`b == 0`).
- 📊 **Porcentagem (`%`):** Cálculo de percentuais (`b% de a`) com fórmula direta.
- 💬 **Menu Interativo:** Interface via linha de comando limpa e intuitiva.
- 📄 **Saída Formatada:** Uso de *f-strings* modernas para exibição elegante dos resultados.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [Python 3.8+](https://www.python.org/)
- **Ferramentas de Versionamento:** Git e GitHub
- **Deploy:** GitHub Actions & GitHub Pages
- **Ambiente de Desenvolvimento:** Google AI Studio / VS Code / Terminal

---

## 📂 Estrutura do Repositório

```plaintext
imersao-dev-ia-studio-alura/
│
├── .github/workflows/       # Fluxo de CI/CD para deploy automático
├── calculadora.py           # Código principal da calculadora com as 5 operações
├── src/                     # Interface web interativa com simulador passo a passo
├── README.md                # Documentação oficial do projeto
└── LICENSE                  # Licença de código aberto MIT
```

---

## 🚀 Pré-requisitos e Instalação

Para clonar e testar o projeto no seu computador:

### 1. Clonar o repositório

**Via SSH (recomendado):**
```bash
git clone git@github.com:vinibaboghlian/imersao-dev-ia-studio-alura.git
cd imersao-dev-ia-studio-alura
```

**Via HTTPS:**
```bash
git clone https://github.com/vinibaboghlian/imersao-dev-ia-studio-alura.git
cd imersao-dev-ia-studio-alura
```

### 2. Verificar a versão do Python
Certifique-se de que o Python 3 está instalado no seu sistema operacional:
```bash
python --version
# ou em ambientes Unix/Linux/macOS:
python3 --version
```

---

## 💻 Como Executar

Execute o arquivo Python diretamente no seu terminal:

```bash
python calculadora.py
# ou
python3 calculadora.py
```

---

## 🖥️ Exemplo de Uso

### 1. Operação de Porcentagem
```text
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
```

### 2. Validação de Divisão por Zero
```text
Digite o número da operação (1/2/3/4/5): 4
Digite o primeiro número: 100
Digite o segundo número: 0

Erro: Não é possível dividir por zero!
```

---

## 🧠 Conceitos Teóricos Aplicados

Durante o desenvolvimento deste projeto, foram colocados em prática os seguintes pilares da programação em Python:

1. **Modularização com Funções (`def` / `return`):**
   Isolamento de responsabilidades em blocos lógicos reutilizáveis, garantindo que o programa principal permaneça enxuto e limpo.

2. **Entrada e Conversão de Tipos (`input` & `float`):**
   Compreensão de que o retorno padrão de `input()` é do tipo string (`str`), necessitando de conversão explícita para número de ponto flutuante (`float`) para efetuar operações aritméticas.

3. **Estruturas de Decisão (`if` / `elif` / `else`):**
   Direcionamento lógico do fluxo do programa com base na escolha do usuário no menu interativo.

4. **Tratamento de Regras de Negócio e Edge Cases:**
   Blindagem da aplicação contra operações matematicamente indefinidas (divisão por zero).

5. **Interpolação de Texto com F-Strings:**
   Sintaxe nativa e moderna (`f"{variavel}"`) para formatação de saídas claras e de fácil leitura.

---

## 📈 Possíveis Melhorias Futuras

- [x] Suporte a operação de porcentagem `%` (implementado no Desafio 02).
- [ ] Implementação de loop contínuo (`while True`) permitindo múltiplos cálculos consecutivos sem reiniciar o script.
- [ ] Tratamento de exceções com `try / except` para capturar entradas não numéricas (`ValueError`).
- [ ] Suporte a operações científicas (potenciação `**` e raiz quadrada).

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

## 👤 Autor

Desenvolvido por **Vini Baboghlian**  
- **GitHub:** [@vinibaboghlian](https://github.com/vinibaboghlian)  
- **Repositório:** [imersao-dev-ia-studio-alura](https://github.com/vinibaboghlian/imersao-dev-ia-studio-alura)  

---
*Projeto desenvolvido para a Imersão Dev com Google AI Studio da Alura.*
