export interface Lesson {
  id: string;
  title: string;
  category: "fundamentals" | "programming" | "linux" | "networking" | "web-security" | "bug-bounty" | "forensics" | "cyber-range";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  xpReward: number;
  teaser: string;
  explanation: string;
  defenseTechnique?: string;
  realWorldExample?: string;
}

export interface CodeChallenge {
  id: string;
  title: string;
  language: string;
  instructions: string;
  initialCode: string;
  solutionPattern: string;
  testCases: { input: string; expected: string }[];
}

export interface CTFChallenge {
  id: string;
  title: string;
  category: "Web Security" | "Cryptography" | "Forensics" | "OSINT" | "Reverse Engineering" | "Steganography";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  points: number;
  description: string;
  hint: string;
  flag: string;
  solved?: boolean;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CyberScenario {
  id: string;
  title: string;
  description: string;
  mission: string;
  systemLogs: string[];
  threatLevel: "Low" | "Medium" | "High" | "Critical";
  mitigations: { id: string; option: string; isCorrect: boolean }[];
  explanation: string;
}