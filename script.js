// Dicionário de Traduções
const translations = {
    en: {
        // Navegação
        "nav-home": "Home",
        "nav-about": "About",
        "nav-alma": "ALMA Plugin",
        "nav-projects": "Other Projects",
        "nav-contact": "Contact",

        // Profile
        role: "Software Developer & Audio Engineer",

        // About
        "about-subtitle": "Get to know more",
        "about-title": "About Me",
        "edu-title": "Education",
        "edu-msc": "MSc in Sound Design and Music Computing",
        "edu-bsc": "BSc in Computer Science and Engineering",
        "exp-title": "Experience",
        "exp-role": "Game Development & Audio",
        "exp-desc":
            "<ul style='list-style: none; padding: 0; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; color: #a1a1aa;'><li>• Game Dev at NeuroInova</li><li>• Audio Plugin Dev at Coletivo Criativo</li></ul>",
        "interests-title": "Interests",
        "interests-role": "Music & Audio Tools",
        "interests-desc":
            "<ul style='list-style: none; padding: 0; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; color: #a1a1aa;'><li>• Music Producer</li><li>• Guitarist in cover & event bands</li></ul>",
        "about-p1":
            "During my BSc internship at <strong>NeuroInova</strong>, I worked as a Game Developer focusing on modernizing legacy games from CreateJS to Konva.js. My role involved conducting research on unit testing tools, debugging, implementing new levels, and executing the complete tech-stack conversion of core game mechanics.",
        "about-p2":
            "Currently, I am focused on the active development of <strong>ALMA</strong>, a native audio software project initiated during my master's internship at <strong>Coletivo Criativo</strong>.",

        // Featured Plugin (ALMA)
        "alma-subtitle": "Featured Project",
        "alma-title": "ALMA Plugin",
        "alma-desc":
            '<strong>ALMA</strong> is an all-in-one audio plugin developed in C++ and JUCE. Each of its 5 core macro modules handles a parallel chain of 3 independent effects, allowing users to toggle, stack, and fine-tune individual sub-parameters. It features an adaptive UI layer ("ALMA mode") that translates standard DSP parameters into intuitive terminology for beginners. It includes a factory bank and native custom preset serialization.',
        "alma-video-caption":
            'A music production remake of "Magia" by Pedro Gonçalves, demonstrating some of the sound shaping capabilities of the ALMA audio plugin.',

        // Other Projects
        "projects-subtitle": "Explore My",
        "projects-title": "Other Projects",
        "ttt-title": "Ultimate Tic-Tac-Toe",
        "ttt-desc":
            "A strategic twist on the classic game built with JavaScript.",
        "re-title": "Real Estate Website",
        "re-desc": "Web platform for property listings and management.",
        "ag-title": "Animals Game",
        "ag-desc": "Interactive project focused on core game logic.",

        // Contact
        "contact-title": "Contact",

        // Footer
        "footer-rights": "© 2026 Tiago Marques. All rights reserved.",
    },
    pt: {
        // Navegação
        "nav-home": "Início",
        "nav-about": "Sobre Mim",
        "nav-alma": "Plugin ALMA",
        "nav-projects": "Outros Projetos",
        "nav-contact": "Contacto",

        // Profile
        role: "Engenheiro Informático & Engenheiro de Áudio",

        // About
        "about-subtitle": "Conhece mais",
        "about-title": "Sobre Mim",
        "edu-title": "Educação",
        "edu-msc": "Mestrado em Computação Musical e Design de Som",
        "edu-bsc": "Licenciatura em Engenharia Informática",
        "exp-title": "Experiência",
        "exp-role": "Desenvolvimento de Jogos & Áudio",
        "exp-desc":
            "<ul style='list-style: none; padding: 0; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; color: #a1a1aa;'><li>• Game Dev na NeuroInova</li><li>• Dev de Plugins no Coletivo Criativo</li></ul>",
        "interests-title": "Interesses",
        "interests-role": "Música & Ferramentas de Áudio",
        "interests-desc":
            "<ul style='list-style: none; padding: 0; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; color: #a1a1aa;'><li>• Produtor Musical</li><li>• Guitarrista em festas de baile</li></ul>",
        "about-p1":
            'Durante o meu estágio da licenciatura na <strong>NeuroInova</strong>, trabalhei como "Game Developer" focado na modernização de jogos de CreateJS para Konva.js. As minhas funções incluíram investigação de ferramentas de testes unitários, depuração, implementação de novos níveis e conversão completa da arquitetura do jogo.',
        "about-p2":
            "Atualmente, estou focado no desenvolvimento do <strong>ALMA</strong>, um software de áudio que teve origem no meu estágio curricular no <strong>Coletivo Criativo</strong> durante o mestrado.",

        // Featured Plugin (ALMA)
        "alma-subtitle": "Projeto em Destaque",
        "alma-title": "Plugin ALMA",
        "alma-desc":
            '<strong>ALMA</strong> é um plugin de processamento de áudio desenvolvido em C++ e JUCE. Cada um dos seus 5 módulos macro gere uma cadeia paralela de 3 efeitos independentes, permitindo aos utilizadores alternar, acumular e ajustar sub-parâmetros individuais. Apresenta uma camada de UI adaptativa ("Modo ALMA") que traduz parâmetros padrão de DSP para uma terminologia intuitiva para iniciantes. Inclui presets de fábrica e serialização nativa de presets personalizados.',
        "alma-video-caption":
            'Remake de produção musical do tema "Magia" de Pedro Gonçalves, demonstrando algumas das capacidades de modelação de som do plugin ALMA.',

        // Other Projects
        "projects-subtitle": "Explora os Meus",
        "projects-title": "Outros Projetos",
        "ttt-title": "Ultimate Tic-Tac-Toe",
        "ttt-desc":
            "Uma versão estratégica do jogo clássico construída em JavaScript.",
        "re-title": "Site Imobiliário",
        "re-desc": "Plataforma web para listagem e gestão de imóveis.",
        "ag-title": "Jogo dos Animais",
        "ag-desc": "Projeto interativo focado na lógica do jogo.",

        // Contact
        "contact-title": "Contacto",

        // Footer
        "footer-rights": "© 2026 Tiago Marques. Todos os direitos reservados.",
    },
};

let currentLang = "en";

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "pt" : "en";

    // Atualiza o texto do botão para o idioma atual
    const textSpans = document.querySelectorAll(".lang-text");
    textSpans.forEach(
        (span) => (span.textContent = currentLang === "pt" ? "PT" : "EN"),
    );

    // Traduz todos os elementos com o atributo data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
}
