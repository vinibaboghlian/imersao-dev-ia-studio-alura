import React, { useState } from 'react';
import { CONCEPTS } from '../data/pythonSnippets';
import { Lightbulb, Code2, CheckCircle2, ChevronRight } from 'lucide-react';

export const ComponentExplainer: React.FC = () => {
  const [activeConceptId, setActiveConceptId] = useState<string>(CONCEPTS[0].id);

  const activeConcept = CONCEPTS.find(c => c.id === activeConceptId) || CONCEPTS[0];

  return (
    <div className="space-y-6">
      {/* Overview header */}
      <div className="bg-[#111927] border border-slate-800 rounded-xl p-5">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Guia dos Componentes Fundamentais
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          Entenda o porquê de cada instrução em Python. Aprender os fundamentos agora tornará você capaz de criar qualquer outro programa no futuro!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Concept Selector Navigation List */}
        <div className="lg:col-span-4 space-y-2">
          {CONCEPTS.map((concept, index) => {
            const isSelected = concept.id === activeConceptId;
            return (
              <button
                key={concept.id}
                onClick={() => setActiveConceptId(concept.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#152033] border-sky-500/50 shadow-md'
                    : 'bg-[#111927] border-slate-800 hover:border-slate-700 hover:bg-[#131c2d]'
                }`}
              >
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-0.5">
                    0{index + 1} · {concept.badge}
                  </div>
                  <div className={`text-sm font-semibold ${isSelected ? 'text-sky-300' : 'text-slate-200'}`}>
                    {concept.title}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-sky-400 translate-x-0.5' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Concept Deep Dive Card */}
        <div className="lg:col-span-8 bg-[#111927] border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl">
          <div className="border-b border-slate-800/80 pb-4">
            <div className="text-xs font-medium text-sky-400 mb-1">
              Componente 0{CONCEPTS.findIndex(c => c.id === activeConcept.id) + 1}
            </div>
            <h3 className="text-xl font-bold text-white">
              {activeConcept.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {activeConcept.explanation}
            </p>
          </div>

          {/* Syntax Template */}
          <div>
            <span className="block text-xs font-semibold text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              Sintaxe em Python
            </span>
            <div className="p-3 bg-[#080d1a] border border-slate-800 rounded-lg font-mono text-xs text-sky-300 whitespace-pre-wrap">
              {activeConcept.syntax}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-lg">
            <h4 className="text-xs font-bold text-slate-200 flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Por que este componente é essencial?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeConcept.whyItMatters}
            </p>
          </div>

          {/* Concrete Example */}
          <div>
            <span className="block text-xs font-semibold text-slate-400 mb-1.5">
              Exemplo Prático:
            </span>
            <div className="p-3 bg-[#080d1a] border border-slate-800 rounded-lg font-mono text-xs text-emerald-300 whitespace-pre-wrap">
              {activeConcept.exampleSnippet}
            </div>
          </div>

          {/* Pro Tip for Beginners */}
          <div className="p-4 bg-sky-950/20 border border-sky-800/40 rounded-lg flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div className="text-xs text-sky-200 leading-relaxed">
              <strong className="text-sky-300 font-semibold block mb-0.5">Dica para quem está começando:</strong>
              {activeConcept.beginnerTip}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
