# SMART STUDY NOTES GENERATOR

> ### **TextifyAI** — *"Turn long text into clear, concise insights."*

**Live Website:** https://textify-ai.onrender.com/

---

## 🎯 1. Aim

To develop a Python-based web application that accepts a paragraph of study text from the user and automatically generates a short abstractive summary and a set of key points using a pre-trained Generative AI model.

---

## 📌 2. Objectives

1. **Summarize lengthy study material** into concise and readable paragraphs.
2. **Generate 3–5 key points** that represent the important information from the input.
3. **Display the original word count and summary word count.**
4. **Calculate the percentage of text reduction.**
5. **Provide a modern and responsive AI-themed user interface.**
6. **Deploy the application live** on a public hosting platform for demonstration and evaluation.

---

## 🚀 3. Features

* **Abstractive Text Summarization:** Uses Hugging Face's `facebook/bart-large-cnn` model.
* **Key Point Generation:** Identifies important sentences from the input text.
* **Word Count:** Displays the number of words in the original text and generated summary.
* **Text Reduction:** Calculates the percentage of reduction between the original text and summary.
* **Preset Quick-Test Buttons:** Provides sample text for Artificial Intelligence, Climate Change, and Online Education.
* **Live Text Counters:** Displays text statistics while entering content.
* **Text-to-Speech:** Allows the generated summary to be read aloud using browser speech synthesis.
* **Copy to Clipboard:** Allows users to copy the generated summary and key points.
* **Responsive Interface:** Designed to work on desktop and mobile screens.
* **Error Handling:** Provides messages for invalid or insufficient input.
* **Live Deployment:** Hosted publicly using Render.

---

## 🛠️ 4. Technologies Used

| Layer                    | Technology                | Purpose                          |
| :----------------------- | :------------------------ | :------------------------------- |
| **Programming Language** | Python 3.11               | Application logic and processing |
| **Web Framework**        | Flask                     | Backend web application          |
| **AI / NLP**             | Hugging Face Transformers | Text summarization               |
| **AI Model**             | `facebook/bart-large-cnn` | Abstractive summarization        |
| **Frontend**             | HTML5, CSS3, JavaScript   | User interface and interaction   |
| **Production Server**    | Gunicorn                  | Production WSGI server           |
| **Hosting**              | Render                    | Live deployment                  |

---

## 🧠 5. AI Model: `facebook/bart-large-cnn`

TextifyAI uses the `facebook/bart-large-cnn` model from Hugging Face Transformers.

BART stands for **Bidirectional and Auto-Regressive Transformers**. It is an encoder-decoder Transformer architecture designed for natural language generation tasks.

The model is suitable for summarization because it can understand the context of the input text and generate a shorter version containing the important information.

The model has been fine-tuned for summarization using the CNN/DailyMail dataset.

---

## 🔄 6. How the Application Works

```text
User Enters Study Paragraph
          ↓
Input Validation
          ↓
Flask Backend
          ↓
Hugging Face Transformers Pipeline
          ↓
facebook/bart-large-cnn
          ↓
Generated Summary
          ↓
Key Point Extraction
          ↓
Calculate Word Counts
          ↓
Calculate Text Reduction %
          ↓
Display Results
```

### Text Reduction Formula

```text
Reduction Percentage =
((Original Words - Summary Words) / Original Words) × 100
```

For example, if the original text contains 94 words and the summary contains 45 words:

```text
((94 - 45) / 94) × 100 = 52.13%
```

---

## 📂 7. Project Structure

```text
TextifyAI/
├── app.py
├── requirements.txt
├── Procfile
├── render.yaml
├── vercel.json
├── .gitignore
├── .env.example
├── generate_ppt.py
├── TextifyAI_Presentation.pptx
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

### Important Files

* **`app.py`** — Main Flask application and AI processing.
* **`requirements.txt`** — Python dependencies.
* **`templates/index.html`** — Main TextifyAI web interface.
* **`static/css/style.css`** — Website styling and animations.
* **`static/js/script.js`** — Frontend interaction and API handling.
* **`generate_ppt.py`** — Script used to generate the PowerPoint presentation.
* **`TextifyAI_Presentation.pptx`** — Project presentation.
* **`Procfile`** — Production server configuration for Render.
* **`render.yaml`** — Render deployment configuration.
* **`README.md`** — Project documentation.

---

## ⚙️ 8. Installation & Local Setup

### 1. Clone or Open the Repository

```bash
git clone https://github.com/Abhinanthlal/TextifyAI.git
cd TextifyAI
```

### 2. Create a Virtual Environment

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
python app.py
```

Open the application in a browser:

```text
http://127.0.0.1:5000
```

---

## 🧪 9. Test Cases and Recorded Results

TextifyAI was tested using three different study-related paragraphs as required for the mini project.

---

### 🔹 Test Case 1: Artificial Intelligence

#### Input

> Artificial intelligence is rapidly transforming society across multiple domains, including healthcare, finance, transportation, and education. Machine learning algorithms can process vast amounts of data to detect medical anomalies earlier, automate routine financial audits, optimize traffic flow, and personalize classroom learning. However, the widespread adoption of AI also introduces critical ethical and societal challenges. Issues such as algorithmic bias, privacy violations, job displacement, and the lack of decision transparency must be addressed with thoughtful regulation. Responsible governance and collaborative human oversight remain paramount to ensuring that AI systems augment human potential rather than undermine it.

#### Results

* **Original Word Count:** 94 words
* **Summary Word Count:** 45 words
* **Text Reduction:** **52.13%**

#### Generated Summary

> Artificial intelligence is rapidly transforming society across domains like healthcare, finance, and education by processing vast datasets to detect anomalies and automate tasks. However, widespread adoption introduces critical ethical challenges including algorithmic bias, privacy violations, and job displacement, making responsible governance and human oversight essential.

#### Key Points

1. Artificial intelligence is rapidly transforming society across multiple domains.
2. Machine learning can process large amounts of data to automate tasks and identify patterns.
3. AI introduces ethical concerns such as algorithmic bias, privacy violations, and job displacement.
4. Responsible governance and human oversight are important for safe AI adoption.

---

### 🔹 Test Case 2: Climate Change

#### Input

> Climate change presents an unprecedented global threat to planetary ecosystems, economic stability, and human livelihoods. The accelerating emission of greenhouse gases from industrial manufacturing, deforestation, and fossil fuel consumption has caused global temperatures to rise, leading to more frequent and severe heatwaves, droughts, and extreme weather events. Melting polar ice sheets and rising sea levels threaten coastal communities and fragile marine biodiversity worldwide. Mitigating these catastrophic impacts requires immediate, coordinated international cooperation, aggressive transitions to renewable energy sources, sustainable agricultural practices, and widespread ecological conservation initiatives.

#### Results

* **Original Word Count:** 86 words
* **Summary Word Count:** 45 words
* **Text Reduction:** **47.67%**

#### Generated Summary

> Climate change poses an unprecedented threat to planetary ecosystems and human livelihoods due to rising greenhouse gas emissions from fossil fuels and deforestation. The resulting severe weather events and rising sea levels threaten coastal communities, demanding coordinated international cooperation and rapid transition to renewable energy.

#### Key Points

1. Climate change threatens ecosystems, economic stability, and human livelihoods.
2. Greenhouse gas emissions contribute to rising global temperatures.
3. Melting ice sheets and rising sea levels threaten coastal communities and biodiversity.
4. International cooperation and renewable energy transitions are required to reduce impacts.

---

### 🔹 Test Case 3: Online Education

#### Input

> Online education has experienced a historic expansion over the past decade, reshaping the landscape of modern pedagogy and professional skill development. Digital learning platforms, virtual classrooms, and interactive video tutorials offer students unprecedented flexibility to study asynchronously from any location in the world. This democratizes access to prestigious courses, diverse subjects, and specialized certifications that were previously inaccessible to many learners. Nevertheless, digital learning presents significant challenges, such as feelings of social isolation, reduced peer-to-peer engagement, and unequal access to high-speed internet. A balanced hybrid approach that combines digital resources with collaborative mentorship appears to offer the most promising path forward.

#### Results

* **Original Word Count:** 101 words
* **Summary Word Count:** 45 words
* **Text Reduction:** **55.45%**

#### Generated Summary

> Online education has expanded rapidly over the past decade, offering asynchronous flexibility and democratizing access to quality coursework worldwide. However, it also introduces obstacles such as student isolation and digital disparity, suggesting that a hybrid educational model with collaborative mentorship provides the most balanced solution.

#### Key Points

1. Online education has expanded significantly over the past decade.
2. Digital platforms provide flexibility and wider access to education.
3. Online learning can create challenges such as isolation and unequal internet access.
4. A hybrid model combining digital resources and collaborative mentorship can provide a balanced approach.

---

## 🔍 10. Observation on Relevance & Coherence

The following observations were made during testing:

1. **Relevance:** The generated summaries captured the main topic and important ideas from the input paragraphs.
2. **Coherence:** The summaries were grammatically readable and logically connected.
3. **Information Preservation:** Major concepts and important arguments were retained in the generated summaries.
4. **Conciseness:** The application reduced the length of the input while preserving the central meaning.
5. **Consistency:** All three test cases produced summaries with approximately 45 words.
6. **Limitations:** Very long or highly complex input may require additional processing or chunking because Transformer summarization models have input-length limitations.

---

## 🌐 11. Live Deployment

TextifyAI is deployed using **Render**.

### Live Website

**https://textify-ai.onrender.com/**

### Deployment Process

The project is maintained using Git and GitHub.

```text
VS Code
   ↓
Git Add
   ↓
Git Commit
   ↓
Git Push
   ↓
GitHub Repository
   ↓
Render Deployment
   ↓
Live TextifyAI Website
```

### GitHub Repository

```text
https://github.com/Abhinanthlal/TextifyAI
```

### Render Configuration

* **Platform:** Render
* **Runtime:** Python
* **Build Command:**

```bash
pip install -r requirements.txt
```

* **Start Command:**

```bash
gunicorn app:app
```

---

## 💻 12. 5-Slide PowerPoint Presentation

### SLIDE 1 — TITLE

* **Title:** Smart Study Notes Generator
* **Website / Product:** TextifyAI
* **Tagline:** *"Turn long text into clear, concise insights."*
* **Student Name:** Abhinanth Lal
* **Department:** MCA Generative AI
* **Institution:** SRM Institute of Science and Technology

### SLIDE 2 — AIM & OBJECTIVES

* Develop a Python web application for generating study summaries.
* Generate short summaries from lengthy paragraphs.
* Generate important key points.
* Display original and summary word counts.
* Calculate text reduction percentage.
* Provide a simple and responsive user interface.

### SLIDE 3 — TECHNOLOGY & WORKING

**Technologies:**

* Python
* Flask
* Hugging Face Transformers
* `facebook/bart-large-cnn`
* HTML5
* CSS3
* JavaScript
* Gunicorn
* Render

**Working:**

```text
User Input
   ↓
Flask Backend
   ↓
BART Model
   ↓
Summary + Key Points
   ↓
Word Count & Reduction
   ↓
Results
```

### SLIDE 4 — IMPLEMENTATION & RESULTS

| Test Case               |  Original |  Summary | Reduction |
| :---------------------- | --------: | -------: | --------: |
| Artificial Intelligence |  94 words | 45 words |    52.13% |
| Climate Change          |  86 words | 45 words |    47.67% |
| Online Education        | 101 words | 45 words |    55.45% |

**Observation:** The generated summaries were relevant, concise, and grammatically coherent across the three test cases.

### SLIDE 5 — CONCLUSION & LIVE LINK

**Conclusion:**

TextifyAI successfully provides an automated solution for converting lengthy study material into concise summaries and useful key points using a pre-trained Generative AI model.

**Future Enhancements:**

* PDF and DOCX file upload
* Multi-language summarization
* Export summaries to PDF
* Improved key-point extraction
* Additional AI models

**Live Website:**

https://textify-ai.onrender.com/

---

## 🎓 13. College Viva & Oral Defense Q&A

### Q1. What is the difference between extractive and abstractive summarization?

**Answer:** Extractive summarization selects important sentences or phrases directly from the original text. Abstractive summarization generates new sentences that represent the meaning of the original text.

### Q2. Why did you choose `facebook/bart-large-cnn`?

**Answer:** BART is an encoder-decoder Transformer model that is suitable for text generation and summarization. The `facebook/bart-large-cnn` model is specifically fine-tuned for summarization tasks.

### Q3. How is the text
