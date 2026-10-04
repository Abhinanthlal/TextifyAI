/*
  TextifyAI - Interactive Frontend Controller
  Handles live counters, async AJAX fetch to /api/summarize, preset loaders,
  clipboard copy, and speech synthesis.
*/

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const textInput = document.getElementById('text-input');
  const wordCountBadge = document.getElementById('word-count-badge');
  const charCountBadge = document.getElementById('char-count-badge');
  const btnGenerate = document.getElementById('btn-generate');
  const btnClear = document.getElementById('btn-clear');
  const btnPaste = document.getElementById('btn-paste');
  const alertBox = document.getElementById('alert-box');
  const alertMessage = document.getElementById('alert-message');

  const emptyState = document.getElementById('empty-state');
  const resultsContainer = document.getElementById('results-container');
  const statOrigWords = document.getElementById('stat-orig-words');
  const statSummWords = document.getElementById('stat-summ-words');
  const statReduction = document.getElementById('stat-reduction');
  const reductionBar = document.getElementById('reduction-bar');
  const summaryText = document.getElementById('summary-text');
  const keyPointsList = document.getElementById('key-points-list');

  const btnCopySummary = document.getElementById('btn-copy-summary');
  const btnCopyPoints = document.getElementById('btn-copy-points');
  const btnTts = document.getElementById('btn-tts');

  // Test Presets
  const btnSampleAi = document.getElementById('btn-sample-ai');
  const btnSampleClimate = document.getElementById('btn-sample-climate');
  const btnSampleEducation = document.getElementById('btn-sample-education');

  const SAMPLES = {
    ai: "Artificial intelligence is rapidly transforming society across multiple domains, including healthcare, finance, transportation, and education. Machine learning algorithms can process vast amounts of data to detect medical anomalies earlier, automate routine financial audits, optimize traffic flow, and personalize classroom learning. However, the widespread adoption of AI also introduces critical ethical and societal challenges. Issues such as algorithmic bias, privacy violations, job displacement, and the lack of decision transparency must be addressed with thoughtful regulation. Responsible governance and collaborative human oversight remain paramount to ensuring that AI systems augment human potential rather than undermine it.",
    climate: "Climate change presents an unprecedented global threat to planetary ecosystems, economic stability, and human livelihoods. The accelerating emission of greenhouse gases from industrial manufacturing, deforestation, and fossil fuel consumption has caused global temperatures to rise, leading to more frequent and severe heatwaves, droughts, and extreme weather events. Melting polar ice sheets and rising sea levels threaten coastal communities and fragile marine biodiversity worldwide. Mitigating these catastrophic impacts requires immediate, coordinated international cooperation, aggressive transitions to renewable energy sources, sustainable agricultural practices, and widespread ecological conservation initiatives.",
    education: "Online education has experienced a historic expansion over the past decade, reshaping the landscape of modern pedagogy and professional skill development. Digital learning platforms, virtual classrooms, and interactive video tutorials offer students unprecedented flexibility to study asynchronously from any location in the world. This democratizes access to prestigious courses, diverse subjects, and specialized certifications that were previously inaccessible to many learners. Nevertheless, digital learning presents significant challenges, such as feelings of social isolation, reduced peer-to-peer engagement, and unequal access to high-speed internet. A balanced hybrid approach that combines digital resources with collaborative mentorship appears to offer the most promising path forward."
  };

  // Helper: Count words and chars
  function updateCounters() {
    const text = textInput.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const chars = textInput.value.length;

    wordCountBadge.textContent = `${words} ${words === 1 ? 'word' : 'words'}`;
    charCountBadge.textContent = `${chars} ${chars === 1 ? 'char' : 'chars'}`;
  }

  // Helper: Show/Hide Alert
  function showAlert(msg) {
    alertMessage.textContent = msg;
    alertBox.classList.remove('hidden');
  }

  function hideAlert() {
    alertBox.classList.add('hidden');
  }

  // Live input listener
  textInput.addEventListener('input', () => {
    updateCounters();
    hideAlert();
  });

  // Preset Loaders
  function loadPreset(sampleText) {
    textInput.value = sampleText;
    updateCounters();
    hideAlert();
    textInput.focus();
  }

  btnSampleAi.addEventListener('click', () => loadPreset(SAMPLES.ai));
  btnSampleClimate.addEventListener('click', () => loadPreset(SAMPLES.climate));
  btnSampleEducation.addEventListener('click', () => loadPreset(SAMPLES.education));

  // Clear button
  btnClear.addEventListener('click', () => {
    textInput.value = '';
    updateCounters();
    hideAlert();
    textInput.focus();
  });

  // Paste button
  btnPaste.addEventListener('click', async () => {
    try {
      const clipText = await navigator.clipboard.readText();
      if (clipText) {
        textInput.value = clipText;
        updateCounters();
        hideAlert();
      }
    } catch (err) {
      console.warn("Clipboard access denied or unsupported", err);
    }
  });

  // Generate Notes Action
  btnGenerate.addEventListener('click', async () => {
    const rawText = textInput.value.trim();

    if (!rawText) {
      showAlert("Please enter some text to summarize.");
      textInput.focus();
      return;
    }

    const words = rawText.split(/\s+/);
    if (words.length < 15) {
      showAlert("Input text is too short. Please enter a paragraph with at least 15 to 20 words for meaningful study notes.");
      return;
    }

    hideAlert();

    // Toggle loading state
    const btnText = btnGenerate.querySelector('.btn-text');
    const btnLoader = btnGenerate.querySelector('.btn-loader');
    btnGenerate.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: rawText })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to process text.");
      }

      // Populate Statistics
      statOrigWords.textContent = data.original_words;
      statSummWords.textContent = data.summary_words;
      statReduction.textContent = `${data.reduction_percentage.toFixed(2)}%`;
      reductionBar.style.width = `${Math.min(100, Math.max(0, data.reduction_percentage))}%`;

      // Populate Summary
      summaryText.textContent = data.summary;

      // Populate Key Points
      keyPointsList.innerHTML = '';
      if (Array.isArray(data.key_points) && data.key_points.length > 0) {
        data.key_points.forEach(point => {
          const li = document.createElement('li');
          li.textContent = point;
          keyPointsList.appendChild(li);
        });
      }

      // Switch view from Empty state to Results
      emptyState.classList.add('hidden');
      resultsContainer.classList.remove('hidden');

      // Smooth scroll into results on mobile
      if (window.innerWidth < 900) {
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
      }

    } catch (err) {
      showAlert(err.message || "An unexpected error occurred during processing.");
    } finally {
      btnGenerate.disabled = false;
      btnText.classList.remove('hidden');
      btnLoader.classList.add('hidden');
    }
  });

  // Copy Summary
  btnCopySummary.addEventListener('click', () => {
    const textToCopy = summaryText.textContent;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btnCopySummary.innerHTML;
        btnCopySummary.innerHTML = `✓ Copied!`;
        setTimeout(() => {
          btnCopySummary.innerHTML = originalText;
        }, 2000);
      });
    }
  });

  // Copy Key Points
  btnCopyPoints.addEventListener('click', () => {
    const points = Array.from(keyPointsList.querySelectorAll('li'))
      .map(li => `• ${li.textContent}`)
      .join('\n');
    
    if (points) {
      navigator.clipboard.writeText(points).then(() => {
        const originalText = btnCopyPoints.innerHTML;
        btnCopyPoints.innerHTML = `✓ Copied!`;
        setTimeout(() => {
          btnCopyPoints.innerHTML = originalText;
        }, 2000);
      });
    }
  });

  // Speech Synthesis (Text-to-Speech)
  btnTts.addEventListener('click', () => {
    const text = summaryText.textContent;
    if (!text || !('speechSynthesis' in window)) return;

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      btnTts.innerHTML = `Listen`;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      btnTts.innerHTML = `⏹ Stop`;
    };

    utterance.onend = () => {
      btnTts.innerHTML = `Listen`;
    };

    window.speechSynthesis.speak(utterance);
  });
});
