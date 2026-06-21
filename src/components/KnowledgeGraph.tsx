import { useState } from "react";
import { Network, Cpu, Shield, Terminal, Globe, Search, BookOpen } from "lucide-react";

interface Node {
  id: string;
  name: string;
  category: string;
  description: string;
  connections: string[];
  x: number;
  y: number;
  icon: React.ReactNode;
}

export default function KnowledgeGraph({ onSelectCategory }: { onSelectCategory: (cat: string) => void }) {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const nodes: Node[] = [
    {
      id: "cs-fund",
      name: "CS Fundamentals",
      category: "fundamentals",
      description: "Binary mathematics, logic gates, and the algorithms that govern computational speed.",
      connections: ["prog-hub", "linux-acad"],
      x: 200,
      y: 80,
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      id: "prog-hub",
      name: "Programming Hub",
      category: "programming",
      description: "Writing and sanitizing raw logic in JS, TypeScript, Python, and native C architectures.",
      connections: ["web-sec", "forensics-lab"],
      x: 450,
      y: 90,
      icon: <Terminal className="w-5 h-5 text-emerald-400" />
    },
    {
      id: "linux-acad",
      name: "Linux Systems",
      category: "linux",
      description: "Kernel streams, POSIX permission layers, and interactive file management structures.",
      connections: ["net-acad", "forensics-lab"],
      x: 180,
      y: 280,
      icon: <Terminal className="w-5 h-5 text-amber-500" />
    },
    {
      id: "net-acad",
      name: "Networking Nodes",
      category: "networking",
      description: "The OSI model, route paths, packet delivery states, and TCP connection establishment.",
      connections: ["web-sec", "cyber-range"],
      x: 350,
      y: 350,
      icon: <Globe className="w-5 h-5 text-indigo-400" />
    },
    {
      id: "web-sec",
      name: "Web Security Lab",
      category: "web-security",
      description: "Analyzing injection flaws, securing input buffers, and defending active session states.",
      connections: ["bug-bounty", "cyber-range"],
      x: 650,
      y: 200,
      icon: <Shield className="w-5 h-5 text-rose-500" />
    },
    {
      id: "bug-bounty",
      name: "Bug Bounty Center",
      category: "bug-bounty",
      description: "Ethical research methodologies, automated intelligence logging, and professional reporting layouts.",
      connections: ["web-sec"],
      x: 720,
      y: 330,
      icon: <Search className="w-5 h-5 text-purple-400" />
    },
    {
      id: "forensics-lab",
      name: "Digital Forensics",
      category: "forensics",
      description: "Analyzing magic file signatures, system metadata dumps, and extracting chronometric forensic records.",
      connections: ["cyber-range"],
      x: 480,
      y: 250,
      icon: <BookOpen className="w-5 h-5 text-cyan-300" />
    },
    {
      id: "cyber-range",
      name: "Active Cyber Range",
      category: "cyber-range",
      description: "A defensive war room simulating enterprise ransomware events and server breach attempts.",
      connections: [],
      x: 600,
      y: 360,
      icon: <Network className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 flex flex-col md:flex-row h-full gap-6">
      <div className="flex-1">
        <div className="mb-4">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400 animate-pulse" />
            Skill Tree & Interactive Knowledge Map
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            Click on core nodes to explore disciplinary transitions and deep-dive into lessons.
          </p>
        </div>

        <div className="relative w-full h-[400px] border border-slate-800/50 rounded-xl bg-slate-950/80 overflow-auto overflow-y-hidden select-none">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((fromNode) => {
              return fromNode.connections.map((toId) => {
                const target = nodes.find((n) => n.id === toId);
                if (!target) return null;
                const isSelected = selectedNode?.id === fromNode.id || selectedNode?.id === target.id;
                return (
                  <g key={`${fromNode.id}-${toId}-g`}>
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={target.x}
                      y2={target.y}
                      className={`stroke-2 transition-all duration-300 ${
                        isSelected ? "stroke-cyan-400/60 [stroke-dasharray:5] animate-[dash_10s_linear_infinite]" : "stroke-slate-800"
                      }`}
                    />
                    <circle
                      cx={(fromNode.x + target.x) / 2}
                      cy={(fromNode.y + target.y) / 2}
                      r="2"
                      className="fill-cyan-400"
                    />
                  </g>
                );
              });
            })}
          </svg>

          {nodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`absolute flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-slate-950/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
                style={{ left: `${node.x}px`, top: `${node.y}px` }}
              >
                <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800">
                  {node.icon}
                </div>
                <span className="text-[10px] font-mono tracking-tight font-medium text-slate-300 mt-1">
                  {node.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full md:w-80 flex flex-col justify-between bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
        {selectedNode ? (
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1 px-2.5 rounded text-[10px] font-mono font-medium tracking-widest uppercase bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Node Analysis
                </div>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                {selectedNode.name}
              </h3>
              <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                {selectedNode.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-2">
                  Direct Outbound Gateways:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.connections.map(cId => {
                    const mapped = nodes.find(n => n.id === cId);
                    return mapped ? (
                      <span key={cId} className="text-[10px] font-mono bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                        → {mapped.name}
                      </span>
                    ) : null;
                  })}
                  {selectedNode.connections.length === 0 && (
                    <span className="text-[10px] font-mono text-slate-600">
                      Terminal Node (Endpoint)
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectCategory(selectedNode.category)}
              className="mt-6 w-full py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg text-xs tracking-wider transition-all cursor-pointer font-mono text-center flex items-center justify-center gap-1.5 shadow-md shadow-cyan-950/50 hover:shadow-cyan-400/10"
            >
              Initialize Node Lessons
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-12 text-center">
            <Network className="w-10 h-10 text-slate-600 mb-3 animate-[pulse_3s_infinite]" />
            <span className="text-slate-400 text-xs font-mono">System Standby</span>
            <p className="text-[11px] text-slate-500 mt-2 max-w-[200px]">
              Select any core node to load intelligence feeds and learning tracks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}