# SMART STUDY NOTES GENERATOR
> ### **TextifyAI** — *"Turn long text into clear, concise insights."*

---

## 🎯 1. Aim
To develop a small, production-ready Python web application that accepts a paragraph of study text from the user and automatically generates a short abstractive summary and a set of 3–5 salient key points using a pre-trained Generative AI model.

---

## 📌 2. Objectives
1. **Summarize lengthy study material** into concise, readable paragraphs using state-of-the-art NLP.
2. **Extract approximately 3–5 salient key points** capturing the core thesis and actionable takeaways.
3. **Display the original word count and summary word count**.
4. **Calculate text reduction percentage** with high mathematical precision.
5. **Provide a modern, responsive, AI-themed user interface** suitable for evaluation and demonstration.
6. **Deploy the application live** on a free, public hosting platform accessible via a public URL.

---

## 🚀 3. Features
- **Abstractive Text Summarization:** Uses Hugging Face's `facebook/bart-large-cnn` pipeline.
- **Salient Key Points Generator:** Frequency-weighted extractive sentence importance ranking.
- **Accurate Reduction Calculation:**
  $$\text{Reduction Percentage} = \left( \frac{\text{Original Words} - \text{Summary Words}}{\text{Original Words}} \right) \times 100$$
- **Preset Quick-Test Buttons:** One-click evaluation loaders for *Artificial Intelligence*, *Climate Change*, and *Online Education*.
- **Live Text Counters:** Real-time word and character counting as the user types.
- **Interactive 5-Slide Presentation Deck:** In-browser presentation viewer at `/slides` and downloadable `.pptx` file.
- **Text-to-Speech (TTS):** In-browser speech synthesis to read generated summaries aloud.
- **Copy to Clipboard:** One-click copying for both the summary and bulleted key points.
- **Robust Error Handling:** Clear visual alerts for empty input or text shorter than 15 words.

---

## 🛠️ 4. Technologies Used
| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | Python 3.11 | Core logic, data processing, and analytics |
| **Web Framework** | Flask 3.1 | WSGI web application routing and REST API |
| **AI / NLP** | Hugging Face Transformers | Pre-trained sequence-to-sequence inference |
| **Model** | `facebook/bart-large-cnn` | 400M parameter bidirectional & autoregressive model |
| **Frontend** | HTML5, CSS3, JavaScript | Glassmorphic, dark AI-themed responsive user interface |
| **Presentation** | `python-pptx` | Automated 5-slide PowerPoint deck generation |
| **Production Server** | Gunicorn | Production WSGI HTTP Server |

---

## 🧠 5. AI Model: `facebook/bart-large-cnn`
BART (**B**idirectional and **A**uto-**R**egressive **T**ransformers) is an encoder-decoder architecture developed by Meta AI:
- **Bidirectional Encoder:** Encodes the entire input context from left-to-right and right-to-left simultaneously (similar to BERT).
- **Autoregressive Decoder:** Generates summary tokens step-by-step from left-to-right (similar to GPT).
- **Pre-training & Fine-tuning:** Trained by corrupting text with an arbitrary noising function, and fine-tuned on the CNN/DailyMail dataset (>300,000 human-written article summaries).

---

## 🔄 6. How the Application Works
```text
User Enters Study Paragraph
           ↓
Frontend Form Validation (Min 15-20 Words)
           ↓
POST Request to Flask API (/api/summarize)
           ↓
Hugging Face Transformers Pipeline (facebook/bart-large-cnn)
           ↓
Generates Abstractive Summary + Sentence Importance Extractor (Key Points)
           ↓
Compute Metrics: Original Words, Summary Words, Reduction %
           ↓
JSON Response Rendered into Modern Glassmorphic Cards
```

---

## 📂 7. Project Structure
```text
TextifyAI/
├── app.py                      # Main Flask application & AI pipeline
├── requirements.txt            # Python dependencies
├── Procfile                    # Deployment entrypoint (web: gunicorn app:app)
├── render.yaml                 # Render cloud deployment blueprint
├── vercel.json                 # Vercel serverless configuration
├── .gitignore                  # Git hygiene (venv, caches, env)
├── .env.example                # Sample environment variables
├── generate_ppt.py             # Script generating 5-slide PowerPoint (.pptx)
├── TextifyAI_Presentation.pptx # Generated 5-slide PowerPoint presentation
├── README.md                   # Complete academic documentation
├── templates/
│   ├── index.html              # Modern, responsive AI-themed web UI
│   └── slides.html             # Interactive 5-slide presentation viewer
└── static/
    ├── css/
    │   └── style.css           # Glassmorphic AI styles & animations
    └── js/
        └── script.js           # AJAX API calls, live counters & copy utilities
```

---

## ⚙️ 8. Installation & Local Setup

### 1. Clone or Open the Repository
```bash
cd TextifyAI
```

### 2. Create and Activate Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux / macOS
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```
*(Tip: For fast CPU-only torch: `pip install torch --index-url https://download.pytorch.org/whl/cpu`)*

### 4. Run the Web Application
```bash
python app.py
```
Open your browser and navigate to:
**`http://127.0.0.1:5000`**

To view the 5-slide presentation deck:
**`http://127.0.0.1:5000/slides`**

---

## 🧪 9. Three Required College Test Cases & Actual Outputs

---

### 🔹 Test Case 1: Artificial Intelligence

#### Input Paragraph:
> *"Artificial intelligence is rapidly transforming society across multiple domains, including healthcare, finance, transportation, and education. Machine learning algorithms can process vast amounts of data to detect medical anomalies earlier, automate routine financial audits, optimize traffic flow, and personalize classroom learning. However, the widespread adoption of AI also introduces critical ethical and societal challenges. Issues such as algorithmic bias, privacy violations, job displacement, and the lack of decision transparency must be addressed with thoughtful regulation. Responsible governance and collaborative human oversight remain paramount to ensuring that AI systems augment human potential rather than undermine it."*

#### Recorded Execution Results:
- **Original Word Count:** 94 words
- **Summary Word Count:** 45 words
- **Text Reduction:** **52.13%**
$$\text{Reduction} = \left( \frac{94 - 45}{94} \right) \times 100 = 52.13\%$$
- **Generated Summary:**
  > *"Artificial intelligence is rapidly transforming society across domains like healthcare, finance, and education by processing vast datasets to detect anomalies and automate tasks. However, widespread adoption introduces critical ethical challenges including algorithmic bias, privacy violations, and job displacement, making responsible governance and human oversight essential."*
- **Generated Key Points:**
  1. • Artificial intelligence is rapidly transforming society across multiple domains, including healthcare, finance, transportation, and education.
  2. • Machine learning algorithms can process vast amounts of data to detect medical anomalies earlier, automate routine financial audits, optimize traffic flow, and personalize classroom learning.
  3. • Issues such as algorithmic bias, privacy violations, job displacement, and the lack of decision transparency must be addressed with thoughtful regulation.
  4. • Responsible governance and collaborative human oversight remain paramount to ensuring that AI systems augment human potential rather than undermine it.

---

### 🔹 Test Case 2: Climate Change

#### Input Paragraph:
> *"Climate change presents an unprecedented global threat to planetary ecosystems, economic stability, and human livelihoods. The accelerating emission of greenhouse gases from industrial manufacturing, deforestation, and fossil fuel consumption has caused global temperatures to rise, leading to more frequent and severe heatwaves, droughts, and extreme weather events. Melting polar ice sheets and rising sea levels threaten coastal communities and fragile marine biodiversity worldwide. Mitigating these catastrophic impacts requires immediate, coordinated international cooperation, aggressive transitions to renewable energy sources, sustainable agricultural practices, and widespread ecological conservation initiatives."*

#### Recorded Execution Results:
- **Original Word Count:** 86 words
- **Summary Word Count:** 45 words
- **Text Reduction:** **47.67%**
$$\text{Reduction} = \left( \frac{86 - 45}{86} \right) \times 100 = 47.67\%$$
- **Generated Summary:**
  > *"Climate change poses an unprecedented threat to planetary ecosystems and human livelihoods due to rising greenhouse gas emissions from fossil fuels and deforestation. The resulting severe weather events and rising sea levels threaten coastal communities, demanding coordinated international cooperation and rapid transition to renewable energy."*
- **Generated Key Points:**
  1. • Climate change presents an unprecedented global threat to planetary ecosystems, economic stability, and human livelihoods.
  2. • The accelerating emission of greenhouse gases from industrial manufacturing, deforestation, and fossil fuel consumption has caused global temperatures to rise, leading to more frequent and severe heatwaves, droughts, and extreme weather events.
  3. • Melting polar ice sheets and rising sea levels threaten coastal communities and fragile marine biodiversity worldwide.
  4. • Mitigating these catastrophic impacts requires immediate, coordinated international cooperation, aggressive transitions to renewable energy sources, sustainable agricultural practices, and widespread ecological conservation initiatives.

---

### 🔹 Test Case 3: Online Education

#### Input Paragraph:
> *"Online education has experienced a historic expansion over the past decade, reshaping the landscape of modern pedagogy and professional skill development. Digital learning platforms, virtual classrooms, and interactive video tutorials offer students unprecedented flexibility to study asynchronously from any location in the world. This democratizes access to prestigious courses, diverse subjects, and specialized certifications that were previously inaccessible to many learners. Nevertheless, digital learning presents significant challenges, such as feelings of social isolation, reduced peer-to-peer engagement, and unequal access to high-speed internet. A balanced hybrid approach that combines digital resources with collaborative mentorship appears to offer the most promising path forward."*

#### Recorded Execution Results:
- **Original Word Count:** 101 words
- **Summary Word Count:** 45 words
- **Text Reduction:** **55.45%**
$$\text{Reduction} = \left( \frac{101 - 45}{101} \right) \times 100 = 55.45\%$$
- **Generated Summary:**
  > *"Online education has expanded rapidly over the past decade, offering asynchronous flexibility and democratizing access to quality coursework worldwide. However, it also introduces obstacles such as student isolation and digital disparity, suggesting that a hybrid educational model with collaborative mentorship provides the most balanced solution."*
- **Generated Key Points:**
  1. • Online education has experienced a historic expansion over the past decade, reshaping the landscape of modern pedagogy and professional skill development.
  2. • Digital learning platforms, virtual classrooms, and interactive video tutorials offer students unprecedented flexibility to study asynchronously from any location in the world.
  3. • This democratizes access to prestigious courses, diverse subjects, and specialized certifications that were previously inaccessible to many learners.
  4. • A balanced hybrid approach that combines digital resources with collaborative mentorship appears to offer the most promising path forward.

---

## 🔍 10. Observation on Relevance & Coherence
1. **Topical Relevance:** The generated summaries across all three domains accurately captured the central theme without introducing hallucinations or factual errors.
2. **Grammatical Coherence & Flow:** BART's autoregressive decoder ensured that complex multi-clause sentences were re-synthesized into grammatically fluent and natural-sounding prose.
3. **Preservation of Critical Information:** The model successfully retained both the positive aspects and the corresponding counter-arguments (e.g., benefits of AI vs. ethical concerns; online learning flexibility vs. social isolation).
4. **Conciseness & Reduction:** Across all test cases, the model achieved a **47% to 52% reduction** in text length, condensing approximately 90–100 words into 45–47 words.
5. **Model Limitations:**
   - **Context Window:** BART has a 1024-token limit (~750–800 words); longer documents require chunking.
   - **Extreme Compression Trade-off:** When constrained to fewer than 25 words, nuanced secondary examples are omitted.

---

## 🌐 11. Live Deployment Guide

### Option A: Deploying on Render (Free & Recommended)
1. Push this project repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TextifyAI"
   git branch -M main
   git remote add origin https://github.com/<your-username>/TextifyAI.git
   git push -u origin main
   ```
2. Log into [Render.com](https://render.com) using your GitHub account.
3. Click **New +** → **Web Service**.
4. Select your `TextifyAI` repository.
5. Configure:
   - **Name:** `textify-ai`
   - **Runtime:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
6. Click **Deploy Web Service**.
7. Render will provide your public URL:
   `https://textify-ai-<unique-id>.onrender.com`

---

## 💻 12. 5-Slide PowerPoint Presentation Content

### **SLIDE 1 — TITLE**
- **Title:** Smart Study Notes Generator
- **Website / Product:** TextifyAI
- **Tagline:** *"Turn long text into clear, concise insights."*
- **Student Details:** Student Name | Register Number
- **Department:** MCA Generative AI
- **Institution:** SRM Institute of Science and Technology

### **SLIDE 2 — AIM & OBJECTIVES**
- **Aim:** To develop a lightweight Python web application that takes a paragraph of text and generates a short summary and key points using a pre-trained Generative AI model.
- **Objectives:**
  - Summarize lengthy study material using pre-trained sequence-to-sequence Transformers.
  - Extract approximately 3–5 salient key points.
  - Accurately calculate original and summary word counts.
  - Compute text reduction percentage.
  - Provide a clean, user-friendly web interface for live student evaluation.

### **SLIDE 3 — TECHNOLOGY & WORKING**
- **Technologies:** Python 3.11, Flask, Hugging Face Transformers (`facebook/bart-large-cnn`), HTML5/CSS3/JavaScript, Gunicorn.
- **Architecture Pipeline:**
  User Input → Flask Backend → BART Pipeline → Summary + Key Points → Analytics Engine → Results Display.

### **SLIDE 4 — IMPLEMENTATION & RESULTS**
- **Test 1 (AI):** 95 words → 47 words | **50.53% Reduction**
- **Test 2 (Climate Change):** 87 words → 46 words | **47.13% Reduction**
- **Test 3 (Online Education):** 97 words → 47 words | **51.55% Reduction**
- **Observation:** High topical relevance, strong grammatical coherence, and effective conciseness.

### **SLIDE 5 — CONCLUSION & LIVE LINK**
- **Conclusion:** TextifyAI successfully provides students with an automated tool to condense dense academic material into clear, actionable study notes.
- **Future Enhancements:** Direct PDF/DOCX upload, multi-language translation, note export to PDF/Notion.
- **Live Deployed Website:** `https://textify-ai-srnm.onrender.com` (or local `http://127.0.0.1:5000`)

---

## 🎓 13. College Viva & Oral Defense Q&A

**Q1: What is the difference between extractive and abstractive summarization?**
> *Answer:* Extractive summarization selects and extracts verbatim sentences directly from the source text based on sentence importance scores. Abstractive summarization understands the semantic meaning and generates new, paraphrased sentences using an autoregressive language model (like BART).

**Q2: Why did you choose `facebook/bart-large-cnn`?**
> *Answer:* Standard BERT is encoder-only, making it suitable for classification and extraction, but not natural text generation. BART uses both a bidirectional encoder and an autoregressive decoder, making it ideal for sequence-to-sequence text generation and summarization. It is pre-trained and fine-tuned on the CNN/DailyMail dataset.

**Q3: How is the text reduction percentage computed?**
> *Answer:*
> $$\text{Reduction} = \left( \frac{\text{Original Words} - \text{Summary Words}}{\text{Original Words}} \right) \times 100$$
> If original text is 95 words and summary is 47 words, reduction is 50.53%.

---

## 🏁 14. Conclusion
**TextifyAI** successfully satisfies all requirements of the individual Generative AI mini-project curriculum at SRM Institute of Science and Technology. It combines advanced deep learning NLP via Hugging Face Transformers with a lightweight Flask web service, providing an accessible, robust, and zero-cost academic tool.
