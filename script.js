const translations = {
    es: {
        title: "Portafolio | Sergio Enrique Camargo Ruiz",
        tagline: "Desarrollador Backend & Técnico en redes",
        nav_about: "Acerca de Mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_certs: "Certificaciones",
        about_title: "Acerca de Mí",
        about_p1: "Desarrollador backend con un enfoque en la arquitectura de sistemas escalables y la optimización de bases de datos. Actualmente, curso el 4to cuatrimestre de Ing. Tecnologías de la Información en la Universidad Politécnica de Sinaloa. Disfruto de resolver problemas complejos y aplicar patrones de diseño para escribir código limpio y eficiente.",
        about_p2: "Mi principal motivación es transformar requisitos funcionales en soluciones robustas y seguras. Mi experiencia académica se centra en el diseño de APIs REST, bases de datos relacionales y la contenerización con Docker.",
        cv_button: "Descargar CV",
        skills_title: "Habilidades Técnicas",
        skills_lang: "Lenguajes",
        skills_frameworks: "Frameworks & Herramientas",
        skills_db: "Bases de Datos & Cloud",
        projects_title: "Proyectos Clave",
        proj1_name: "Sistema de Encuestas",
        proj1_desc: "Sistema de encuestas enfocado en la recopilación de datos de los alumnos.",
        proj1_challenge: "Reto clave: El correcto uso de los métodos REST para así poder crear y consultar encuestas de forma eficiente.",
        proj2_name: "Gestión de Productos",
        proj2_desc: "API centrada en la gestión de un inventario de un sistema de ventas.",
        proj2_challenge: "Reto clave: La correcta administración de productos y manejo de estatus para la compra/venta.",
        link_repo: "Repositorio",
        certs_title: "Certificaciones & Reconocimientos",
        download_pdf: "Descargar PDF",
        footer_p1: "&copy; 2025 Sergio Enrique Camargo Ruiz.",
    },
    en: {
        title: "Portfolio | Sergio Enrique Camargo Ruiz",
        tagline: "Backend Developer & Network Technician",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_certs: "Certifications",
        about_title: "About Me",
        about_p1: "Backend developer focused on scalable system architecture and database optimization. I am currently in the 4th trimester of IT Engineering at the Universidad Politécnica de Sinaloa. I enjoy solving complex problems and applying design patterns to write clean and efficient code.",
        about_p2: "My main motivation is to transform functional requirements into robust and secure solutions. My academic experience is centered on designing REST APIs, relational databases, and containerization with Docker.",
        cv_button: "Download CV",
        skills_title: "Technical Skills",
        skills_lang: "Languages",
        skills_frameworks: "Frameworks & Tools",
        skills_db: "Databases & Cloud",
        projects_title: "Key Projects",
        proj1_name: "Survey System",
        proj1_desc: "Survey system focused on collecting student data.",
        proj1_challenge: "Key Challenge: Correct use of REST methods to efficiently create and consult surveys.",
        proj2_name: "Product Management",
        proj2_desc: "API centered on managing the inventory of a sales system.",
        proj2_challenge: "Key Challenge: Correct administration of products and management of status for purchase/sale.",
        link_repo: "Repository",
        certs_title: "Certifications & Recognitions",
        download_pdf: "Download PDF",
        footer_p1: "&copy; 2025 Sergio Enrique Camargo Ruiz.",
    },
    fr: {
        title: "Portefeuille | Sergio Enrique Camargo Ruiz",
        tagline: "Développeur Backend & Technicien Réseaux",
        nav_about: "À Propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_certs: "Certifications",
        about_title: "À Propos de Moi",
        about_p1: "Développeur backend axé sur l'architecture des systèmes évolutifs et la optimisation des bases de données. Je suis actuellement au 4ème trimestre d'Ingénierie Informatique à l'Université Polytechnique de Sinaloa. J'aime résoudre des problèmes complexes et appliquer des patrons de conception pour écrire du code propre et efficace.",
        about_p2: "Ma principale motivation est de transformer les exigences fonctionnelles en solutions robustes et sécurisées. Mon expérience académique se concentre sur la conception d'APIs REST, les bases de données relationnelles et la conteneurisation avec Docker.",
        cv_button: "Télécharger CV",
        skills_title: "Compétences Techniques",
        skills_lang: "Langages",
        skills_frameworks: "Frameworks & outils",
        skills_db: "Bases de Données & Cloud",
        projects_title: "Projets Clés",
        proj1_name: "Système de Sondage",
        proj1_desc: "Système de sondage axé sur la collecte de données des étudiants.",
        proj1_challenge: "Défi Clé: Utilisation correcte des méthodes REST pour créer et consulter efficacement des sondages.",
        proj2_name: "Gestion de Produits",
        proj2_desc: "API centrée sur la gestion de l'inventaire d'un sistema de vente.",
        proj2_challenge: "Défi Clé: Administration correcte des produits et gestion des statuts d'achat/vente.",
        link_repo: "Répertoire",
        certs_title: "Certifications & Reconnaissances",
        download_pdf: "Télécharger PDF",
        footer_p1: "&copy; 2025 Sergio Enrique Camargo Ruiz.",
    }
};

const setLanguage = (lang) => {
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = translations[lang].title;
    }

    
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

    
    localStorage.setItem('portfolioLang', lang);
};


document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

   
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const lang = event.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

   
    const savedLang = localStorage.getItem('portfolioLang') || 'es';
    setLanguage(savedLang);
});