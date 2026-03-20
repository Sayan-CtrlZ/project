# ⚡ EduQ — Learn. Code. Dominate.

> **A gamified, AI-powered developer learning platform. Built for operatives who take their craft seriously.**

![EduQ Banner](public/dashboard-character.png)

<div align="center">

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-DEPLOY-f5c842?style=for-the-badge&logo=vercel&logoColor=black)](https://your-vercel-url.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/Srv99x/project?style=for-the-badge&color=f5c842)](https://github.com/Srv99x/project/stargazers)
[![License](https://img.shields.io/badge/LICENSE-MIT-9b8aff?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19-2dd4bf?style=for-the-badge&logo=react)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-4ade80?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com)

</div>

---

## 🎯 What is EduQ?

EduQ transforms the passive experience of learning to code into an **immersive, high-stakes operative mission**. Every lesson is a bounty. Every quiz is a battle. Every streak is a weapon.

It combines a **live code execution environment**, an **AI voice tutor powered by Google Gemini**, and a **deep gamification layer** — all wrapped in a dark cyberpunk aesthetic that makes you *want* to come back tomorrow.

---

## ✨ Features

### 🤖 AI-Powered Tutoring (NOVA)
- **Context-aware AI handler** — NOVA knows which page you're on, your active quest, and your conversation history
- **Voice + Text interface** — Web Speech API with `continuous: true`, auto-restart on silence, and `isFinal` filtering
- **Text-to-Speech** — AI responses read aloud, multi-language support
- **4 AI actions in Coding Ground** — Debug, Optimize, Explain, and Boss Fight mode

### 💻 Live Code Execution
- In-browser editor with **PrismJS syntax highlighting**
- Supports **Python, JavaScript, TypeScript**
- Secure execution via **FastAPI backend proxy** → onlinecompiler.io
- AI-powered **Debug / Optimize / Explain** inline

### 🎮 Deep Gamification
| Feature | Description |
|---------|-------------|
| **Daily Login Streaks** | 7-day reward cycles with milestone bonuses |
| **Battle Pass** | Season 1 with Free + Premium reward tracks (10 levels) |
| **PvP Quiz Arena** | Battle bot opponents across 5 questions, 20s per round |
| **Mission Terminal** | Daily Bounties, Weekly Infiltrations, Deep Cover Ops |
| **Skill Tree** | Visual dependency map of your learning path |
| **Achievements** | Badge system with rarity tiers: Common → Legendary |
| **Power-Up Shop** | Gem-based virtual economy |
| **XP Leaderboard** | Global rankings with rank delta tracking |
| **Boss Fight HUD** | Gamified coding challenge overlay in the editor |

### 🎨 Premium Dark UI
- **Cyberpunk / Wayne Enterprises aesthetic** — gritty, minimal, high-tech
- **Full-viewport character art backgrounds** per page with glassmorphism cards
- **Framer Motion** animations throughout — every interaction feels intentional
- **Press Start 2P** pixel font for game-style headings
- Responsive, single-frame layout — no scroll, no clutter

---

## 🚀 Tech Stack

### Frontend
| Package | Version | Purpose |
|---------|---------|---------|
| React | 19.2.4 | UI Framework |
| TypeScript | 5.8 | Type safety |
| Vite | 6.2.0 | Build tool |
| React Router DOM | 7.13 | Client-side routing (HashRouter) |
| Framer Motion | 12.38 | Animations |
| @google/genai | 1.41 | Gemini AI SDK |
| Recharts | 3.7 | Data visualization |
| Lucide React | 0.564 | Icons |
| Tailwind CSS | CDN | Utility styling |
| PrismJS | 1.30 | Syntax highlighting |

### Backend
| Package | Purpose |
|---------|---------|
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| Pydantic | Request/response validation |
| Httpx | Async HTTP proxy client |

---

## 📁 Project Structure

```
eduq/
├── pages/
│   ├── AuthPage.tsx          # Sign In / Sign Up with auth guard
│   ├── Dashboard.tsx         # Home — XP, streaks, activity chart
│   ├── Quests.tsx            # Mission Terminal — bounties & ops
│   ├── CodingGround.tsx      # Live editor + AI + Boss Fight
│   ├── AvatarTutor.tsx       # NOVA voice/text AI tutor
│   ├── BattlePass.tsx        # Season 1 progression system
│   ├── PvpQuiz.tsx           # Competitive quiz arena
│   ├── Quizzes.tsx           # Topic-based quiz rounds
│   ├── Notebook.tsx          # Persistent markdown notes
│   ├── Analytics.tsx         # Learning stats & charts
│   ├── Leaderboard.tsx       # Global XP rankings
│   ├── Achievements.tsx      # Badge & trophy collection
│   └── PowerUpShop.tsx       # Gem economy / virtual store
│
├── components/
│   ├── Layout.tsx            # Sidebar + content shell
│   ├── DailyLoginModal.tsx   # Daily reward check-in
│   ├── ProgressionMap.tsx    # Interactive SVG roadmap
│   ├── BossFightHUD.tsx      # Gamified challenge overlay
│   └── ui/                   # Button, GlassCard primitives
│
├── services/
│   ├── aiService.ts          # All Gemini AI calls
│   ├── gamificationService.ts # XP, gems, streak logic
│   ├── codeRunnerService.ts  # Backend API integration
│   └── botOpponent.ts        # PvP bot simulation
│
├── backend/
│   ├── main.py               # FastAPI app
│   └── requirements.txt      # Python deps
│
└── public/
    ├── logo.png
    ├── dashboard-character.png
    ├── quests-character.png
    ├── pvp-character.png
    ├── coding-character.png
    └── battlepass-character.png
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)
- An [onlinecompiler.io](https://onlinecompiler.io) API key

### 1. Clone the repo
```bash
git clone https://github.com/Srv99x/project.git
cd project
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_BACKEND_URL=http://localhost:8000
```

### 4. Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 5. Set up backend environment
Create a `.env` in the `backend/` folder:
```env
ONLINECOMPILER_API_KEY=your_key
ONLINECOMPILER_API_URL=your_url
FRONTEND_ORIGINS=http://localhost:5173
CODE_EXEC_TIMEOUT=15
```

### 6. Run the backend
```bash
cd backend
python main.py
# Runs on http://localhost:8000
```

### 7. Run the frontend
```bash
# In project root
npm run dev
# Runs on http://localhost:5173
```

---

## 🌐 Deployment

### Frontend → Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```
Add `VITE_GEMINI_API_KEY` and `VITE_BACKEND_URL` in Vercel project settings → Environment Variables.

Make sure `vercel.json` contains:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Backend → Hugging Face Spaces (Docker)
1. Create a new Space on [huggingface.co](https://huggingface.co) with Docker SDK
2. Add `backend/Dockerfile`:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 7860
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
```
3. Push backend folder to the Space repo
4. Add secrets in Space Settings → Repository Secrets

---

## 🔌 API Reference

**Base URL:** `http://localhost:8000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/code/run` | Execute Python/JS/TS code |
| `POST` | `/api/newsletter/subscribe` | Subscribe to updates |

**Code Runner Request:**
```json
{
  "language": "python",
  "code": "print('Hello, Operative')",
  "stdin": ""
}
```

**Code Runner Response:**
```json
{
  "stdout": "Hello, Operative\n",
  "stderr": "",
  "exit_code": 0
}
```

---

## 🎨 Design System

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0e0e14` | Page base |
| Surface | `#16161e` | Cards, panels |
| Border | `#2a2a3a` | Dividers |
| Gold | `#f5c842` | CTAs, XP, accents |
| Purple | `#9b8aff` | Premium, secondary |
| Teal | `#2dd4bf` | Info, progress |
| Success | `#4ade80` | Completion |
| Error | `#f87171` | Validation |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Credits & References

| Tool | Usage |
|------|-------|
| [Google Gemini](https://deepmind.google/technologies/gemini/) | AI tutoring & code assistance |
| [onlinecompiler.io](https://onlinecompiler.io) | Secure code execution |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Codedex.io](https://www.codedex.io) | Design inspiration |
| [Lucide Icons](https://lucide.dev) | Icon library |
| [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) | Pixel font |

---

<div align="center">

**Built with ⚡ by Sourav Chakraborty**

*Assam Down Town University — KodeMaster AI Hackathon 2026*

[![GitHub](https://img.shields.io/badge/GitHub-Srv99x-f5c842?style=for-the-badge&logo=github&logoColor=black)](https://github.com/Srv99x)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-srv99x-9b8aff?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/srv99x)

</div>
