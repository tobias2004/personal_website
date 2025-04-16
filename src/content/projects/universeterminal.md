---
name: Universe Terminal
summary: Explore the universe like it is a file system
githublink: https://github.com/tobias2004
techstack: ["FastAPI", "Next.js", "Google Gemini API"]
image: /universeterminal.png
---

---

## Check It Out!
🌐 [On Github](www.github.com/tobias2004)

🌐 [www.universeterminal.com](https://www.universeterminal.com)

---

## About

**Universe Terminal (uTerm)** is a terminal-based cosmic explorer that lets users navigate a fictional universe represented as a dynamic, AI-powered file system.

Inspired by the idea that the cosmos could be expressed like a filesystem — from galaxies to atoms — uTerm provides a sleek command-line interface for discovering scientific facts and creative narratives using generative AI.

---

## My Contributions

I led development of the **backend architecture** using **FastAPI**, focusing on:

- Structuring the API to support hundreds of parallel universes, each built on a custom file tree.
- Designing endpoints to process terminal commands and return dynamic filesystem content.
- Integrating the **Google Gemini API** to generate context-aware directories and files in real time.
- Implementing key **security layers**, including:
  - API key validation
  - CORS middleware
  - Rate limiting via `slowapi`
  - Auto-cleanup of inactive universes after 5 minutes

We deployed the backend with **Uvicorn** and **Render**, and connected it to a frontend hosted on **Vercel**.

---

## Tech Highlights

- `FastAPI` for API routing and logic
- `Next.js` for the interactive terminal interface
- `Google Gemini` for generative, context-aware content
- `TailwindCSS` for frontend styling
- `Git` + GitHub for collaboration and version control

