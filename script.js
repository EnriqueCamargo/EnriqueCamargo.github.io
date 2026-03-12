const translations = {
    es: {
        title: "Portafolio | Sergio Enrique Camargo Ruiz",
        tagline: "Desarrollador Backend & Técnico en redes",
        nav_about: "Acerca de Mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_certs: "Certificaciones",
        about_title: "Acerca de Mí",
        about_p1: "Desarrollador backend con un enfoque en la arquitectura de sistemas escalables y la optimización de bases de datos.",
        about_p2: "Mi principal motivación es transformar requisitos funcionales en soluciones robustas y seguras.",
        cv_button: "Descargar CV",
        cv_file: "archives/CV_EnriqueCamargo_Esp.pdf", // Ruta para español
        skills_title: "Habilidades Técnicas",
        skills_lang: "Lenguajes",
        skills_frameworks: "Frameworks & Herramientas",
        skills_platforms: "Plataformas e IDEs",
        skills_db: "Bases de Datos",
        projects_title: "Proyectos Clave",
        proj1_name: "Sistema de Encuestas",
        proj2_name: "Gestión de Productos",
        link_repo: "Repositorio",
        certs_title: "Certificaciones & Reconocimientos",
        download_pdf: "Descargar PDF",
        footer_p1: "&copy; 2025 Sergio Enrique Camargo Ruiz."
    },
    en: {
        title: "Portfolio | Sergio Enrique Camargo Ruiz",
        tagline: "Backend Developer & Network Technician",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_certs: "Certifications",
        about_title: "About Me",
        about_p1: "Backend developer focused on scalable system architecture and database optimization.",
        about_p2: "My main motivation is to transform functional requirements into robust and secure solutions.",
        cv_button: "Download CV",
        cv_file: "archives/CV_EnriqueCamargo_Eng.pdf", // Ruta para inglés
        skills_title: "Technical Skills",
        skills_lang: "Languages",
        skills_frameworks: "Frameworks & Tools",
        skills_platforms: "Platforms & IDEs",
        skills_db: "Databases",
        projects_title: "Key Projects",
        proj1_name: "Survey System",
        proj2_name: "Product Management",
        link_repo: "Repository",
        certs_title: "Certifications & Recognitions",
        download_pdf: "Download PDF",
        footer_p1: "&copy; 2025 Sergio Enrique Camargo Ruiz."
    }
};
const setLanguage = (lang) => {
    console.log("Cambiando a:", lang); 
    
    // Traducir textos
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Actualizar CV
    const cvButton = document.getElementById('cv-download');
    if (cvButton && translations[lang].cv_file) {
        cvButton.setAttribute('href', translations[lang].cv_file);
    }

    // Actualizar clase activa en botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if(btn) btn.classList.add('active');

    localStorage.setItem('portfolioLang', lang);
};

// 3. Listener principal
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado correctamente");

    // Delegación de eventos (más robusto que iterar uno por uno)
    document.getElementById('language-switcher').addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        }
    });

    // Inicialización
    const savedLang = localStorage.getItem('portfolioLang') || 'es';
    setLanguage(savedLang);
});