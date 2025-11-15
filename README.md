<!--
# Hi there 👋

**JohnScarrow/JohnScarrow** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->


# Hi — I'm John Scarrow 👋

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Welcome — this repository is the special profile README for my GitHub and serves as a lightweight portfolio landing page. Below you'll find a featured project, highlights of my work, tech stack, and contact links.

---

## Featured Project — Battleship-ML

A modern take on the classic Battleship game with machine learning components. Battleship-ML demonstrates applied ML in a game environment, a configurable CLI, and an experimental web demo via WebAssembly.

- **Highlights:** AI opponent (reinforcement learning / heuristic hybrids), modular game engine, training pipeline, and an optional browser demo (WASM).
- **Tech:** C++, Python (training), WebAssembly, PyTorch/TensorFlow (or your preferred ML lib), build tooling (CMake/emscripten).

Screenshot / Demo

![battleship-screenshot](docs/images/battleship-placeholder.svg)

Quick start (example)

```bash
# Clone this repo (if Battleship code is in a subfolder, adjust accordingly)
git clone https://github.com/JohnScarrow/JohnScarrow.git
cd JohnScarrow

# If the Battleship project is in `battleship-ml/`:
cd battleship-ml
# Build/run (example; replace with your project's build commands)
mkdir -p build && cd build
cmake .. && make
./battleship

# Or run the training script (example)
python3 train.py --config configs/train.yaml
```

Notes

- Add your compiled WASM demo to `docs/` or a `gh-pages` branch to host a playable demo.
- Replace the screenshot at `docs/images/battleship-placeholder.png` with an actual image or GIF of gameplay.

Play the demo

> Note: GitHub sanitizes `README.md` HTML and disallows embedding active content like `iframe`. Because of this you cannot directly play the demo inside the README itself. Use the links below to open the demo or visit a Pages-hosted iframe page.

- Direct demo URL: https://johnscarrow.github.io/battleship-ml/
- Open GitHub Pages iframe page: `https://<your-username>.github.io/<repo>/` after enabling Pages (I added a `docs/index.html` that embeds the demo; see below).

You can replace `<your-username>` and `<repo>` with your GitHub username and this repository name if you want the iframe page to live under this repo (for example `https://johnscarrow.github.io/JohnScarrow/`).

---

## Other Projects

- **Responsible Consumption** — React + Express. A journaling app for mindful consumption. Source available in separate repo(s).
- **PlaylistFor.ME** — JavaScript. Playlist generator using external music APIs.

---

## About Me

- 🎓 First-year Computer Science student at North Idaho College
- 💻 Full‑stack development, AI integration, and systems engineering
- 🛠 Projects: game engines, ML experiments, autonomous systems, and cloud tooling

---

## Tech & Tools

- **Languages:** C++, Python, JavaScript
- **Frameworks / Tools:** React, Express, PyTorch / TensorFlow, CMake, Emscripten
- **Cloud / DevOps:** AWS, GitHub, Docker (learning)

---

## Contact & Links

- **GitHub:** `https://github.com/JohnScarrow`
- **LinkedIn:** (add your LinkedIn URL)
- **Email:** (add your preferred contact)

If you'd like, I can:

- add live demo hosting via GitHub Pages or `gh-pages` branch
- create a minimal `docs/` site for the WASM demo
- add screenshots and a short walkthrough for Battleship-ML

---

⭐ Thanks for stopping by — want me to set up GitHub Pages next? (I can scaffold a `docs/` site and add a demo.)
