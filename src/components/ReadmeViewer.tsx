import React, { useState } from 'react';
import { Copy, Check, Download, FileText, UserCheck, Sparkles } from 'lucide-react';

interface ReadmeViewerProps {
  initialContent: string;
}

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ initialContent }) => {
  const [authorName, setAuthorName] = useState<string>('Vini Baboghlian');
  const [githubUser, setGithubUser] = useState<string>('vinibaboghlian');
  const [linkedinUser, setLinkedinUser] = useState<string>('vinibaboghlian');
  const [repoName, setRepoName] = useState<string>('imersao-dev-ia-studio-alura');
  const [copied, setCopied] = useState<boolean>(false);

  // Generate personalized README content
  const generatedMarkdown = initialContent
    .replace(/\[Seu Nome Aqui\]/g, authorName || '[Seu Nome Aqui]')
    .replace(/@seu-usuario/g, `@${githubUser || 'seu-usuario'}`)
    .replace(/seu-usuario/g, githubUser || 'seu-usuario')
    .replace(/seu-perfil/g, linkedinUser || 'seu-perfil')
    .replace(/calculadora-python/g, repoName || 'calculadora-python');

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedMarkdown], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#111927] border border-slate-800 rounded-xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Documentação de Conclusão de Curso</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Gerador de README.md para GitHub
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl">
              Um README profissional com badges, explicação arquitetural, exemplos de execução no terminal e estrutura formal de entrega de certificação.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-lg transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado para o Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar README.md</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Arquivo</span>
            </button>
          </div>
        </div>

        {/* Customization Inputs */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Seu Nome Completo
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-3 py-1.5 bg-[#090d16] border border-slate-700 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-sky-500"
              placeholder="Ex: Seu Nome"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Usuário do GitHub
            </label>
            <input
              type="text"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
              className="w-full px-3 py-1.5 bg-[#090d16] border border-slate-700 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-sky-500"
              placeholder="Ex: seu-usuario"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Usuário do LinkedIn
            </label>
            <input
              type="text"
              value={linkedinUser}
              onChange={(e) => setLinkedinUser(e.target.value)}
              className="w-full px-3 py-1.5 bg-[#090d16] border border-slate-700 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-sky-500"
              placeholder="Ex: seu-perfil"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nome do Repositório
            </label>
            <input
              type="text"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
              className="w-full px-3 py-1.5 bg-[#090d16] border border-slate-700 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-sky-500"
              placeholder="calculadora-python"
            />
          </div>
        </div>
      </div>

      {/* Guide: How to Publish to GitHub */}
      <div className="bg-[#111927] border border-sky-500/30 rounded-xl p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-2 text-sky-400">
          <Sparkles className="w-5 h-5" />
          <h3 className="text-base sm:text-lg font-bold text-white">
            Como Publicar no seu Repositório do GitHub (2 Formas Fáceis)
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          O Google AI Studio não possui um botão direto de &quot;Publicar no GitHub&quot;. Mas você pode colocar seus arquivos no repositório em menos de 2 minutos escolhendo uma das opções abaixo:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Option A: Browser Upload (No Terminal) */}
          <div className="p-4 bg-[#090d16] border border-slate-800 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">Opção 1 · Mais Fácil (Sem Terminal)</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">Recomendado</span>
            </div>
            <ol className="text-xs text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
              <li>
                Baixe os arquivos clicando em <strong className="text-white">Baixar .py</strong> (no topo) e <strong className="text-white">Baixar Arquivo</strong> (README.md acima).
              </li>
              <li>
                Abra seu repositório no navegador:
                <a
                  href="https://github.com/vinibaboghlian/imersao-dev-ia-studio-alura"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sky-400 hover:underline font-mono text-[11px] mt-0.5"
                >
                  github.com/vinibaboghlian/imersao-dev-ia-studio-alura
                </a>
              </li>
              <li>
                Clique no botão <strong className="text-white">Add file</strong> ➔ <strong className="text-white">Upload files</strong> (ou no link <em>&quot;uploading an existing file&quot;</em>).
              </li>
              <li>
                Arraste os arquivos <code className="text-sky-300 font-mono">calculadora.py</code> e <code className="text-sky-300 font-mono">README.md</code> para a tela.
              </li>
              <li>
                Role até o final da página e clique no botão verde <strong className="text-white">Commit changes</strong>. Pronto!
              </li>
            </ol>
          </div>

          {/* Option B: Terminal / VS Code */}
          <div className="p-4 bg-[#090d16] border border-slate-800 rounded-xl space-y-3">
            <span className="text-xs font-bold text-sky-400">Opção 2 · Via Terminal / VS Code</span>
            <p className="text-xs text-slate-400">
              Se você tentar via SSH e der erro de permissão (<code className="text-rose-400">Permission denied (publickey)</code>), use o link HTTPS que solicita login automático no navegador:
            </p>
            <div className="p-2.5 bg-[#050811] rounded border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
              <div>git init</div>
              <div>git add .</div>
              <div>git commit -m &quot;feat: calculadora python alura&quot;</div>
              <div>git branch -M main</div>
              <div className="text-sky-300">git remote add origin https://github.com/vinibaboghlian/imersao-dev-ia-studio-alura.git</div>
              <div>git push -u origin main</div>
            </div>
          </div>
        </div>
      </div>

      {/* Markdown Content Display */}
      <div className="bg-[#080d1a] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1525] border-b border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="font-mono ml-2 text-slate-400">README.md · Formatação GitHub Flavored Markdown</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[11px] font-mono">Pronto para commit</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-x-auto max-h-[650px] overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
          {generatedMarkdown}
        </div>
      </div>

      {/* Tips for Certification Submission */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-[#111927] border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2 text-sky-400 mb-1.5">
            <Sparkles className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">Dica para Avaliadores</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Avaliadores de cursos e recrutadores valorizam muito repositórios que explicam o <strong>porquê</strong> das decisões técnicas (como por que tratar divisão por zero e usar funções puras).
          </p>
        </div>

        <div className="p-4 bg-[#111927] border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
            <UserCheck className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">Comandos Git Prontos</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            git init<br />
            git add .<br />
            git commit -m &quot;feat: calculadora python com 4 operações&quot;<br />
            git branch -M main
          </p>
        </div>

        <div className="p-4 bg-[#111927] border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2 text-amber-400 mb-1.5">
            <FileText className="w-4 h-4" />
            <h4 className="text-sm font-bold text-white">Licença MIT Aberta</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Já incluímos a licença MIT no repositório. Isso formaliza o projeto como código aberto e elegível para submissão pública.
          </p>
        </div>
      </div>
    </div>
  );
};
