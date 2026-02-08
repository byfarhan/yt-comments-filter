# 🌍 Universal YouTube Feedback Filter
**Engineering high-signal comment streams using structural heuristics.**

Developed by: **Farhan Muhammed** Connect: [@byfarhan.io](https://instagram.com/byfarhan.io)

---

## 🚀 The Technology
This project is a language-agnostic filtering engine designed to extract genuine human feedback from YouTube comment threads. Unlike traditional filters that rely on heavy NLP or translation APIs, this tool uses **Structural Heuristics** to identify "intent" and "effort" in text across any Unicode script.

### Key Features:
* **Pattern-Based Filtering:** Detects and eliminates bot-like character repetition and "word salad."
* **Density Analysis:** Filters out low-effort emoji spam based on string length and character entropy.
* **Stateless & Private:** Runs entirely on the client-side. Your API key and video data never leave your browser.
* **Regex URL Parser:** Robust extraction of Video IDs from various YouTube URL formats (Desktop, Mobile, and Embeds).

---

## 📦 Delivery Formats
This repository provides the technology in two ways:
1. **The Engine (`app.js`):** A standalone JavaScript logic file ready to be integrated into any web project.
2. **The Utility (`index.html`):** A portable web interface for immediate use by creators.

---

## 🛠 Setup & Usage
1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/byfarhan/yt-comments-filter.git](https://github.com/byfarhan/yt-comments-filter.git)
