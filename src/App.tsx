import React, { useState } from 'react';
import { Header } from './components/Header';
import { TerminalSimulator } from './components/TerminalSimulator';
import { CodeViewer } from './components/CodeViewer';
import { ComponentExplainer } from './components/ComponentExplainer';
import { QuizSection } from './components/QuizSection';
import { ReadmeViewer } from './components/ReadmeViewer';
import { Footer } from './components/Footer';
import { OPERATIONS, README_MARKDOWN } from './data/pythonSnippets';
import { Terminal, Code, BookOpen, HelpCircle, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'concepts' | 'quiz' | 'readme'>('simulator');

  return (
    <div className="min-h-screen bg-[#090e17] text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-200">
      {/* 3-Zone Top Navigation Contract */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 space-y-8">
        {/* Editorial Hero Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
            <span>Guia Passo a Passo</span>
            <span aria-hidden="true">·</span>
            <span>Iniciando em Python</span>
            <span aria-hidden="true">·</span>
            <span>4 Operações Básicas</span>
            <span aria-hidden="true">·</span>
            <span>Certificação & GitHub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Calculadora Simples em Python
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Aprenda a estruturar funções (<code className="text-sky-300 font-mono">def</code>), capturar entradas com <code className="text-sky-300 font-mono">input()</code>,
            converter tipos de dados com <code className="text-sky-300 font-mono">float()</code>, tomar decisões com <code className="text-sky-300 font-mono">if/elif/else</code> e
            prevenir erros matemáticos com segurança.
          </p>

          {/* Quick Operations Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {OPERATIONS.map((op) => (
              <div
                key={op.symbol}
                className="p-3.5 bg-[#111927] border border-slate-800 rounded-xl hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-slate-400">{op.name}</span>
                  <span className="font-mono text-base font-bold text-sky-400">{op.symbol}</span>
                </div>
                <div className="font-mono text-xs text-emerald-400 font-medium">
                  {op.pythonSyntax}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono">
                  {op.example}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workspace Segmented Controls (Visible on all viewports) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#111927] border border-slate-800 rounded-xl overflow-x-auto">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'simulator'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Simulador Interativo</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'code'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>Código Python Completo</span>
          </button>

          <button
            onClick={() => setActiveTab('concepts')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'concepts'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Conceitos Explicados</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'quiz'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Desafio & Fixação</span>
          </button>

          <button
            onClick={() => setActiveTab('readme')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'readme'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>README do GitHub</span>
          </button>
        </div>

        {/* Tab View Content */}
        {activeTab === 'simulator' && <TerminalSimulator />}
        {activeTab === 'code' && <CodeViewer />}
        {activeTab === 'concepts' && <ComponentExplainer />}
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'readme' && <ReadmeViewer initialContent={README_MARKDOWN} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
