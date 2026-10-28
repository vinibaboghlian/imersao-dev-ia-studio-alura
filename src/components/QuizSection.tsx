import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/pythonSnippets';
import { CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = QUIZ_QUESTIONS.every(q => userAnswers[q.id] !== undefined);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#111927] border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Desafio de Fixação: Teste Seus Conhecimentos
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Responda às 4 perguntas rápidas para checar se você assimilou os conceitos da calculadora em Python!
          </p>
        </div>

        {submitted && (
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-lg text-xs font-semibold text-sky-300">
              <Award className="w-4 h-4" />
              <span>Pontuação: {score} de {QUIZ_QUESTIONS.length}</span>
            </div>
            <button
              onClick={handleResetQuiz}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Tentar novamente"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q, qIndex) => {
          const selectedOption = userAnswers[q.id];
          const isCorrect = selectedOption === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'bg-[#0f1d1d] border-emerald-500/40'
                    : 'bg-[#1e1315] border-rose-500/40'
                  : 'bg-[#111927] border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs font-mono text-slate-400">
                  Questão 0{qIndex + 1} de 0{QUIZ_QUESTIONS.length}
                </span>
                {submitted && (
                  <span className="flex items-center gap-1 text-xs font-semibold">
                    {isCorrect ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correto
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Incorreto
                      </span>
                    )}
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white mb-3.5">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((option, optIdx) => {
                  const isThisSelected = selectedOption === optIdx;
                  let optStyle = 'border-slate-800 hover:border-slate-700 bg-[#090d16] text-slate-300';

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      optStyle = 'border-emerald-500/70 bg-emerald-950/40 text-emerald-200 font-semibold';
                    } else if (isThisSelected && !isCorrect) {
                      optStyle = 'border-rose-500/70 bg-rose-950/40 text-rose-200 line-through';
                    } else {
                      optStyle = 'border-slate-800/60 bg-[#090d16]/50 text-slate-500';
                    }
                  } else if (isThisSelected) {
                    optStyle = 'border-sky-500 bg-sky-950/30 text-sky-200 font-semibold';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${optStyle}`}
                    >
                      <span>{option}</span>
                      <span className="w-4 h-4 rounded-full border flex items-center justify-center shrink-0 text-[10px]">
                        {isThisSelected ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submission */}
              {submitted && (
                <div className="mt-3.5 p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-sky-300 font-medium block mb-1">Explicação Didática:</strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit button */}
      {!submitted && (
        <div className="text-center pt-2">
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className={`px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
              allAnswered
                ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 cursor-pointer shadow-lg shadow-sky-500/20'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            {allAnswered ? 'Verificar Respostas' : 'Responda a todas as perguntas para conferir'}
          </button>
        </div>
      )}
    </div>
  );
};
