// Dicionário de Traduções
const translations = {
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About",
        "nav-plugins": "Audio Plugins",
        "nav-projects": "Other Projects",
        "nav-contact": "Contact",

        // Profile
        role: "Software Developer & Audio Engineer",
        "hero-hello": "Hello, I'm",
        "rot-prefix": "I build",
        "rot-words": ["audio plugins", "web apps", "games", "music"],
        "hl-projects": "Software &amp; music",
        "hl-about": "Journey &amp; toolkit",
        "cta-work": "Featured Work",
        "cta-contact": "Get in Touch",

        // About
        "about-subtitle": "Get to know more",
        "about-title": "About Me",
        "about-lead":
            "I build software where <em>code meets sound</em>: from audio plugins in C++ and JUCE to web apps and games.",
        "journey-title": "Journey",
        "tl-now-kicker": "Now",
        "tl-now-title": "Audio Plugin Development",
        "tl-now-desc":
            'Developing <a href="#featured-plugin" class="company-link" data-plugin-link="alma">ALMA</a> and <a href="#featured-plugin" class="company-link" data-plugin-link="tmverb">TMVerb</a> in C++ and JUCE, from the DSP engine to the interface design and preset system.',
        "tl-msc-kicker": "Master's · Internship",
        "edu-msc": "MSc in Sound Design and Music Computing",
        "tl-msc-role":
            'Audio Plugin Developer at <a href="https://coletivocriativo.pt/" target="_blank" rel="noopener noreferrer" class="company-link">Coletivo Criativo</a>',
        "tl-msc-desc":
            "Started ALMA during my master's internship: an all-in-one plugin that makes multi-effect processing approachable for beginners.",
        "tl-bsc-kicker": "Bachelor's · Internship",
        "edu-bsc": "BSc in Computer Science and Engineering",
        "tl-bsc-role":
            'Game Developer at <a href="https://neuroinova.com/pt/home/" target="_blank" rel="noopener noreferrer" class="company-link">NeuroInova</a>',
        "tl-bsc-points":
            "<li>Modernized legacy games, migrating them from CreateJS to Konva.js</li><li>Converted the full tech stack of the core game mechanics</li><li>Researched unit testing tools, debugged and implemented new levels</li>",
        "toolkit-title": "Toolkit",
        "toolkit-audio": "Audio &amp; DSP",
        "toolkit-web": "Web &amp; Games",
        "toolkit-design": "Design",
        "interests-title": "Beyond Code",
        "int-producer": "Music Producer",
        "int-producer-desc":
            "Electronic music, sound design, mixing &amp; mastering",
        "int-guitar": "Guitarist",
        "int-guitar-desc": "Live in cover &amp; event bands",

        // Audio Plugins
        "plugins-subtitle": "Featured Projects",
        "plugins-title": "Audio Plugins",

        // ALMA
        "alma-kind": "All-in-one processor",
        "alma-desc":
            '<strong>ALMA</strong> is an all-in-one audio plugin developed in C++ and JUCE. Each of its 5 core macro modules handles a parallel chain of 3 independent effects, allowing users to toggle, stack, and fine-tune individual sub-parameters. It features an adaptive UI layer ("ALMA mode") that translates standard DSP parameters into intuitive terminology for beginners. It includes a factory bank and native custom preset serialization.',
        "alma-stat-1": "Macro modules",
        "alma-stat-2": "Independent effects",
        "alma-stat-3": "UI modes",
        "alma-video-caption":
            'A music production remake of "Magia" by Pedro Gonçalves, demonstrating some of the sound shaping capabilities of the ALMA audio plugin.',

        // TMVerb
        "tmverb-kind": "Algorithmic reverb",
        "tmverb-desc":
            "<strong>TMVerb</strong> is an algorithmic stereo reverb developed in C++ and JUCE, built around a custom 8-line Feedback Delay Network: all-pass diffusers feed modulated delay lines with in-loop high-frequency damping and a Hadamard feedback matrix, keeping tails dense and smooth from tight rooms to 20-second ambient washes. Four main knobs (Pre-Delay, Decay, Tone and Mix) shape the core sound, while a three-mode XY pad controls six more parameters in pairs. It ships with 9 factory presets tuned for mono compatibility and stability from 44.1 to 96 kHz, plus custom preset saving.",
        "tmverb-stat-1": "Delay lines (FDN)",
        "tmverb-stat-2": "XY pad modes",
        "tmverb-stat-3": "Factory presets",
        "tmverb-stat-4": "Max decay",
        "tmverb-flow-title": "Signal flow",
        "flow-input": "Input",
        "tmverb-xy-title": "One XY pad, three modes",
        "tmverb-xy-hint": "Drag inside a pad to try it",
        "xy-space-desc": "Room size and stereo width of the tail.",
        "xy-spectral-desc":
            "Low cut and high-frequency damping inside the loop.",
        "xy-dynamics-desc":
            "Ducks the tail under the dry signal, or gates it for 80s-style drums.",

        // Other Projects
        "projects-subtitle": "Explore My",
        "projects-title": "Other Projects",
        "filter-all": "All",
        "filter-software": "Software",
        "filter-music": "Music",
        "music-kicker": "Music Production · Original Track",
        "music-desc-1":
            "Original electronic dance music track featuring custom synth sound design, mixing, and mastering.",
        "music-more": "More on YouTube",
        "kicker-game": "Web Game",
        "kicker-web": "Web Platform",
        "kicker-console": "Console Game",
        "ttt-title": "Ultimate Tic-Tac-Toe",
        "ttt-desc":
            "A strategic twist on the classic game built with JavaScript.",
        "re-title": "Real Estate Website",
        "re-desc": "Web platform for property listings and management.",
        "ag-title": "Animals Game",
        "ag-desc": "Interactive project focused on core game logic.",

        // Games (Sueca)
        "nav-games": "Games",
        "hl-games": "Sueca · card game",
        "games-subtitle": "Featured Game",
        "games-title": "Games",
        "sueca-kind": "Card game · Windows",
        "sueca-desc":
            "<strong>Sueca</strong> is the classic Portuguese card game, built from scratch in Godot. You and the bot across the table take on the other pair, following the ritual of a real table: shuffle, cut, and deal from the top or the bottom of the deck to set the trump. Matches go from 1 to 10 games, with traditional <em>capote</em> and <em>bandeira</em> scoring, a hand history and a built-in animated tutorial.",
        "sueca-download": "Download for Windows",
        "sueca-github": "View on GitHub",
        "sueca-note": "Free · Windows 10/11 · English &amp; Portuguese",
        "sueca-stat-1": "Cards in the deck",
        "sueca-stat-2": "Bot players",
        "sueca-stat-3": "Points per hand",
        "sueca-stat-4": 'Games to a "Moca"',
        "sueca-flow-title": "How a hand plays out",
        "sueca-flow-1": "Shuffle",
        "sueca-flow-2": "Cut",
        "sueca-flow-3": "Deal",
        "sueca-flow-4": "Trump",
        "sueca-flow-5": "10 tricks",
        "sueca-flow-6": "Score",

        // Contact
        "contact-subtitle": "Get in touch",
        "contact-title": "Let's build something that <em>sounds</em> good.",
        "contact-text":
            "Have a project, a role or an idea in mind? Send me a message and let's talk.",
        copy: "Copy",
        copied: "Copied!",

        // Footer
        "footer-rights": "© 2026 Tiago Marques. All rights reserved.",
    },
    pt: {
        // Navigation
        "nav-home": "Início",
        "nav-about": "Sobre Mim",
        "nav-plugins": "Plugins de Áudio",
        "nav-projects": "Outros Projetos",
        "nav-contact": "Contacto",

        // Profile
        role: "Engenheiro Informático & Engenheiro de Áudio",
        "hero-hello": "Olá, eu sou o",
        "rot-prefix": "Crio",
        "rot-words": ["plugins de áudio", "aplicações web", "jogos", "música"],
        "hl-projects": "Software e música",
        "hl-about": "Percurso e ferramentas",
        "cta-work": "Projetos em Destaque",
        "cta-contact": "Entrar em Contacto",

        // About
        "about-subtitle": "Conhece mais",
        "about-title": "Sobre Mim",
        "about-lead":
            "Desenvolvo software onde <em>o código encontra o som</em>: de plugins de áudio em C++ e JUCE a aplicações web e jogos.",
        "journey-title": "Percurso",
        "tl-now-kicker": "Atualmente",
        "tl-now-title": "Desenvolvimento de Plugins de Áudio",
        "tl-now-desc":
            'A desenvolver o <a href="#featured-plugin" class="company-link" data-plugin-link="alma">ALMA</a> e o <a href="#featured-plugin" class="company-link" data-plugin-link="tmverb">TMVerb</a> em C++ e JUCE, do motor de DSP ao design da interface e ao sistema de presets.',
        "tl-msc-kicker": "Mestrado · Estágio",
        "edu-msc": "Mestrado em Computação Musical e Design de Som",
        "tl-msc-role":
            'Developer de Plugins de Áudio no <a href="https://coletivocriativo.pt/" target="_blank" rel="noopener noreferrer" class="company-link">Coletivo Criativo</a>',
        "tl-msc-desc":
            "Iniciei o ALMA durante o estágio curricular do mestrado: um plugin all-in-one que torna o processamento multi-efeitos acessível a iniciantes.",
        "tl-bsc-kicker": "Licenciatura · Estágio",
        "edu-bsc": "Licenciatura em Engenharia Informática",
        "tl-bsc-role":
            'Game Developer na <a href="https://neuroinova.com/pt/home/" target="_blank" rel="noopener noreferrer" class="company-link">NeuroInova</a>',
        "tl-bsc-points":
            "<li>Modernização de jogos, migrando-os de CreateJS para Konva.js</li><li>Conversão completa da arquitetura das mecânicas principais</li><li>Investigação de ferramentas de testes unitários, depuração e novos níveis</li>",
        "toolkit-title": "Ferramentas",
        "toolkit-audio": "Áudio &amp; DSP",
        "toolkit-web": "Web &amp; Jogos",
        "toolkit-design": "Design",
        "interests-title": "Para Além do Código",
        "int-producer": "Produtor Musical",
        "int-producer-desc":
            "Música eletrónica, design de som, mistura e masterização",
        "int-guitar": "Guitarrista",
        "int-guitar-desc": "Ao vivo em bandas de covers e festas de baile",

        // Audio Plugins
        "plugins-subtitle": "Projetos em Destaque",
        "plugins-title": "Plugins de Áudio",

        // ALMA
        "alma-kind": "Processador all-in-one",
        "alma-desc":
            '<strong>ALMA</strong> é um plugin de processamento de áudio desenvolvido em C++ e JUCE. Cada um dos seus 5 módulos macro gere uma cadeia paralela de 3 efeitos independentes, permitindo aos utilizadores alternar, acumular e ajustar sub-parâmetros individuais. Apresenta uma camada de UI adaptativa ("Modo ALMA") que traduz parâmetros padrão de DSP para uma terminologia intuitiva para iniciantes. Inclui presets de fábrica e serialização nativa de presets personalizados.',
        "alma-stat-1": "Módulos macro",
        "alma-stat-2": "Efeitos independentes",
        "alma-stat-3": "Modos de interface",
        "alma-video-caption":
            'Remake de produção musical do tema "Magia" de Pedro Gonçalves, demonstrando algumas das capacidades de modelação de som do plugin ALMA.',

        // TMVerb
        "tmverb-kind": "Reverb algorítmico",
        "tmverb-desc":
            "<strong>TMVerb</strong> é um reverb algorítmico estéreo desenvolvido em C++ e JUCE, construído em torno de uma Feedback Delay Network própria com 8 linhas: difusores all-pass alimentam linhas de atraso moduladas, com amortecimento de agudos dentro do loop e uma matriz de feedback de Hadamard, garantindo caudas densas e suaves, desde salas pequenas até ambientes de 20 segundos. Quatro knobs principais (Pre-Delay, Decay, Tone e Mix) definem o som base, enquanto um XY pad com três modos controla mais seis parâmetros em pares. Inclui 9 presets de fábrica afinados para compatibilidade mono e estabilidade de 44.1 a 96 kHz, além da gravação de presets personalizados.",
        "tmverb-stat-1": "Linhas de atraso (FDN)",
        "tmverb-stat-2": "Modos do XY pad",
        "tmverb-stat-3": "Presets de fábrica",
        "tmverb-stat-4": "Decay máximo",
        "tmverb-flow-title": "Cadeia de sinal",
        "flow-input": "Entrada",
        "tmverb-xy-title": "Um XY pad, três modos",
        "tmverb-xy-hint": "Arrasta dentro de um pad para experimentar",
        "xy-space-desc": "Tamanho da sala e largura estéreo da cauda.",
        "xy-spectral-desc": "Low cut e amortecimento de agudos dentro do loop.",
        "xy-dynamics-desc":
            "Baixa a cauda enquanto o sinal seco toca, ou corta-a com gate ao estilo dos anos 80.",

        // Other Projects
        "projects-subtitle": "Explora os Meus",
        "projects-title": "Outros Projetos",
        "filter-all": "Todos",
        "filter-software": "Software",
        "filter-music": "Música",
        "music-kicker": "Produção Musical · Tema Original",
        "music-desc-1":
            "Tema original de música eletrónica com design de som personalizado em sintetizadores, mistura e masterização.",
        "music-more": "Mais no YouTube",
        "kicker-game": "Jogo Web",
        "kicker-web": "Plataforma Web",
        "kicker-console": "Jogo de Consola",
        "ttt-title": "Ultimate Tic-Tac-Toe",
        "ttt-desc":
            "Uma versão estratégica do jogo clássico construída em JavaScript.",
        "re-title": "Site Imobiliário",
        "re-desc": "Plataforma web para listagem e gestão de imóveis.",
        "ag-title": "Jogo dos Animais",
        "ag-desc": "Projeto interativo focado na lógica do jogo.",

        // Games (Sueca)
        "nav-games": "Jogos",
        "hl-games": "Sueca · jogo de cartas",
        "games-subtitle": "Jogo em Destaque",
        "games-title": "Jogos",
        "sueca-kind": "Jogo de cartas · Windows",
        "sueca-desc":
            "A <strong>Sueca</strong> é o clássico jogo de cartas português, feito de raiz em Godot. Tu e o bot da frente jogam contra a outra dupla, com o ritual de uma mesa a sério: baralhar, partir e dar por cima ou por baixo, o que decide o trunfo. As partidas vão de 1 a 10 jogos, com a pontuação tradicional de <em>capote</em> e <em>bandeira</em>, histórico da mão e um tutorial animado integrado.",
        "sueca-download": "Download para Windows",
        "sueca-github": "Ver no GitHub",
        "sueca-note": "Grátis · Windows 10/11 · Português e Inglês",
        "sueca-stat-1": "Cartas no baralho",
        "sueca-stat-2": "Jogadores bot",
        "sueca-stat-3": "Pontos por mão",
        "sueca-stat-4": 'Jogos para uma "Moca"',
        "sueca-flow-title": "Como corre uma mão",
        "sueca-flow-1": "Baralhar",
        "sueca-flow-2": "Partir",
        "sueca-flow-3": "Dar",
        "sueca-flow-4": "Trunfo",
        "sueca-flow-5": "10 vazas",
        "sueca-flow-6": "Pontuação",

        // Contact
        "contact-subtitle": "Fala comigo",
        "contact-title": "Vamos criar algo que <em>soe</em> bem.",
        "contact-text":
            "Tens um projeto, uma vaga ou uma ideia em mente? Envia-me uma mensagem e falamos.",
        copy: "Copiar",
        copied: "Copiado!",

        // Footer
        "footer-rights": "© 2026 Tiago Marques. Todos os direitos reservados.",
    },
};

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "pt" : "en";
    document.documentElement.lang = currentLang;

    const textSpans = document.querySelectorAll(".lang-text");
    textSpans.forEach(
        (span) => (span.textContent = currentLang === "pt" ? "PT" : "EN"),
    );

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        const value =
            translations[currentLang] && translations[currentLang][key];
        if (typeof value === "string") {
            element.innerHTML = value;
        }
    });

    document.dispatchEvent(new Event("langchange"));
}

/* ==========================================================================
   AUDIO PLUGINS: seletor, contadores e XY pads do TMVerb
   ========================================================================== */
(function () {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    // ---- Seletor de plugin (ALMA / TMVerb) ---------------------------------
    const switcher = document.querySelector(".plugin-switch");
    if (!switcher) return;
    const tabs = [...switcher.querySelectorAll(".plugin-tab")];

    function selectPlugin(name, focus = false) {
        const tab = tabs.find((t) => t.dataset.plugin === name);
        if (!tab) return;

        switcher.dataset.active = name;
        document.querySelector(".plugins").dataset.active = name;

        tabs.forEach((t) => {
            const on = t === tab;
            t.setAttribute("aria-selected", on);
            t.tabIndex = on ? 0 : -1;

            const panel = document.getElementById(
                t.getAttribute("aria-controls"),
            );
            if (on) {
                panel.hidden = false;
                panel.classList.remove("is-active");
                void panel.offsetWidth; // reinicia a animação de entrada
                panel.classList.add("is-active");
            } else {
                panel.hidden = true;
                panel.classList.remove("is-active");
            }
        });

        if (focus) tab.focus();
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => selectPlugin(tab.dataset.plugin));
        tab.addEventListener("keydown", (e) => {
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
            e.preventDefault();
            const i = tabs.indexOf(tab);
            const next =
                tabs[
                    (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) %
                        tabs.length
                ];
            selectPlugin(next.dataset.plugin, true);
        });
    });

    // Links no texto (ex.: "TMVerb" no About) abrem diretamente o plugin certo
    document.addEventListener("click", (e) => {
        const link = e.target.closest("[data-plugin-link]");
        if (link) selectPlugin(link.dataset.pluginLink);
    });

    // ---- Contadores dos números (animam sempre que ficam visíveis) ---------
    function countUp(el) {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        if (reduceMotion) {
            el.textContent = target + suffix;
            return;
        }
        const duration = 900;
        const start = performance.now();
        function frame(now) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".stat-num").forEach(countUp);
            }
        });
    });
    document
        .querySelectorAll(".plugin-stats")
        .forEach((list) => statObserver.observe(list));

    // ---- XY pads do TMVerb (mesmos mapeamentos que Parameters.h) -----------
    const fmt = {
        space: (x, y) => [
            "SIZE " + (0.3 + 1.2 * x).toFixed(2) + "x",
            "WIDTH " + Math.round(200 * y) + " %",
        ],
        spectral: (x, y) => [
            "LOW CUT " + Math.round(20 * Math.pow(40, x)) + " Hz",
            "DAMPING " + Math.round(100 * y) + " %",
        ],
        dynamics: (x, y) => [
            "DUCKING " + (-24 * x).toFixed(1) + " dB",
            "GATE " + (y > 0.005 ? Math.round(-80 + 60 * y) + " dB" : "Off"),
        ],
    };

    // Valores por defeito do plugin (os mesmos do createParameterLayout)
    const defaults = {
        space: [0.5, 0.5],
        spectral: [0.2, 0.4],
        dynamics: [0.0, 0.0],
    };

    const cards = [...document.querySelectorAll(".xy-card")].map((card, i) => {
        const mode = card.dataset.mode;
        return {
            card,
            mode,
            pad: card.querySelector(".xy-pad"),
            dot: card.querySelector(".xy-dot"),
            rx: card.querySelector("[data-x]"),
            ry: card.querySelector("[data-y]"),
            x: defaults[mode][0],
            y: defaults[mode][1],
            phase: i * 2.1,
            held: false,
            idleAfter: 0,
        };
    });

    function render(c) {
        c.dot.style.left = c.x * 100 + "%";
        c.dot.style.top = (1 - c.y) * 100 + "%";
        const [tx, ty] = fmt[c.mode](c.x, c.y);
        c.rx.textContent = tx;
        c.ry.textContent = ty;
    }

    cards.forEach((c) => {
        render(c);

        const setFromPointer = (e) => {
            const r = c.pad.getBoundingClientRect();
            c.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
            c.y = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
            render(c);
        };

        c.pad.addEventListener("pointerdown", (e) => {
            c.held = true;
            c.card.classList.add("is-held");
            c.pad.setPointerCapture(e.pointerId);
            setFromPointer(e);
        });
        c.pad.addEventListener("pointermove", (e) => {
            if (c.held) setFromPointer(e);
        });
        const release = () => {
            c.held = false;
            c.card.classList.remove("is-held");
            c.idleAfter = performance.now() + 2500; // espera antes de voltar a "flutuar"
        };
        c.pad.addEventListener("pointerup", release);
        c.pad.addEventListener("pointercancel", release);
    });

    // Movimento "idle": cada ponto desenha uma curva de Lissajous lenta
    if (!reduceMotion && cards.length) {
        let running = false;
        let last = 0;

        function tick(now) {
            if (!running) return;
            const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
            last = now;
            cards.forEach((c) => {
                if (c.held || now < c.idleAfter) return;
                c.phase += dt * 0.35;
                const tx = 0.5 + 0.38 * Math.sin(c.phase * 1.3);
                const ty = 0.5 + 0.38 * Math.sin(c.phase * 0.9 + 1.2);
                // aproxima-se suavemente da curva (sem saltos depois de largar)
                c.x += (tx - c.x) * Math.min(1, dt * 2.5);
                c.y += (ty - c.y) * Math.min(1, dt * 2.5);
                render(c);
            });
            requestAnimationFrame(tick);
        }

        const xyObserver = new IntersectionObserver((entries) => {
            const visible = entries.some((e) => e.isIntersecting);
            if (visible && !running) {
                running = true;
                last = 0;
                requestAnimationFrame(tick);
            } else if (!visible) {
                running = false;
            }
        });
        xyObserver.observe(document.querySelector(".xy-grid"));
    }
})();

/* ==========================================================================
   ABOUT & OTHER PROJECTS: revelação ao aparecer e filtro
   ========================================================================== */
(function () {
    // ---- Revelação: os elementos .reveal entram quando ficam visíveis ------
    // Voltam a animar sempre que se regressa a essa página.
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const panel = entry.target.closest(".panel");
                if (entry.isIntersecting) entry.target.classList.add("in");
                else if (panel && !panel.classList.contains("on"))
                    entry.target.classList.remove("in");
            });
        },
        { threshold: 0.12 },
    );
    document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el));

    // ---- Filtro dos projetos (All / Software / Music) ----------------------
    const filter = document.querySelector(".filter");
    if (!filter) return;
    const buttons = [...filter.querySelectorAll(".seg-btn")];
    const cards = [...document.querySelectorAll(".work-card")];
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    function applyFilter(cat) {
        filter.dataset.active = cat;
        buttons.forEach((b) =>
            b.setAttribute("aria-pressed", b.dataset.filter === cat),
        );

        cards.forEach((card) => {
            const show = cat === "all" || card.dataset.cat === cat;
            if (show && card.hidden) {
                card.hidden = false;
                if (!reduceMotion) {
                    card.classList.remove("in");
                    void card.offsetWidth;
                    requestAnimationFrame(() => card.classList.add("in"));
                } else card.classList.add("in");
            } else if (!show && !card.hidden) {
                if (reduceMotion) {
                    card.hidden = true;
                    return;
                }
                card.classList.add("leaving");
                setTimeout(() => {
                    card.classList.remove("leaving");
                    if (
                        filter.dataset.active !== "all" &&
                        card.dataset.cat !== filter.dataset.active
                    )
                        card.hidden = true;
                }, 220);
            }
        });
    }

    buttons.forEach((b) =>
        b.addEventListener("click", () => applyFilter(b.dataset.filter)),
    );
})();

/* ==========================================================================
   HOME: palavras a rodar e onda sonora animada
   ========================================================================== */
(function () {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    // ---- "I build ___" ------------------------------------------------------
    const word = document.querySelector(".rot-word");
    if (word) {
        let index = 0;
        const words = () => translations[currentLang]["rot-words"];

        // lê sempre a palavra no idioma atual (mesmo que mude a meio da animação)
        const current = () => words()[index];

        function swap() {
            if (reduceMotion) {
                word.textContent = current();
                return;
            }
            word.classList.add("out");
            setTimeout(() => {
                word.textContent = current();
                word.classList.remove("out");
                word.classList.add("pre");
                void word.offsetWidth;
                word.classList.remove("pre");
            }, 450);
        }

        setInterval(() => {
            index = (index + 1) % words().length;
            swap();
        }, 2600);

        document.addEventListener("langchange", () => {
            word.textContent = current();
        });
    }

    // ---- Onda sonora (canvas) -------------------------------------------------
    const canvas = document.querySelector(".hero-wave");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0,
        h = 0,
        running = false,
        t = 0,
        last = 0;
    let energy = 0.35, // amplitude atual
        target = 0.35; // amplitude pedida pelo rato
    let mouseX = 0.5;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const layers = [
        { freq: 1.6, speed: 0.9, amp: 1.0, alpha: 0.85, width: 1.6 },
        { freq: 2.4, speed: -0.6, amp: 0.65, alpha: 0.35, width: 1.2 },
        { freq: 3.7, speed: 1.4, amp: 0.4, alpha: 0.18, width: 1 },
    ];

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const mid = h / 2;
        layers.forEach((L) => {
            ctx.beginPath();
            for (let x = 0; x <= w; x += 2) {
                const u = x / w;
                // janela: a onda morre nas pontas e cresce perto do rato
                const edge = Math.sin(Math.PI * u);
                const focus = Math.exp(-Math.pow((u - mouseX) / 0.28, 2));
                const env = edge * (0.45 + 0.55 * focus);
                const y =
                    mid +
                    Math.sin(u * Math.PI * 2 * L.freq + t * L.speed) *
                        Math.sin(u * Math.PI * 7 - t * 0.5) *
                        env *
                        L.amp *
                        energy *
                        (h * 0.45);
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(255,255,255,${L.alpha})`;
            ctx.lineWidth = L.width;
            ctx.stroke();
        });
    }

    function tick(now) {
        if (!running) return;
        const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
        last = now;
        t += dt * 2;
        energy += (target - energy) * Math.min(1, dt * 3);
        target += (0.35 - target) * Math.min(1, dt * 0.8); // volta ao repouso
        draw();
        requestAnimationFrame(tick);
    }

    // o rato "excita" a onda (como um sinal a entrar)
    document.getElementById("profile").addEventListener("pointermove", (e) => {
        const r = canvas.getBoundingClientRect();
        mouseX = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        target = Math.min(1, target + 0.04);
    });

    window.addEventListener("resize", () => {
        resize();
        if (!running) draw();
    });

    const observer = new IntersectionObserver((entries) => {
        const visible = entries[0].isIntersecting;
        if (visible) {
            resize();
            if (reduceMotion) {
                draw();
            } else if (!running) {
                running = true;
                last = 0;
                requestAnimationFrame(tick);
            }
        } else {
            running = false;
        }
    });
    observer.observe(canvas);
})();

/* ==========================================================================
   CONTACT: copiar email
   ========================================================================== */
(function () {
    const btn = document.querySelector(".copy-btn");
    if (!btn) return;
    let timer;

    async function copy(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // alternativa para browsers/contextos sem Clipboard API
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand("copy");
            ta.remove();
            return ok;
        }
    }

    btn.addEventListener("click", async () => {
        const ok = await copy(btn.dataset.copy);
        if (!ok) return;
        const label = btn.querySelector(".copy-label");
        btn.classList.add("copied");
        label.textContent = translations[currentLang].copied;
        clearTimeout(timer);
        timer = setTimeout(() => {
            btn.classList.remove("copied");
            label.textContent = translations[currentLang].copy;
        }, 1800);
    });
})();
