// because of same source rule, it is not possible to add fetch translations from json files
const translations = {
    en: {
        welcome: "Welcome",
        projects: "Projects",
        cv: "CV",
        contact: "Contact",
        hello: "Hello, I am Menglin Li",
        developer: "A Python Developer",
        h2Project: "Here are my projects",
        together:"Let us work together",
        call:"Call me",
        // Add more translations for all content
    },
    de: {
        welcome: "Willkommen",
        projects: "Projekte",
        cv: "CV",
        contact: "Kontakt",
        hello: "Hallo, Ich bin Menglin Li",
        developer: "Ein Python Entwickler",
        h2Project:"Das sind meine Projekte",
        together:"Lass uns zusammenarbeiten",
        call:"Ruf mich an",
        // Add more translations
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const switchButton = document.getElementById("language-switch");
    let currentLanguage = "de"; // Default language

    function updateLanguage(language) {
        currentLanguage = language;
        switchButton.textContent = language === "en" ? "DE" : "EN";
        // Find all elements with translatable content
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[language][key] || key;
        });
        // Display page1 and hide page2 when de is selected
        const page1=document.getElementById('page1');
        const page2=document.getElementById('page2');
        if (language==="en") {
            page1.style.display='none';
            page2.style.display='grid';
        } else if (language==="de") {
            page1.style.display='grid';
            page2.style.display='none';
        }
        // Store the user's preference in localStorage
        // localStorage.setItem("language", language);
    }

    // Load the saved language preference
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    }

    // Toggle the language when the button is clicked
    switchButton.addEventListener("click", () => {
        const newLanguage = currentLanguage === "en" ? "de" : "en";
        updateLanguage(newLanguage);
    });
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// loadComponent('navbar', './section/navbar.html');