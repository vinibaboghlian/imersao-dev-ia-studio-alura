export type OperationType = '+' | '-' | '*' | '/';

export interface OperationInfo {
  symbol: OperationType;
  name: string;
  funcName: string;
  pythonSyntax: string;
  example: string;
  description: string;
}

export interface VariableState {
  name: string;
  type: string;
  value: string;
  description: string;
}

export interface ExecutionStep {
  stepNumber: number;
  lineExecuted: string;
  explanation: string;
  variables: VariableState[];
  terminalOutput: string;
}

export interface ConceptItem {
  id: string;
  title: string;
  badge: string;
  syntax: string;
  explanation: string;
  whyItMatters: string;
  exampleSnippet: string;
  beginnerTip: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
