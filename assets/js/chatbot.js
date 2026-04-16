

(function () {
  'use strict';

  /* ── 1. KNOWLEDGE BASE ──────────────────────────────────────
                */
  const KB = [
    {
      keywords: ['hello', 'hi', 'hey', 'salut', 'bonjour', 'yo', 'sup', 'start'],
      response: `Hey there! 👋 I'm <strong>M-Bot</strong>, Mouhya's portfolio assistant.<br><br>
                 You can ask me about his <strong>skills</strong>, <strong>projects</strong>,
                 <strong>availability</strong>, <strong>pricing</strong>, or how to <strong>contact</strong> him.`
    },
    {
      keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'know', 'use', 'language', 'framework'],
      response: `Mouhya's core stack:<br><br>
                 ⚛️ <strong>React</strong> — dynamic UIs & SPAs<br>
                 🟢 <strong>Node.js / Express</strong> — REST APIs & back-end<br>
                 🐍 <strong>Python</strong> — scripting & data processing<br>
                 📐 <strong>MATLAB</strong> — numerical methods & simulation<br>
                 🌐 <strong>HTML5 / CSS3 / Bootstrap 5</strong> — responsive design<br>
                 🔌 <strong>Digital Logic / VHDL</strong> — circuit design<br><br>
                 Want details on a specific skill?`
    },
    {
      keywords: ['react', 'reactjs', 'jsx', 'component', 'hook', 'context'],
      response: `Mouhya works with <strong>React 18</strong> — functional components,
                 hooks (useState, useEffect, useContext), Context API for state management,
                 and REST API integration via Axios. He builds clean, reusable component libraries.`
    },
    {
      keywords: ['node', 'nodejs', 'express', 'backend', 'back-end', 'server', 'api', 'rest', 'jwt'],
      response: `On the back-end, Mouhya uses <strong>Node.js with Express</strong>:
                 REST API design, JWT authentication, middleware architecture,
                 input validation and CORS configuration.
                 <em>(Full deployment coming in Phase 2 of this portfolio.)</em>`
    },
    {
      keywords: ['python', 'numpy', 'matplotlib', 'script', 'automation', 'data'],
      response: `Mouhya uses <strong>Python</strong> for scripting, automation and numerical work.
                 His toolkit includes NumPy for vectorised computation and Matplotlib
                 for publication-quality plots. He has implemented ODE solvers from scratch
                 (Euler, Runge-Kutta 4th order) and validated them against MATLAB.`
    },
    {
      keywords: ['matlab', 'numerical', 'simulation', 'ode', 'euler', 'runge', 'kutta'],
      response: `MATLAB is Mouhya's tool for <strong>numerical methods and simulation</strong>.
                 He has modelled damped oscillators and Lotka-Volterra predator-prey systems,
                 comparing solver accuracy using L2-norm error analysis — all documented in
                 his portfolio projects.`
    },
    {
      keywords: ['project', 'projects', 'work', 'portfolio', 'built', 'made', 'case', 'study'],
      response: `Mouhya has <strong>3 featured projects</strong>:<br><br>
                 <strong>01 — Full-Stack Dashboard</strong><br>
                 React UI + Express API + JWT auth<br><br>
                 <strong>02 — Numerical Simulation</strong><br>
                 Python ODE solvers + MATLAB validation<br><br>
                 <strong>03 — Sequential Logic Design</strong><br>
                 FSM + Karnaugh maps + VHDL implementation<br><br>
                 👉 <a href="portfolio-details.html" style="color:#63b3ed;">See full case studies →</a>`
    },
    {
      keywords: ['dashboard', 'fullstack', 'full-stack', 'full stack', 'web app', 'webapp'],
      response: `The <strong>Full-Stack Dashboard</strong> is Mouhya's flagship web project:
                 a data management application with a React 18 interface, an Express REST API,
                 JWT-secured routes, and Axios-powered async data fetching.
                 Designed mobile-first with Bootstrap 5.`
    },
    {
      keywords: ['circuit', 'logic', 'vhdl', 'fsm', 'karnaugh', 'boolean', 'sequential', 'digital'],
      response: `The <strong>Sequential Logic Design</strong> project covers the full engineering
                 pipeline: informal spec → state transition diagram → 4-variable Karnaugh maps
                 → minimised Boolean equations → VHDL behavioural description → simulation.
                 Achieved a 30% gate reduction vs. the naïve implementation.`
    },
    {
      keywords: ['contact', 'reach', 'email', 'message', 'talk', 'hire', 'work together', 'collaborate'],
      response: `You can reach Mouhya via:<br><br>
                 📧 <strong>Email</strong> — mouhyadine.zakaria.djama@gmail.com<br>
                 💼 <strong>LinkedIn</strong> — linkedin.com/in/mouhya<br>
                 🐙 <strong>GitHub</strong> — github.com/Mouhya01<br><br>
                 👉 <a href="contact.html" style="color:#63b3ed;">Or use the contact form →</a><br><br>
                 He replies within <strong>24 hours</strong>.`
    },
    {
      keywords: ['available', 'availability', 'free', 'when', 'start', 'begin', 'open'],
      response: `Mouhya is <strong>available for freelance projects starting May 2026</strong> 🟢<br><br>
                 He accepts projects on <strong>Upwork</strong> and <strong>Fiverr</strong>,
                 as well as direct contracts. His capacity is limited — reach out early to
                 secure a slot!`
    },
    {
      keywords: ['price', 'pricing', 'cost', 'rate', 'charge', 'fee', 'budget', 'quote', 'pay'],
      response: `Pricing varies by project scope:<br><br>
                 💡 Small scripts / automation — from <strong>$50</strong><br>
                 🔧 API integration — from <strong>$100</strong><br>
                 🚀 Full-Stack web app — from <strong>$200</strong><br><br>
                 Send a brief via the <a href="contact.html" style="color:#63b3ed;">contact form</a>
                 and Mouhya will send a custom quote within 24h.`
    },
    {
      keywords: ['where', 'location', 'djibouti', 'country', 'timezone', 'zone', 'remote'],
      response: `Mouhya is based in <strong>Djibouti City, Djibouti 🇩🇯</strong> —
                 a strategic hub between Africa, Asia and the Middle East.<br><br>
                 Time zone: <strong>EAT (UTC+3)</strong><br>
                 Working hours: 08:00 – 22:00 EAT<br>
                 Languages: <strong>English · French · Arabic</strong><br><br>
                 He works <strong>100% remote</strong> and collaborates worldwide.`
    },
    {
      keywords: ['language', 'french', 'arabic', 'english', 'speak', 'langue'],
      response: `Mouhya communicates in <strong>3 languages</strong>:<br><br>
                 🇬🇧 English — professional level<br>
                 🇫🇷 French — native level<br>
                 🇸🇦 Arabic — conversational level<br><br>
                 He can manage projects in any of these languages.`
    },
    {
      keywords: ['study', 'student', 'university', 'degree', 'education', 'school', 'formation', 'cours'],
      response: `Mouhya is studying <strong>Computer Engineering</strong> at the University of Djibouti —
                 proudly part of the <strong>very first CS cohort</strong> in the country.<br><br>
                 His curriculum covers: algorithms, networks, operating systems, digital logic,
                 numerical methods, databases and software engineering.`
    },
    {
      keywords: ['github', 'code', 'repository', 'repo', 'source', 'open source'],
      response: `Mouhya's code is on GitHub:<br>
                 🐙 <strong>github.com/Mouhya01</strong><br><br>
                 You'll find his project repositories there with commit history,
                 README documentation and live demos.`
    },
    {
      keywords: ['upwork', 'fiverr', 'freelance', 'freelancer', 'platform'],
      response: `Mouhya will be launching on <strong>Upwork</strong> and <strong>Fiverr</strong>
                 in <strong>May 2026</strong>.<br><br>
                 He specialises in Full-Stack development, Python automation and API integration.
                 You can already reach him directly via the
                 <a href="contact.html" style="color:#63b3ed;">contact page</a>.`
    },
    {
      keywords: ['bootstrap', 'css', 'html', 'responsive', 'mobile', 'design', 'ui', 'frontend', 'front-end'],
      response: `Mouhya builds <strong>responsive interfaces</strong> with HTML5, CSS3 and Bootstrap 5.3.
                 He applies semantic markup, WCAG accessibility standards, CSS custom properties
                 for design systems, and animation via IntersectionObserver — as you can see
                 on this very portfolio!`
    },
    {
      keywords: ['who', 'mouhya', 'about', 'you', 'tell me', 'yourself', 'introduce'],
      response: `<strong>Mouhya</strong> is a Computer Engineering student and Full-Stack Developer
                 based in Djibouti 🇩🇯<br><br>
                 He is part of the first-ever CS cohort in his country and is launching as a
                 Freelance Developer in May 2026 on Upwork and Fiverr.<br><br>
                 His philosophy: <em>"Engineering is the art of turning constraints into
                 opportunities."</em><br><br>
                 👉 <a href="about.html" style="color:#63b3ed;">Read the full story →</a>`
    },
    {
      keywords: ['thank', 'thanks', 'merci', 'thx', 'ty', 'great', 'nice', 'awesome', 'cool'],
      response: `You're welcome! 😊 Is there anything else I can help you with?<br><br>
                 Feel free to ask about <strong>skills</strong>, <strong>projects</strong>,
                 <strong>pricing</strong> or how to <strong>get in touch</strong> with Mouhya.`
    },
    {
      keywords: ['bye', 'goodbye', 'ciao', 'au revoir', 'see you', 'later', 'done'],
      response: `Thanks for visiting Mouhya's portfolio! 👋<br><br>
                 Don't forget to check out his
                 <a href="portfolio-details.html" style="color:#63b3ed;">projects</a> and
                 <a href="contact.html" style="color:#63b3ed;">get in touch</a> if you have a project in mind. 🚀`
    }
  ];

  /* Fallback response when no keyword matches */
  const FALLBACK = `Hmm, I'm not sure about that one. 🤔<br><br>
                    Try asking me about:<br>
                    • <strong>skills</strong> or <strong>stack</strong><br>
                    • <strong>projects</strong> or <strong>work</strong><br>
                    • <strong>contact</strong> or <strong>pricing</strong><br>
                    • <strong>availability</strong> or <strong>location</strong>`;

  /* ── 2. MATCHING ENGINE ──────────────────────────────────────
     Scores each KB entry by counting how many of its keywords
     appear in the normalised user input. Returns the entry with
     the highest score, or null if no keyword matches at all.   */
  function findBestMatch(input) {
    const normalised = input.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    const words      = normalised.split(/\s+/);

    let best  = null;
    let topScore = 0;

    KB.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(kw => {
        /* Exact word match */
        if (words.includes(kw)) score += 2;
        /* Substring match (e.g. "projects" matches "project") */
        else if (normalised.includes(kw)) score += 1;
      });
      if (score > topScore) {
        topScore = score;
        best     = entry;
      }
    });

    return topScore > 0 ? best.response : FALLBACK;
  }

  /* ── 3. TYPING INDICATOR ────────────────────────────────────
     Creates a realistic "..." typing animation before the bot
     responds. Duration scales slightly with response length.  */
  function typingDelay(responseLength) {
    /* Base 800ms + up to 700ms extra for longer responses */
    return 800 + Math.min(responseLength * 0.5, 700);
  }

  /* ── 4. DOM INJECTION ───────────────────────────────────────
     Builds the entire chat widget and appends it to <body>.
     Uses only inline styles + a <style> tag to stay self-
     contained — no external CSS file required.               */
  function buildWidget() {

    /* ── Styles ── */
    const style = document.createElement('style');
    style.textContent = `
      /* Chat widget — scoped to #mbot-* namespace */
      #mbot-toggle {
        position: fixed; bottom: 1.75rem; right: 1.75rem; z-index: 9000;
        width: 56px; height: 56px; border-radius: 50%;
        background: linear-gradient(135deg, #63b3ed, #9f7aea);
        border: none; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 20px rgba(99,179,237,0.45), 0 0 0 0 rgba(99,179,237,0.4);
        animation: mbot-pulse 3s ease-in-out infinite;
        transition: transform 0.2s cubic-bezier(0.16,1,0.3,1);
      }
      #mbot-toggle:hover { transform: scale(1.1); }
      #mbot-toggle svg   { width: 24px; height: 24px; fill: #fff; transition: opacity 0.2s; }
      #mbot-toggle.open .mbot-icon-chat { opacity: 0; position: absolute; }
      #mbot-toggle.open .mbot-icon-close{ opacity: 1; }
      #mbot-toggle .mbot-icon-close      { opacity: 0; position: absolute; }

      /* Unread badge */
      #mbot-badge {
        position: absolute; top: -3px; right: -3px;
        width: 18px; height: 18px; border-radius: 50%;
        background: #f56565; border: 2px solid #07080f;
        font-size: 10px; font-weight: 700; color: #fff;
        display: flex; align-items: center; justify-content: center;
        font-family: 'DM Mono', monospace;
        animation: mbot-bounce 0.4s cubic-bezier(0.16,1,0.3,1);
      }
      #mbot-badge.hidden { display: none; }

      @keyframes mbot-pulse {
        0%,100% { box-shadow: 0 4px 20px rgba(99,179,237,0.45), 0 0 0 0   rgba(99,179,237,0.35); }
        50%      { box-shadow: 0 4px 20px rgba(99,179,237,0.45), 0 0 0 12px rgba(99,179,237,0); }
      }
      @keyframes mbot-bounce {
        from { transform: scale(0); } to { transform: scale(1); }
      }

      /* Chat window */
      #mbot-window {
        position: fixed; bottom: 5.5rem; right: 1.75rem; z-index: 8999;
        width: 340px; max-height: 520px;
        display: flex; flex-direction: column;
        background: rgba(10, 12, 26, 0.96);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 16px;
        box-shadow: 0 16px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,179,237,0.08);
        backdrop-filter: blur(20px);
        overflow: hidden;
        transform: scale(0.85) translateY(20px);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                    opacity  0.35s cubic-bezier(0.16,1,0.3,1);
        transform-origin: bottom right;
      }
      #mbot-window.open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      /* Header */
      #mbot-header {
        padding: 1rem 1.1rem 0.85rem;
        background: linear-gradient(135deg, rgba(99,179,237,0.12), rgba(159,122,234,0.08));
        border-bottom: 1px solid rgba(255,255,255,0.07);
        display: flex; align-items: center; gap: 0.65rem;
        flex-shrink: 0;
      }
      .mbot-avatar {
        width: 38px; height: 38px; border-radius: 50%;
        background: linear-gradient(135deg,#63b3ed,#9f7aea);
        display: flex; align-items: center; justify-content: center;
        font-size: 1.1rem; flex-shrink: 0;
        position: relative;
      }
      .mbot-avatar::after {
        content: ''; position: absolute; bottom: 1px; right: 1px;
        width: 9px; height: 9px; border-radius: 50%;
        background: #28c840; border: 2px solid rgba(10,12,26,0.96);
      }
      .mbot-header-text .mbot-name {
        font-family: 'Syne', 'DM Mono', monospace;
        font-size: 0.88rem; font-weight: 700;
        color: #f0f4ff;
      }
      .mbot-header-text .mbot-status {
        font-size: 0.65rem; color: rgba(240,244,255,0.45);
        font-family: 'DM Mono', monospace;
        letter-spacing: 0.06em;
      }
      #mbot-clear {
        margin-left: auto; background: none; border: none;
        color: rgba(240,244,255,0.3); font-size: 0.65rem;
        cursor: pointer; padding: 0.2rem 0.4rem; border-radius: 4px;
        font-family: 'DM Mono', monospace; letter-spacing: 0.06em;
        text-transform: uppercase; transition: color 0.2s;
      }
      #mbot-clear:hover { color: rgba(240,244,255,0.7); }

      /* Messages area */
      #mbot-messages {
        flex: 1; overflow-y: auto; padding: 1rem;
        display: flex; flex-direction: column; gap: 0.65rem;
        scroll-behavior: smooth;
      }
      #mbot-messages::-webkit-scrollbar { width: 4px; }
      #mbot-messages::-webkit-scrollbar-track { background: transparent; }
      #mbot-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 4px; }

      /* Bubbles */
      .mbot-msg {
        max-width: 85%;
        padding: 0.6rem 0.85rem;
        border-radius: 12px;
        font-size: 0.78rem;
        line-height: 1.65;
        animation: mbot-msg-in 0.3s cubic-bezier(0.16,1,0.3,1);
      }
      @keyframes mbot-msg-in {
        from { opacity:0; transform:translateY(8px); }
        to   { opacity:1; transform:translateY(0); }
      }
      .mbot-msg.bot {
        align-self: flex-start;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        color: #e0e8ff;
        border-bottom-left-radius: 4px;
        font-family: 'DM Mono', monospace;
      }
      .mbot-msg.bot a { color: #63b3ed; }
      .mbot-msg.user {
        align-self: flex-end;
        background: linear-gradient(135deg,#63b3ed,#9f7aea);
        color: #fff;
        border-bottom-right-radius: 4px;
        font-family: 'DM Mono', monospace;
      }

      /* Typing indicator */
      .mbot-typing {
        align-self: flex-start;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 12px; border-bottom-left-radius: 4px;
        padding: 0.65rem 0.9rem;
        display: flex; gap: 4px; align-items: center;
        animation: mbot-msg-in 0.3s cubic-bezier(0.16,1,0.3,1);
      }
      .mbot-typing span {
        width: 6px; height: 6px; border-radius: 50%;
        background: rgba(99,179,237,0.6);
        animation: mbot-dot 1.2s ease-in-out infinite;
      }
      .mbot-typing span:nth-child(2) { animation-delay: 0.2s; }
      .mbot-typing span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes mbot-dot {
        0%,60%,100% { transform:translateY(0);   opacity:0.4; }
        30%          { transform:translateY(-5px); opacity:1;   }
      }

      /* Quick reply chips */
      .mbot-chips {
        display: flex; flex-wrap: wrap; gap: 0.4rem;
        padding: 0 1rem 0.65rem;
        flex-shrink: 0;
      }
      .mbot-chip {
        font-size: 0.65rem; font-family: 'DM Mono', monospace;
        letter-spacing: 0.05em;
        padding: 0.25rem 0.65rem; border-radius: 20px;
        background: rgba(99,179,237,0.07);
        border: 1px solid rgba(99,179,237,0.20);
        color: #63b3ed; cursor: pointer;
        transition: all 0.18s;
      }
      .mbot-chip:hover {
        background: rgba(99,179,237,0.18);
        border-color: rgba(99,179,237,0.45);
      }

      /* Input row */
      #mbot-input-row {
        display: flex; gap: 0.5rem;
        padding: 0.75rem 1rem;
        border-top: 1px solid rgba(255,255,255,0.07);
        background: rgba(255,255,255,0.02);
        flex-shrink: 0;
      }
      #mbot-input {
        flex: 1;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.10);
        border-radius: 8px;
        color: #f0f4ff;
        font-size: 0.78rem;
        font-family: 'DM Mono', monospace;
        padding: 0.5rem 0.75rem;
        outline: none;
        transition: border-color 0.2s;
      }
      #mbot-input:focus { border-color: rgba(99,179,237,0.45); }
      #mbot-input::placeholder { color: rgba(240,244,255,0.25); }

      #mbot-send {
        width: 36px; height: 36px; border-radius: 8px;
        background: linear-gradient(135deg,#63b3ed,#9f7aea);
        border: none; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        transition: transform 0.18s, box-shadow 0.18s;
      }
      #mbot-send:hover {
        transform: scale(1.08);
        box-shadow: 0 4px 16px rgba(99,179,237,0.4);
      }
      #mbot-send svg { width: 16px; height: 16px; fill: #fff; }

      /* Powered-by line */
      #mbot-footer {
        text-align: center;
        font-size: 0.58rem;
        color: rgba(240,244,255,0.18);
        padding: 0.3rem 0 0.5rem;
        font-family: 'DM Mono', monospace;
        letter-spacing: 0.06em;
        flex-shrink: 0;
      }

      /* Mobile adjustments */
      @media (max-width: 400px) {
        #mbot-window { width: calc(100vw - 2rem); right: 1rem; }
        #mbot-toggle { right: 1rem; }
      }
    `;
    document.head.appendChild(style);

    /* ── Toggle button ── */
    const toggle = document.createElement('button');
    toggle.id = 'mbot-toggle';
    toggle.setAttribute('aria-label', 'Open chat');
    toggle.innerHTML = `
      <!-- Chat icon -->
      <svg class="mbot-icon-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
      <!-- Close icon -->
      <svg class="mbot-icon-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
      <!-- Unread badge -->
      <div id="mbot-badge">1</div>
    `;

    /* ── Chat window ── */
    const win = document.createElement('div');
    win.id = 'mbot-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'Chat with M-Bot');
    win.innerHTML = `
      <div id="mbot-header">
        <div class="mbot-avatar">🤖</div>
        <div class="mbot-header-text">
          <div class="mbot-name">M-Bot</div>
          <div class="mbot-status">Mouhya's Portfolio Assistant · Online</div>
        </div>
        <button id="mbot-clear" title="Clear conversation">Clear</button>
      </div>

      <div id="mbot-messages" role="log" aria-live="polite"></div>

      <!-- Quick reply chips -->
      <div class="mbot-chips" id="mbot-chips">
        <button class="mbot-chip">👋 Hello</button>
        <button class="mbot-chip">🛠️ Skills</button>
        <button class="mbot-chip">💼 Projects</button>
        <button class="mbot-chip">💰 Pricing</button>
        <button class="mbot-chip">📍 Location</button>
        <button class="mbot-chip">✉️ Contact</button>
      </div>

      <div id="mbot-input-row">
        <input
          type="text"
          id="mbot-input"
          placeholder="Ask me anything…"
          maxlength="200"
          autocomplete="off"
          aria-label="Type your message"
        />
        <button id="mbot-send" aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>

      <div id="mbot-footer">Powered by M-Bot · Built by Mouhya01</div>
    `;

    document.body.appendChild(toggle);
    document.body.appendChild(win);
  }

  /* ── 5. MESSAGE RENDERING ───────────────────────────────────
     Appends a message bubble to #mbot-messages and scrolls to
     the bottom. Supports 'bot' and 'user' role variants.     */
  function appendMessage(html, role) {
    const msgs = document.getElementById('mbot-messages');
    const div  = document.createElement('div');
    div.className = `mbot-msg ${role}`;
    div.innerHTML = html;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  /* ── 6. BOT REPLY WITH TYPING ANIMATION ────────────────────
     Shows a "..." indicator, waits typingDelay ms, removes it,
     then renders the actual response bubble.                  */
  function botReply(response) {
    const msgs = document.getElementById('mbot-messages');

    /* Show typing indicator */
    const typing = document.createElement('div');
    typing.className = 'mbot-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    /* Replace with real response after delay */
    const delay = typingDelay(response.length);
    setTimeout(() => {
      typing.remove();
      appendMessage(response, 'bot');
    }, delay);
  }

  /* ── 7. HANDLE USER INPUT ───────────────────────────────────
     Called on Enter key or send button click. Trims input,
     renders user bubble, then triggers bot reply.            */
  function handleInput() {
    const input = document.getElementById('mbot-input');
    const text  = input.value.trim();
    if (!text) return;

    /* Render user message */
    appendMessage(text, 'user');
    input.value = '';

    /* Find and return bot response */
    const response = findBestMatch(text);
    botReply(response);
  }

  /* ── 8. INITIALISE ──────────────────────────────────────────
     Builds the widget, attaches event listeners, and shows
     the welcome message after a short delay.                 */
  function init() {
    buildWidget();

    const toggle  = document.getElementById('mbot-toggle');
    const win     = document.getElementById('mbot-window');
    const input   = document.getElementById('mbot-input');
    const sendBtn = document.getElementById('mbot-send');
    const badge   = document.getElementById('mbot-badge');
    const chips   = document.getElementById('mbot-chips');
    const clearBtn= document.getElementById('mbot-clear');

    /* Toggle open/close */
    toggle.addEventListener('click', () => {
      const isOpen = win.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Close chat' : 'Open chat');

      /* Hide badge when opening */
      if (isOpen) {
        badge.classList.add('hidden');
        input.focus();
      }
    });

    /* Send on button click */
    sendBtn.addEventListener('click', handleInput);

    /* Send on Enter key */
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleInput();
      }
    });

    /* Quick reply chips */
    chips.addEventListener('click', (e) => {
      if (!e.target.classList.contains('mbot-chip')) return;
      input.value = e.target.textContent.replace(/^[^\w]+/, '').trim();
      handleInput();
    });

    /* Clear conversation */
    clearBtn.addEventListener('click', () => {
      const msgs = document.getElementById('mbot-messages');
      msgs.innerHTML = '';
      /* Re-show welcome message */
      setTimeout(() => {
        botReply(`Chat cleared! 🧹 I'm still here — ask me about Mouhya's <strong>skills</strong>, <strong>projects</strong> or how to <strong>get in touch</strong>.`);
      }, 300);
    });

    /* Welcome message after 1.5s page load delay */
    setTimeout(() => {
      botReply(`👋 Hi! I'm <strong>M-Bot</strong>, Mouhya's portfolio assistant.<br><br>
                Ask me about his <strong>skills</strong>, <strong>projects</strong>,
                <strong>pricing</strong> or <strong>availability</strong> — I reply instantly!`);
    }, 1500);

    /* Developer Easter egg in console */
    console.log('%c👋 Hi curious developer!', 'color:#63b3ed;font-size:14px;font-weight:bold;');
    console.log('%cYou found the M-Bot source. Built from scratch by Mouhya01 — no external APIs.',
      'color:#9f7aea;font-size:11px;');
    console.log('%ccontact@mouhya01.dev | github.com/Mouhya01', 'color:#4fd1c5;font-size:11px;');
  }

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
