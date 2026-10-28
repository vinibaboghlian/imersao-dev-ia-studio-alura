import React from 'react';
import { Download, Terminal } from 'lucide-react';
import { BASIC_CALCULATOR_CODE } from '../data/pythonSnippets';

interface HeaderProps {
  activeTab: 'simulator' | 'code' | 'concepts' | 'quiz' | 'readme';
  setActiveTab: (tab: 'simulator' | 'code' | 'concepts' | 'quiz' | 'readme') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const handleDownloadScript = () => {
    const element = document.createElement('a');
    const file = new Blob([BASIC_CALCULATOR_CODE], { type: 'text/x-python' });
    element.href = URL.createObjectURL(file);
    element.download = 'calculadora.py';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#090e17]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white">
            Python Calc Lab
          </span>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors ${
              activeTab === 'simulator'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Simulador Interativo
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors ${
              activeTab === 'code'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Código Python
          </button>
          <button
            onClick={() => setActiveTab('concepts')}
            className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors ${
              activeTab === 'concepts'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Conceitos Explicados
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors ${
              activeTab === 'quiz'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Desafio & Fixação
          </button>
          <button
            onClick={() => setActiveTab('readme')}
            className={`whitespace-nowrap shrink-0 pb-0.5 transition-colors ${
              activeTab === 'readme'
                ? 'text-sky-400 border-b-2 border-sky-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            README do GitHub
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDownloadScript}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title="Baixar arquivo calculadora.py para rodar no seu computador"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar .py</span>
          </button>
        </div>
      </div>
    </header>
  );
};
