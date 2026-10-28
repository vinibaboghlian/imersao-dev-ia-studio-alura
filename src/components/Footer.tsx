import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-[#080d17] py-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-300">Python Calc Lab</span> · Guia Didático para Programadores Iniciantes
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Python 3.10+</span>
          <span>·</span>
          <span>PEP 8 Compliant</span>
          <span>·</span>
          <span>Código Livre & Educativo</span>
        </div>
      </div>
    </footer>
  );
};
