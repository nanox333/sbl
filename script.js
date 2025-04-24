document.addEventListener('DOMContentLoaded', () => {

    // --- Language Data ---
    const languages = {
        sv: {
            pageTitle: "Samuel B Liljenberg | Ekonomistudent",
            navHome: "Hem",
            navAbout: "Om Mig",
            navExperience: "Erfarenhet",
            navEducation: "Utbildning",
            navContact: "Kontakt",
            heroTitle: "Samuel B Liljenberg",
            heroSubtitle: "Engagerad ekonomistudent med fokus på Internationell Marknadsföring och erfarenhet inom logistik, service och ledarskap.",
            heroContactBtn: "Kontakta Mig",
            heroCvBtn: "Ladda ner CV",
            cvFile: "Samuel_Liljenberg_CV_SV.pdf",
            aboutTitle: "Om Mig",
            aboutText1: "Jag är en strukturerad och engagerad ekonomistudent med inriktning mot internationell marknadsföring vid Kristianstad Högskola. Jag har gedigen erfarenhet från logistik, service och ledarskap. Mina tidigare roller som lageransvarig och bemanningskonsult har utvecklat mitt sinne för noggrannhet och effektivitet.",
            aboutText2: "Jag är nyfiken, driven och trivs bäst i roller där jag får ta eget ansvar och bidra aktivt till teamets framgång. Genom mina förtroendeuppdrag som ordförande för studentkommittén och förtroendevald inom Försvarsmakten har jag stärkt mina ledaregenskaper samt min förmåga att kommunicera och samarbeta med olika typer av människor.",
            skillsTitle: "Kärnkompetenser",
            skillAnalytical: "Analytisk förmåga",
            skillSocial: "Social kompetens",
            skillCreative: "Kreativitet",
            skillProblemSolving: "Problemlösningsförmåga",
            skillTeamPlayer: "Lagspelare",
            skillLeadership: "Ledarskapsförmåga",
            skillFlexible: "Flexibilitet",
            skillPunctual: "Punktlig och ansvarstagande",
            experienceTitle: "Erfarenhet",
            exp1Title: "Lageransvarig logistik",
            exp1Dates: "Juni 2024 - September 2024",
            exp1Desc1: "Lageransvarig för indirekt material",
            exp1Desc2: "Ansvarig för inkommande leveranser",
            exp1Desc3: "Servade produktion samt utlastning med material",
            exp2Title: "Butiksansvarig och butikssäljare",
            exp2Dates: "Februari 2024 - Juni 2024",
            exp2Desc1: "Ansvar för kolonial- och färskvarupåfyllning",
            exp2Desc2: "Ansvar för prissättning",
            exp2Desc3: "Kassahantering",
            exp2Desc4: "Kundservice",
            exp3Title: "Truckförare, bemanningskonsult",
            exp3Dates: "Februari 2023 - Augusti 2023",
            exp3Desc1: "Servade sammansättning, presslinjer och utlastning med material",
            exp4Title: "Bartender och servitör",
            exp4Dates: "Juni 2021 - Juli 2021",
            exp4Desc1: "Ansvar för Veckans drink, skapade nya drinkar",
            exp5Title: "Aktivitetsledare och marknadsförare",
            exp5Dates: "Juni 2020 - Augusti 2020",
            exp5Desc1: "Skapade marknadsföringsmaterial om cykel- och vandringsleder (film, foto, redigering)",
            educationTitle: "Utbildning",
            edu1Title: "Kandidatexamen | Ekonomi",
            edu1Dates: "2024 - 2027 (Pågående)", // Added ongoing status here
            edu1Details: "Inriktning Internationell Marknadsföring",
            edu2Title: "Stadsbyggnad, stadsutveckling och planering",
            edu3Title: "Kurs 7,5 hp | Ledarskap",
            edu4Title: "Gruppbefälsutbildning | Ledarskap",
            edu5Title: "Grundläggande Militär Utbildning",
            edu6Title: "Gymnasieexamen | Samhällsvetenskapsprogrammet",
            languagesTitle: "Språk",
            langSwedish: "Svenska:",
            langSwedishLevel: "Modersmål",
            langEnglish: "Engelska:",
            langEnglishLevel: "Avancerad nivå",
            contactTitle: "Kontakta Mig",
            contactIntro: "Intresserad av att diskutera möjligheter eller bara säga hej? Hör gärna av dig!",
            contactEmailLabel: "E-post:",
            contactPhoneLabel: "Telefon:",
            contactLinkedInLabel: "LinkedIn:", // New Key
            contactLinkedInLinkText: "Besök Profil", // New Key
            contactLocationLabel: "Plats:",
            footerRights: "Alla rättigheter förbehållna."
        },
        en: {
            pageTitle: "Samuel B Liljenberg | Economics Student",
            navHome: "Home",
            navAbout: "About Me",
            navExperience: "Experience",
            navEducation: "Education",
            navContact: "Contact",
            heroTitle: "Samuel B Liljenberg",
            heroSubtitle: "Engaged economics student focusing on International Marketing with experience in logistics, service, and leadership.",
            heroContactBtn: "Contact Me",
            heroCvBtn: "Download CV",
            cvFile: "Samuel_Liljenberg_CV_EN.pdf",
            aboutTitle: "About Me",
            aboutText1: "I am a structured and engaged economics student focusing on international marketing at Kristianstad University. I have solid experience in logistics, service, and leadership. My previous roles as a logistics manager and staffing consultant have developed my sense for accuracy and efficiency.",
            aboutText2: "I am curious, driven, and thrive best in roles where I can take initiative and actively contribute to the team's success. Through my positions of trust as chairman of the student committee and elected representative in the Swedish Armed Forces, I have strengthened my leadership skills and my ability to communicate and collaborate with different types of people.",
            skillsTitle: "Core Competencies",
            skillAnalytical: "Analytical ability",
            skillSocial: "Social competence",
            skillCreative: "Creativity",
            skillProblemSolving: "Problem-solving ability",
            skillTeamPlayer: "Team player",
            skillLeadership: "Leadership ability",
            skillFlexible: "Flexibility",
            skillPunctual: "Punctual and responsible",
            experienceTitle: "Experience",
            exp1Title: "Warehouse Logistics Coordinator",
            exp1Dates: "June 2024 - September 2024",
            exp1Desc1: "Warehouse logistics coordinator for indirect materials",
            exp1Desc2: "Responsible for incoming deliveries",
            exp1Desc3: "Serviced production and handled material loading",
            exp2Title: "Sales Lead and Key Holder",
            exp2Dates: "February 2024 - June 2024",
            exp2Desc1: "Responsible for grocery and fresh produce replenishment",
            exp2Desc2: "Responsible for pricing",
            exp2Desc3: "Cash handling",
            exp2Desc4: "Customer service",
            exp3Title: "Forklift Operator, Staffing Consultant",
            exp3Dates: "February 2023 - August 2023",
            exp3Desc1: "Serviced assembly, press lines, and loading with material",
            exp4Title: "Bartender and Waiter",
            exp4Dates: "June 2021 - July 2021",
            exp4Desc1: "Responsible for 'Drink of the Week', created new drinks",
            exp5Title: "Activity Leader and Marketer",
            exp5Dates: "June 2020 - August 2020",
            exp5Desc1: "Created marketing materials for cycling and hiking trails (film, photo, editing)",
            educationTitle: "Education",
            edu1Title: "Bachelor's Degree | Economics",
            edu1Dates: "2024 - 2027 (Ongoing)", // Added ongoing status here
            edu1Details: "Specialization in International Marketing",
            edu2Title: "Urban Planning, Urban Development and Planning",
            edu3Title: "Course 7.5 ECTS | Leadership",
            edu4Title: "Group Commander Training | Leadership",
            edu5Title: "Basic Military Training",
            edu6Title: "Upper Secondary Diploma | Social Science Programme",
            languagesTitle: "Languages",
            langSwedish: "Swedish:",
            langSwedishLevel: "Native",
            langEnglish: "English:",
            langEnglishLevel: "Advanced",
            contactTitle: "Contact Me",
            contactIntro: "Interested in discussing opportunities or just saying hello? Feel free to reach out!",
            contactEmailLabel: "Email:",
            contactPhoneLabel: "Phone:",
            contactLinkedInLabel: "LinkedIn:", // New Key
            contactLinkedInLinkText: "View Profile", // New Key
            contactLocationLabel: "Location:",
            footerRights: "All rights reserved."
        }
    };

    // --- Elements ---
    const langButtons = document.querySelectorAll('.lang-switch button');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const htmlElement = document.documentElement;
    const cvDownloadLink = document.getElementById('cv-download-link');
    const currentYearSpan = document.getElementById('current-year');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav');

    // --- Functions ---
    const updateText = (lang) => {
        if (!languages[lang]) return;

        htmlElement.setAttribute('lang', lang);

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (languages[lang][key] !== undefined) { // Check if key exists
                 // Use innerHTML to preserve potential simple styling tags inside translations if ever needed
                el.innerHTML = languages[lang][key];
            } else if (el.tagName === 'TITLE') {
                // Handle title tag separately if key is missing but exists in other lang
                 const otherLang = lang === 'sv' ? 'en' : 'sv';
                 if (languages[otherLang] && languages[otherLang][key]) {
                     el.innerHTML = languages[otherLang][key]; // Fallback title
                 }
            }
        });

        // Update CV download link specifically
        if (cvDownloadLink && languages[lang].cvFile) {
            cvDownloadLink.href = languages[lang].cvFile;
        } else if (cvDownloadLink) {
            // Fallback if CV file key is missing for the current language
             const otherLang = lang === 'sv' ? 'en' : 'sv';
             if (languages[otherLang] && languages[otherLang].cvFile) {
                 cvDownloadLink.href = languages[otherLang].cvFile;
             } else {
                 cvDownloadLink.href="#"; // Or hide it
             }
        }


        // Update active button style
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${lang}`);
        });
    };

    // --- Event Listeners ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.id.split('-')[1];
            localStorage.setItem('preferredLang', selectedLang);
            updateText(selectedLang);
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Mobile Menu Toggle
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Only close if it's an internal link and menu is active
            if (link.getAttribute('href').startsWith('#') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // --- Initial Load ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const preferredLang = localStorage.getItem('preferredLang') || 'sv'; // Default to 'sv'
    updateText(preferredLang);

}); // End DOMContentLoaded