<div align="center">
<img width="1200" height="475" alt="BinaryMind" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# 🛡️ BinaryMind Academy

**An elite, interactive cybersecurity and computer science self-learning platform** featuring safe simulators, programming challenges, CTF games, and an integrated AI tutor.

## ✨ Features

- **🧠 Interactive Knowledge Graph** - Visual skill tree mapping concepts and prerequisites
- **💻 Programming Hub** - Code challenges with secure sanitization drills (XSS, SQLi)
- **🐧 Linux Terminal Simulator** - Safe shell environment for file operations and permissions
- **🌐 Network Topology Visualizer** - TCP handshakes, DNS resolution, packet flows
- **🔒 Web Security Labs** - SQL injection and XSS sandbox demonstrations
- **🚩 CTF Arena** - Capture-the-flag challenges (cryptography, forensics, OSINT)
- **🔍 Digital Forensics Lab** - EXIF metadata extraction, file signature analysis
- **🎮 Cyber Range** - Real-time incident response simulations
- **🤖 AI Mentor** - Gemini-powered chatbot for technical guidance
- **📊 Analytics Dashboard** - Progress tracking, flashcards, notes, diploma generation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prasanna01001/binarymind-academy.git
   cd binarymind-academy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your GEMINI_API_KEY from https://ai.google.dev
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run lint
```

## 📁 Project Structure

```
├── src/
│   ├── components/           # React UI components (12+ labs)
│   │   ├── KnowledgeGraph.tsx       # Interactive skill tree
│   │   ├── CSFundamentalsLab.tsx    # Binary, logic gates, algorithms
│   │   ├── ProgrammingHub.tsx       # Code challenges & sandbox
│   │   ├── LinuxAcademy.tsx         # Terminal simulator
│   │   ├── NetworkingAcademy.tsx    # OSI, TCP, DNS visualization
│   │   ├── WebSecurityAcademy.tsx   # SQLi & XSS labs
│   │   ├── CTFLab.tsx               # Capture the flag challenges
│   │   ├── ForensicsLab.tsx         # Metadata & file analysis
│   │   ├── CyberRange.tsx           # Incident response scenarios
│   │   ├── AIMentor.tsx             # Gemini chatbot
│   │   ├── BugBountyCenter.tsx      # CVSS calculator & recon
│   │   ├── Analytics.tsx            # Dashboard & diploma
│   │   └── App.tsx                  # Main app
│   ├── data/
│   │   └── lessonsData.ts    # Curriculum: 9 lessons, CTF challenges, scenarios
│   ├── types.ts               # TypeScript interfaces
│   ├── main.tsx               # React entry point
│   └── index.css              # Tailwind CSS
├── src/server.ts              # Express backend with Gemini API
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 👨‍🎓 Learning Modules

### 📚 Fundamentals (3 lessons)
- Binary & Bits Operations
- Logic Gates & Boolean Algebra  
- Memory, Algorithms & Big-O Notation

### 🐧 Linux Systems (2 lessons)
- Command Line & Directory Navigation
- File Permissions & Chmod Models

### 🌐 Networking (1 lesson)
- OSI Model & TCP Handshake

### 🔒 Web Security (2 lessons)
- SQL Injection Vulnerabilities
- Cross-Site Scripting (XSS)

### 🔴 Bug Bounty Lab
- CVSS v3.1 Severity Calculator
- Reconnaissance & Subdomain Discovery
- Corporate Security Reporting Templates

### 🔍 Digital Forensics
- EXIF Metadata Inspection
- File Signature Analysis (Magic Bytes)
- Log Parsing & Timeline Reconstruction

### 🎮 Cyber Range
- Ransomware Containment Scenario
- Phishing Attack Response
- Incident Mitigation Strategies

### 🚩 CTF Arena (4 challenges)
- Caesar Cipher Cryptography (100 pts)
- Hex Magic Bytes (120 pts)
- Base64 Encoding (150 pts)
- OSINT IP Address (180 pts)

### 💻 Programming Hub (2 challenges)
- Secure HTML Escaping Function
- Safe SQL Query Constructor

## 🤖 AI Mentor

Powered by **Google Gemini 3.5 Flash**:
- Real-time code & security guidance
- Cryptography & networking explanations
- Interactive quiz generation
- Vulnerability assessment help
- Adaptive learning responses

## 🔧 Environment Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google AI Studio API key | ✅ Yes |
| `APP_URL` | Production app URL | ❌ No |
| `NODE_ENV` | `development` or `production` | ❌ No |

**Get your API key:** https://ai.google.dev

## 🧪 Technology Stack

- **Frontend:** React 19, TypeScript 5.8, Tailwind CSS 4, Lucide Icons
- **Backend:** Express.js 4.21, Node.js 18+
- **AI:** Google Gemini 3.5 Flash API
- **Build:** Vite 6.2, esbuild 0.25
- **Animation:** Motion library
- **Styling:** Tailwind CSS with custom theme

## 📊 Features Breakdown

### Interactive Labs (12)
1. **Knowledge Graph** - Visual topology of learning paths
2. **CS Fundamentals** - Logic gate simulator, binary converter
3. **Programming Hub** - Code compiler with secure validations
4. **Linux Academy** - Virtual terminal with file system
5. **Networking** - Packet flow visualizer with animations
6. **Web Security** - SQLi & XSS sandbox demonstrations
7. **CTF Lab** - Flag submission system with hint system
8. **Bug Bounty** - CVSS calculator, recon methodologies
9. **Forensics** - Hex viewer, EXIF metadata extraction
10. **Cyber Range** - Incident response simulations
11. **AI Mentor** - Gemini-powered chatbot
12. **Analytics** - Progress dashboard, diplomas, flashcards

### Data
- **9 Comprehensive Lessons** across 8 categories
- **4 CTF Challenges** with difficulty scaling
- **2 Code Challenges** for secure coding
- **2 Cyber Scenarios** for incident response
- **4 Flashcards** for quick review
- **Local storage** for user progress tracking

## 🎓 User Experience

- **Responsive Design** - Mobile, tablet, desktop optimized
- **XP & Leveling System** - Earn points for completed activities
- **Streak Tracking** - Daily engagement rewards
- **Progress Persistence** - Browser localStorage for session data
- **Diploma Generation** - Certificate upon course completion
- **Dark Cyberpunk Theme** - Immersive learning environment

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Cloud Deployment (Google Cloud Run example)
```bash
gcloud run deploy binarymind-academy --source . --platform managed
```

## 📝 License

This project is provided as-is for educational purposes.

## 🙋 Support & Contribution

For questions, issues, or feature requests, please open a GitHub issue.

Contributions are welcome! Please fork the repository and submit a pull request.

---

**Built with ❤️ for cybersecurity learners worldwide**

*Last updated: 2026-06-21*