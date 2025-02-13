// because of same source rule, it is not possible to add fetch translations from json files
const switchButton = document.getElementById("language-switch");
let currentLanguage = "de"; // Default language
const savedLanguage = localStorage.getItem("language");
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

function updateLanguage(language) {
    currentLanguage = language;
    switchButton.textContent = language === "en" ? "DE" : "EN";
    // Find all elements with translatable content
    document.querySelectorAll("[data-i18n]").forEach((e) => {
        const key = e.getAttribute("data-i18n");
        e.textContent = translations[language][key] || key;
    });
    // Display page1 and hide page2 when de is selected
    const page1=document.getElementById('page1');
    const page2=document.getElementById('page2');
    if (language==="en") {
        page1.style.display='none';
        page2.style.display='block';
    } else if (language==="de") {
        page1.style.display='block';
        page2.style.display='none';
    }
    // Store the user's preference in localStorage
    // localStorage.setItem("language", language);
}

async function loadHTML(id, file) {
    let response = await fetch(file);
    let text = await response.text();
    document.getElementById(id).innerHTML = text;
}

document.addEventListener("DOMContentLoaded", () => {
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    }

    // Toggle the language when the button is clicked
    switchButton.addEventListener("click", () => {
        const newLanguage = currentLanguage === "en" ? "de" : "en";
        updateLanguage(newLanguage);
    });
    loadHTML("projects", "projects.html");
});

function downloadPDF() {
    const element = document.getElementById('page1');
    // const element = document.body;
    const opt = {
        margin: 0,
        filename: 'My_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
}
// document.getElementById('downloadPDF').addEventListener('click', downloadPDF);

// python3 -m http.server 8000