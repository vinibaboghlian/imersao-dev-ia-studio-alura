import React, { useState } from 'react';
import { Copy, Check, Download, BookOpen, Layers } from 'lucide-react';
import { BASIC_CALCULATOR_CODE, ADVANCED_CALCULATOR_CODE } from '../data/pythonSnippets';

export const CodeViewer: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<'basic' | 'advanced'>('basic');
  const [copied, setCopied] = useState<boolean>(false);

  const activeCode = selectedVersion === 'basic' ? BASIC_CALCULATOR_CODE : ADVANCED_CALCULATOR_CODE;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = selectedVersion === 'basic' ? 'calculadora_simples.py' : 'calculadora_avancada.py';
    const element = document.createElement('a');
    const file = new Blob([activeCode], { type: 'text/x-python' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Header */}
      <div className="bg-[#111927] border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Código-Fonte em Python
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Código limpo, formatado de acordo com o padrão oficial PEP 8 e 100% comentado em português.
          </p>
        </div>

        {/* Version Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#090d16] border border-slate-700/80 rounded-lg shrink-0">
          <button
            onClick={() => setSelectedVersion('basic')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedVersion === 'basic'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Iniciante (Essencial)
          </button>
          <button
            onClick={() => setSelectedVersion('advanced')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedVersion === 'advanced'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Completo (Com Loop)
          </button>
        </div>
      </div>

      {/* Code Display Area */}
      <div className="bg-[#080d1a] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        {/* Action Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1525] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="font-mono text-xs text-slate-300 ml-2">
              {selectedVersion === 'basic' ? 'calculadora_simples.py' : 'calculadora_avancada.py'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Arquivo</span>
            </button>
          </div>
        </div>

        {/* Code Content with Line Numbers */}
        <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed max-h-[600px] overflow-y-auto">
          <pre className="text-slate-300">
            {activeCode.split('\n').map((line, index) => {
              const isComment = line.trim().startsWith('#');
              const isDef = line.trim().startsWith('def ');
              const isReturn = line.includes('return ');
              const isIfElif = line.trim().startsWith('if ') || line.trim().startsWith('elif ') || line.trim().startsWith('else:');
              const isPrint = line.trim().startsWith('print(');

              let lineClass = 'text-slate-300';
              if (isComment) lineClass = 'text-slate-500 italic';
              else if (isDef) lineClass = 'text-sky-300 font-semibold';
              else if (isReturn) lineClass = 'text-purple-300';
              else if (isIfElif) lineClass = 'text-amber-300 font-semibold';
              else if (isPrint) lineClass = 'text-emerald-300';

              return (
                <div key={index} className="flex hover:bg-slate-800/40 px-2 py-0.5 rounded transition-colors">
                  <span className="text-slate-600 select-none w-10 text-right pr-4 shrink-0 font-mono text-xs">
                    {index + 1}
                  </span>
                  <span className={`${lineClass} whitespace-pre`}>
                    {line}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>
      </div>

      {/* Architecture Explanatory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-sky-400 mb-2">
            <Layers className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">1. Modularidade com Funções</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Separamos cada cálculo (<code className="font-mono text-sky-300">somar</code>, <code className="font-mono text-sky-300">subtrair</code>, etc.) em uma função dedicada. Isso evita código duplicado e facilita futuros testes.
          </p>
        </div>

        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">2. Conversão Segura de Tipos</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ao usar <code className="font-mono text-emerald-300">float(input())</code>, aceitamos tanto números inteiros (como 10) quanto decimais (como 7.5), sem truncar os dados.
          </p>
        </div>

        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <Check className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">3. Proteção e Elegância</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            A função <code className="font-mono text-amber-300">dividir()</code> valida antes se o divisor é zero. As <code className="font-mono text-amber-300">f-strings</code> mostram os resultados de forma limpa e agradável no terminal.
          </p>
        </div>
      </div>
    </div>
  );
};
