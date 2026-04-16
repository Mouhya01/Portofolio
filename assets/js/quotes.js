

(function () {
  'use strict';


  const FALLBACKS = [
    {
      content: "Any sufficiently advanced technology is indistinguishable from magic.",
      author:  "Arthur C. Clarke"
    },
    {
      content: "The function of good software is to make the complex appear simple.",
      author:  "Grady Booch"
    },
    {
      content: "First, solve the problem. Then, write the code.",
      author:  "John Johnson"
    },
    {
      content: "Simplicity is the soul of efficiency.",
      author:  "Austin Freeman"
    },
    {
      content: "Mathematics is the language in which God has written the universe.",
      author:  "Galileo Galilei"
    }
  ];


  function displayQuote(content, author) {
    const quoteEl  = document.getElementById('api-quote-text');
    const authorEl = document.getElementById('api-quote-author');
    const wrapper  = document.getElementById('api-quote-wrapper');

    if (!quoteEl || !authorEl || !wrapper) return;

    quoteEl.innerHTML  = `"${content}"`;
    authorEl.textContent = `— ${author}`;

    /* Trigger fade-in by adding visible class */
    wrapper.classList.add('quote-loaded');
  }


  function displayFallbackQuote() {
    const random = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
    displayQuote(random.content, random.author);
  }


  async function fetchQuote() {

    const tags    = 'technology|science|mathematics|inspirational';
    const maxLen  = 120; 
    const url     = `https://api.quotable.io/quotes/random?tags=${tags}&maxLength=${maxLen}`;

    try {
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const data = await response.json();

      /* Quotable returns an array — take the first element */
      if (Array.isArray(data) && data.length > 0) {
        displayQuote(data[0].content, data[0].author);
      } else {
        /* Empty response — use fallback */
        displayFallbackQuote();
      }

    } catch (error) {

      console.warn('[quotes.js] Quotable API unavailable — using local fallback.', error.message);
      displayFallbackQuote();
    }
  }

  /* ── 5. REFRESH BUTTON ───────────────────────────────────── */
  function initRefreshButton() {
    const btn = document.getElementById('api-quote-refresh');
    if (!btn) return;

    btn.addEventListener('click', () => {
      /* Hide current quote */
      const wrapper = document.getElementById('api-quote-wrapper');
      wrapper.classList.remove('quote-loaded');

      /* Small delay before fetching next to let CSS transition play */
      setTimeout(fetchQuote, 300);
    });
  }

  /* ── 6. INJECT HTML WIDGET ────────────────────────────────── */
  function buildQuoteWidget() {
    const target = document.getElementById('quote-api-section');
    if (!target) return; /* Only runs on about.html */

    target.innerHTML = `
      <div class="glass-card p-4 mt-4 reveal" id="api-quote-wrapper">

        <!-- API source label -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
          <div style="display:flex;align-items:center;gap:0.5rem;">
            <span style="font-size:0.60rem;letter-spacing:0.12em;text-transform:uppercase;
                         color:var(--clr-accent-teal);font-family:'DM Mono',monospace;">
              ✦ Live via Quotable API
            </span>
            <span style="font-size:0.58rem;color:var(--clr-text-dimmed);
                         font-family:'DM Mono',monospace;">
              (public-apis/public-apis)
            </span>
          </div>
          <!-- Refresh button -->
          <button id="api-quote-refresh"
            title="Load another quote"
            style="background:none;border:1px solid rgba(79,209,197,0.25);border-radius:6px;
                   color:var(--clr-accent-teal);font-size:0.72rem;padding:0.2rem 0.5rem;
                   cursor:pointer;font-family:'DM Mono',monospace;letter-spacing:0.06em;
                   transition:all 0.2s;">
            ↺ New
          </button>
        </div>

        <!-- Quote loading skeleton -->
        <div id="api-quote-skeleton" style="display:none;">
          <div style="height:8px;background:rgba(255,255,255,0.07);border-radius:4px;
                      margin-bottom:6px;width:100%;"></div>
          <div style="height:8px;background:rgba(255,255,255,0.07);border-radius:4px;
                      margin-bottom:6px;width:80%;"></div>
          <div style="height:6px;background:rgba(255,255,255,0.05);border-radius:4px;
                      width:40%;margin-top:10px;"></div>
        </div>

        <!-- Quote content -->
        <blockquote style="margin:0;">
          <p id="api-quote-text"
             style="font-family:'Syne',sans-serif;font-size:clamp(0.9rem,1.5vw,1.05rem);
                    font-weight:600;color:var(--clr-text-primary);line-height:1.6;
                    font-style:italic;margin-bottom:0.75rem;">
            Loading quote…
          </p>
          <footer id="api-quote-author"
                  style="font-size:0.75rem;color:var(--clr-accent-teal);
                         font-family:'DM Mono',monospace;letter-spacing:0.06em;">
            —
          </footer>
        </blockquote>

      </div>

      <!-- Tiny attribution note -->
      <p style="font-size:0.62rem;color:var(--clr-text-dimmed);
                font-family:'DM Mono',monospace;margin-top:0.5rem;
                letter-spacing:0.05em;">
        Powered by
        <a href="https://github.com/lukePeavey/quotable" target="_blank" rel="noopener"
           style="color:var(--clr-accent-cyan);">Quotable</a>
        — found on
        <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noopener"
           style="color:var(--clr-accent-cyan);">public-apis/public-apis</a>
      </p>
    `;

    /* CSS for the fade-in transition */
    const style = document.createElement('style');
    style.textContent = `
      #api-quote-wrapper {
        opacity: 0;
        transition: opacity 0.6s ease;
      }
      #api-quote-wrapper.quote-loaded {
        opacity: 1;
      }
      #api-quote-refresh:hover {
        background: rgba(79,209,197,0.10) !important;
        border-color: rgba(79,209,197,0.5) !important;
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 7. INIT ─────────────────────────────────────────────── */
  function init() {
    buildQuoteWidget();
    fetchQuote();
    initRefreshButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
