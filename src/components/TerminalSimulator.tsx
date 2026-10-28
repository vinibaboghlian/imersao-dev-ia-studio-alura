import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ChevronRight, AlertTriangle, CheckCircle2, Cpu, HelpCircle } from 'lucide-react';
import { OperationType, ExecutionStep } from '../types';
import { OPERATIONS } from '../data/pythonSnippets';

export const TerminalSimulator: React.FC = () => {
  const [selectedOp, setSelectedOp] = useState<OperationType>('+');
  const [num1Input, setNum1Input] = useState<string>('12');
  const [num2Input, setNum2Input] = useState<string>('4');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasExecuted, setHasExecuted] = useState<boolean>(false);
  const [steps, setSteps] = useState<ExecutionStep[]>([]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Generate execution steps based on inputs and operation
  const generateSteps = (op: OperationType, n1Str: string, n2Str: string): ExecutionStep[] => {
    const n1 = parseFloat(n1Str) || 0;
    const n2 = parseFloat(n2Str) || 0;
    const isZeroDivision = op === '/' && n2 === 0;

    let opNumber = '1';
    let funcName = 'somar';
    let mathResult: number | string = n1 + n2;

    if (op === '-') {
      opNumber = '2';
      funcName = 'subtrair';
      mathResult = n1 - n2;
    } else if (op === '*') {
      opNumber = '3';
      funcName = 'multiplicar';
      mathResult = n1 * n2;
    } else if (op === '/') {
      opNumber = '4';
      funcName = 'dividir';
      mathResult = isZeroDivision ? 'Erro: Não é possível dividir por zero!' : n1 / n2;
    } else if (op === '%') {
      opNumber = '5';
      funcName = 'porcentagem';
      mathResult = (n1 * n2) / 100;
    }

    const stepList: ExecutionStep[] = [
      {
        stepNumber: 1,
        lineExecuted: `opcao = input("Digite a opção (1/2/3/4/5): ")`,
        explanation: `O terminal solicita a opção. O usuário escolhe "${opNumber}" (operação de ${OPERATIONS.find(o => o.symbol === op)?.name}). O valor é armazenado como texto (string).`,
        variables: [
          { name: 'opcao', type: 'str', value: `"${opNumber}"`, description: `Opção escolhida para ${op}` }
        ],
        terminalOutput: `$ python calculadora.py\n===================================\n     CALCULADORA EM PYTHON\n===================================\nEscolha a operação desejada:\n  1 -> Adição (+)\n  2 -> Subtração (-)\n  3 -> Multiplicação (*)\n  4 -> Divisão (/)\n  5 -> Porcentagem (%)\n===================================\nDigite a opção (1/2/3/4/5): ${opNumber}`
      },
      {
        stepNumber: 2,
        lineExecuted: `num1 = float(input("Digite o primeiro número: "))`,
        explanation: `O usuário digitou "${n1Str}". A função float() converte a string "${n1Str}" no número decimal ${n1.toFixed(1)}, guardado na variável num1.`,
        variables: [
          { name: 'opcao', type: 'str', value: `"${opNumber}"`, description: 'Opção da operação' },
          { name: 'num1', type: 'float', value: `${n1}`, description: 'Primeiro operando numérico' }
        ],
        terminalOutput: `Digite o primeiro número: ${n1Str}`
      },
      {
        stepNumber: 3,
        lineExecuted: `num2 = float(input("Digite o segundo número: "))`,
        explanation: `O usuário digitou "${n2Str}". A função float() converte no número decimal ${n2.toFixed(1)}, armazenado na variável num2.`,
        variables: [
          { name: 'opcao', type: 'str', value: `"${opNumber}"`, description: 'Opção da operação' },
          { name: 'num1', type: 'float', value: `${n1}`, description: 'Primeiro número' },
          { name: 'num2', type: 'float', value: `${n2}`, description: 'Segundo número' }
        ],
        terminalOutput: `Digite o segundo número: ${n2Str}`
      },
      {
        stepNumber: 4,
        lineExecuted: `elif opcao == '${opNumber}':  # Verifica a condição e chama ${funcName}(num1, num2)`,
        explanation: `A estrutura de decisão if/elif avalia 'opcao == "${opNumber}"' como Verdadeiro (True). O programa então salta para dentro da função def ${funcName}(a, b).`,
        variables: [
          { name: 'opcao', type: 'str', value: `"${opNumber}"`, description: 'Condição satisfeita' },
          { name: 'num1', type: 'float', value: `${n1}`, description: 'Argumento passado como parâmetro a' },
          { name: 'num2', type: 'float', value: `${n2}`, description: 'Argumento passado como parâmetro b' }
        ],
        terminalOutput: `[Avaliando] opcao == '${opNumber}' -> Verdadeiro! Chamando função ${funcName}(${n1}, ${n2})...`
      }
    ];

    if (isZeroDivision) {
      stepList.push({
        stepNumber: 5,
        lineExecuted: `def dividir(a, b):\n    if b == 0:\n        return "Erro: Não é possível dividir por zero!"`,
        explanation: `Dentro de dividir(), o teste "b == 0" deu True! O programa evita o erro fatal ZeroDivisionError e retorna com segurança uma mensagem textual explicativa.`,
        variables: [
          { name: 'a', type: 'float', value: `${n1}`, description: 'Numerador' },
          { name: 'b', type: 'float', value: `${n2}`, description: 'Denominador é zero!' },
          { name: 'resultado', type: 'str', value: `"Erro: Não é possível dividir por zero!"`, description: 'Mensagem de proteção' }
        ],
        terminalOutput: `\nErro: Não é possível dividir por zero!`
      });
    } else if (op === '%') {
      stepList.push({
        stepNumber: 5,
        lineExecuted: `def porcentagem(a, b):\n    return (a * b) / 100`,
        explanation: `A função calcula a porcentagem ((${n1} * ${n2}) / 100 = ${mathResult}) e o comando return devolve o valor calculado para ser guardado em 'resultado'.`,
        variables: [
          { name: 'a', type: 'float', value: `${n1}`, description: 'Valor base' },
          { name: 'b', type: 'float', value: `${n2}`, description: 'Taxa percentual (%)' },
          { name: 'resultado', type: 'float', value: `${mathResult}`, description: 'Valor retornado pela função' }
        ],
        terminalOutput: `[Cálculo interno] ${n2}% de ${n1} = ${mathResult}`
      });

      stepList.push({
        stepNumber: 6,
        lineExecuted: `print(f"\\nResultado: {num2}% de {num1} = {resultado}")`,
        explanation: `A f-string formata e exibe na tela o resultado da porcentagem calculada. Fim da execução com sucesso!`,
        variables: [
          { name: 'num1', type: 'float', value: `${n1}`, description: 'Valor base' },
          { name: 'num2', type: 'float', value: `${n2}`, description: 'Porcentagem' },
          { name: 'resultado', type: 'float', value: `${mathResult}`, description: 'Resultado final' }
        ],
        terminalOutput: `\nResultado: ${n2}% de ${n1} = ${mathResult}`
      });
    } else {
      stepList.push({
        stepNumber: 5,
        lineExecuted: `def ${funcName}(a, b):\n    return a ${op} b`,
        explanation: `A função executa o cálculo aritmético (${n1} ${op} ${n2} = ${mathResult}) e a instrução return devolve o valor calculado para ser guardado em 'resultado'.`,
        variables: [
          { name: 'a', type: 'float', value: `${n1}`, description: 'Parâmetro recebido' },
          { name: 'b', type: 'float', value: `${n2}`, description: 'Parâmetro recebido' },
          { name: 'resultado', type: 'float', value: `${mathResult}`, description: 'Valor retornado pela função' }
        ],
        terminalOutput: `[Cálculo interno] ${n1} ${op} ${n2} = ${mathResult}`
      });

      stepList.push({
        stepNumber: 6,
        lineExecuted: `print(f"\\nResultado: {num1} ${op} {num2} = {resultado}")`,
        explanation: `A f-string formata e exibe na tela o resultado final de maneira clara para o usuário. Fim da execução com sucesso!`,
        variables: [
          { name: 'num1', type: 'float', value: `${n1}`, description: 'Primeiro número' },
          { name: 'num2', type: 'float', value: `${n2}`, description: 'Segundo número' },
          { name: 'resultado', type: 'float', value: `${mathResult}`, description: 'Resultado final' }
        ],
        terminalOutput: `\nResultado: ${n1} ${op} ${n2} = ${mathResult}`
      });
    }

    return stepList;
  };

  const handleStartSimulation = () => {
    const generated = generateSteps(selectedOp, num1Input, num2Input);
    setSteps(generated);
    setCurrentStepIndex(0);
    setHasExecuted(true);
    setIsRunning(false);
  };

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleRunAll = () => {
    if (!hasExecuted || steps.length === 0) {
      const generated = generateSteps(selectedOp, num1Input, num2Input);
      setSteps(generated);
      setHasExecuted(true);
      setCurrentStepIndex(generated.length - 1);
    } else {
      setCurrentStepIndex(steps.length - 1);
    }
  };

  const handleReset = () => {
    setHasExecuted(false);
    setCurrentStepIndex(0);
    setSteps([]);
  };

  const handlePreset = (n1: string, op: OperationType, n2: string) => {
    setNum1Input(n1);
    setSelectedOp(op);
    setNum2Input(n2);
    const generated = generateSteps(op, n1, n2);
    setSteps(generated);
    setCurrentStepIndex(0);
    setHasExecuted(true);
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentStepIndex, hasExecuted]);

  const currentStep = steps[currentStepIndex];

  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <div className="bg-[#111927] border border-slate-800 rounded-xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Simulador Interativo do Interpretador Python
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Veja exatamente como o Python lê o teclado com <code className="text-sky-300 font-mono">input()</code>,
              converte os dados com <code className="text-sky-300 font-mono">float()</code>, executa a função matemática correspondente
              e devolve a resposta no terminal.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <span className="text-xs text-slate-400">Exemplos rápidos:</span>
            <button
              onClick={() => handlePreset('15', '+', '7')}
              className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors"
            >
              15 + 7
            </button>
            <button
              onClick={() => handlePreset('200', '%', '15')}
              className="px-2.5 py-1 text-xs bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 rounded border border-purple-800/60 transition-colors"
            >
              15% de 200
            </button>
            <button
              onClick={() => handlePreset('10', '/', '0')}
              className="px-2.5 py-1 text-xs bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 rounded border border-amber-800/60 transition-colors"
              title="Testar segurança contra divisão por zero"
            >
              10 / 0 (Zero)
            </button>
          </div>
        </div>

        {/* Input Controls Form */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              1º Número (num1)
            </label>
            <input
              type="number"
              step="any"
              value={num1Input}
              onChange={(e) => setNum1Input(e.target.value)}
              className="w-full px-3 py-2 bg-[#090d16] border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-sky-500 transition-colors"
              placeholder="Ex: 10"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Operação Básica
            </label>
            <div className="grid grid-cols-5 gap-1 p-1 bg-[#090d16] border border-slate-700 rounded-lg">
              {(['+', '-', '*', '/', '%'] as OperationType[]).map((op) => (
                <button
                  key={op}
                  type="button"
                  onClick={() => setSelectedOp(op)}
                  className={`py-1.5 text-center text-sm font-mono font-bold rounded transition-colors ${
                    selectedOp === op
                      ? 'bg-sky-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={OPERATIONS.find(o => o.symbol === op)?.name}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              2º Número (num2)
            </label>
            <input
              type="number"
              step="any"
              value={num2Input}
              onChange={(e) => setNum2Input(e.target.value)}
              className="w-full px-3 py-2 bg-[#090d16] border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-sky-500 transition-colors"
              placeholder="Ex: 5"
            />
          </div>

          <div className="sm:col-span-3 flex gap-2">
            <button
              onClick={handleStartSimulation}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Simular</span>
            </button>
            {hasExecuted && (
              <button
                onClick={handleReset}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                title="Reiniciar simulação"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Two-Zone Sandbox */}
      {hasExecuted && currentStep && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Zone: Terminal & Execution Deck */}
          <div className="lg:col-span-7 space-y-4">
            {/* Terminal Window */}
            <div className="bg-[#080d1a] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1626] border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-slate-300">bash - python calculadora.py</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Passo {currentStepIndex + 1} de {steps.length}</span>
              </div>

              {/* Terminal Screen */}
              <div className="p-4 font-mono text-xs sm:text-sm text-slate-200 min-h-[220px] max-h-[340px] overflow-y-auto space-y-2">
                {steps.slice(0, currentStepIndex + 1).map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <pre className="whitespace-pre-wrap text-emerald-400 font-mono">{s.terminalOutput}</pre>
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>
            </div>

            {/* Stepper Controls Bar */}
            <div className="bg-[#111927] border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePreviousStep}
                  disabled={currentStepIndex === 0}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    currentStepIndex === 0
                      ? 'border-slate-800 text-slate-600 cursor-not-allowed'
                      : 'border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Passo Anterior
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStepIndex === steps.length - 1}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    currentStepIndex === steps.length - 1
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-sky-500 hover:bg-sky-400 text-slate-950'
                  }`}
                >
                  <span>Próximo Passo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleRunAll}
                  className="px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors"
                >
                  Ver Tudo
                </button>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStepIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentStepIndex
                        ? 'w-6 bg-sky-400'
                        : i < currentStepIndex
                        ? 'w-2 bg-emerald-500'
                        : 'w-2 bg-slate-700'
                    }`}
                    title={`Ir para passo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Zone: Line Execution & Variable Inspector */}
          <div className="lg:col-span-5 space-y-4">
            {/* Current Executing Python Code Line */}
            <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  Linha Sendo Executada Agora
                </span>
                <span className="font-mono text-sky-400">Passo {currentStep.stepNumber}</span>
              </div>
              <div className="p-3 bg-[#080d1a] border border-sky-500/30 rounded-lg text-xs font-mono text-sky-300 whitespace-pre-wrap overflow-x-auto">
                {currentStep.lineExecuted}
              </div>

              <div className="mt-3 p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  O que o Python está fazendo neste momento:
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentStep.explanation}
                </p>
              </div>
            </div>

            {/* Live Variable Inspector */}
            <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                <span className="font-semibold text-slate-300">Variáveis Alocadas na Memória</span>
                <span className="text-[11px] text-slate-500">Estado Atual</span>
              </div>

              <div className="space-y-2">
                {currentStep.variables.map((v, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#090d16] border border-slate-800 rounded-lg flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sky-300">{v.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {v.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-semibold text-emerald-400">{v.value}</span>
                      <p className="text-[10px] text-slate-400">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zero Division Alert or Success Badge */}
            {selectedOp === '/' && parseFloat(num2Input) === 0 ? (
              <div className="p-3.5 bg-amber-950/30 border border-amber-800/60 rounded-xl flex items-start gap-2.5 text-xs text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-amber-300">Atenção para Divisão por Zero</strong>
                  Como o segundo número é 0, a condicional <code className="font-mono text-amber-100">if b == 0:</code> interceptou o cálculo antes do operador <code className="font-mono">/</code> quebrar a execução com um erro fatal!
                </div>
              </div>
            ) : currentStepIndex === steps.length - 1 ? (
              <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/60 rounded-xl flex items-start gap-2.5 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-emerald-300">Cálculo Concluído com Sucesso!</strong>
                  O fluxo completo (entrada -&gt; conversão -&gt; função -&gt; retorno -&gt; saída) foi executado com precisão.
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* If not executed yet, show a welcome preview */}
      {!hasExecuted && (
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-8 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
            <Play className="w-6 h-6 ml-0.5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Pronto para rodar seu primeiro cálculo em Python?</h3>
            <p className="text-sm text-slate-400 mt-1">
              Configure os números acima ou clique no botão abaixo para ver o passo a passo com animação da memória e do terminal.
            </p>
          </div>
          <button
            onClick={handleStartSimulation}
            className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Começar Simulação (12 + 4)</span>
          </button>
        </div>
      )}
    </div>
  );
};
