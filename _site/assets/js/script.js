document.addEventListener('DOMContentLoaded', () => {

    // --- Use data injected by Eleventy ---
    const siteData = window.portfolioData;

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
        if (!siteData) return; // Safety check

        htmlElement.setAttribute('lang', lang); // Update page lang attribute
        document.title = siteData[`title_${lang}`] || siteData.title_sv; // Update title tag

        // Map keys from config.yml/JSON to the data-lang-key attributes
        // This is a simplified mapping; a more complex site might need a more robust solution
        const keyMap = {
            pageTitle: `title_${lang}`, // Handled above
            navHome: `hero_section.title_${lang}`, // Example - map nav keys if needed, or hardcode simple ones
            navAbout: `about_section.title_${lang}`,
            navExperience: `experience_section.title_${lang}`,
            navEducation: `education_section.title_${lang}`,
            navContact: `contact_section.title_${lang}`,

            heroTitle: `hero_section.title_${lang}`,
            heroSubtitle: `hero_section.subtitle_${lang}`,
            heroContactBtn: `hero_section.contact_btn_${lang}`,
            heroCvBtn: `hero_section.cv_btn_${lang}`,

            aboutTitle: `about_section.title_${lang}`,
            aboutText1: `about_section.text1_${lang}`,
            aboutText2: `about_section.text2_${lang}`,
            skillsTitle: `about_section.skills_title_${lang}`,

            experienceTitle: `experience_section.title_${lang}`,
            // Experience items handled below

            educationTitle: `education_section.title_${lang}`,
            // Education items handled below
            languagesTitle: `education_section.lang_title_${lang}`,
            // Languages handled below

            contactTitle: `contact_section.title_${lang}`,
            contactIntro: `contact_section.intro_${lang}`,
            contactEmailLabel: `contact_section.email_label_${lang}`,
            contactPhoneLabel: `contact_section.phone_label_${lang}`,
            contactLinkedInLabel: `contact_section.linkedin_label_${lang}`,
            contactLinkedInLinkText: `contact_section.linkedin_link_text_${lang}`,
            contactLocationLabel: `contact_section.location_label_${lang}`,
            contactLocationText: `contact_section.location_text_${lang}`,

            footerRights: `footer_section.rights_${lang}`
        };

        // --- Update Simple Text Elements ---
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang-key');

            // Find the corresponding data path from keyMap
            const dataPath = keyMap[key];
            if (dataPath) {
                // Simple dot notation access (needs improvement for nested arrays)
                const value = dataPath.split('.').reduce((o, i) => (o ? o[i] : undefined), siteData);
                if (value !== undefined) {
                     el.innerHTML = value;
                } else {
                     console.warn(`Data not found for key: ${key} (path: ${dataPath})`);
                }
            }
            // Handle specific list types below if not covered by simple map
        });


        // --- Update Lists (Skills, Experience, Education, Languages) ---
        // Skills
        const skillsList = document.querySelector('.skills');
        if (skillsList && siteData.about_section?.skills) {
            skillsList.innerHTML = ''; // Clear existing
            siteData.about_section.skills.forEach((item, index) => {
                const li = document.createElement('li');
                li.setAttribute('data-lang-key', `skill_${index + 1}`); // Keep key for potential future use
                li.innerHTML = item[`skill_${lang}`];
                skillsList.appendChild(li);
            });
        }

        // Experience
        const expItems = document.querySelectorAll('#experience .timeline-item');
         if (expItems.length === siteData.experience_section?.jobs?.length) {
            siteData.experience_section.jobs.forEach((job, index) => {
                const itemEl = expItems[index];
                itemEl.querySelector('h3').innerHTML = job[`title_${lang}`];
                itemEl.querySelector('.dates').innerHTML = job[`dates_${lang}`];
                const descList = itemEl.querySelector('ul');
                descList.innerHTML = ''; // Clear
                job[`desc_${lang}`].forEach(descItem => {
                    const li = document.createElement('li');
                    li.innerHTML = descItem;
                    descList.appendChild(li);
                });
            });
        }

         // Education
        const eduItems = document.querySelectorAll('#education .timeline-item');
         if (eduItems.length === siteData.education_section?.educations?.length) {
             siteData.education_section.educations.forEach((edu, index) => {
                const itemEl = eduItems[index];
                itemEl.querySelector('h3').innerHTML = edu[`title_${lang}`];
                itemEl.querySelector('.dates').innerHTML = edu[`dates_${lang}`];
                 const detailsEl = itemEl.querySelector('.details');
                if (detailsEl && edu[`details_${lang}`]) {
                     detailsEl.innerHTML = edu[`details_${lang}`];
                     detailsEl.style.display = 'block'; // Ensure visible
                } else if (detailsEl) {
                    detailsEl.style.display = 'none'; // Hide if no details
                }
            });
        }

        // Languages
        const langInfoDiv = document.querySelector('.language-info');
        if (langInfoDiv && siteData.education_section?.languages) {
            langInfoDiv.innerHTML = ''; // Clear
            siteData.education_section.languages.forEach((language, index) => {
                const p = document.createElement('p');
                p.innerHTML = `<strong data-lang-key="lang${index+1}Name">${language[`name_${lang}`]}:</strong> <span data-lang-key="lang${index+1}Level">${language[`level_${lang}`]}</span>`;
                langInfoDiv.appendChild(p);
            });
        }


        // --- Update Specific Attributes ---
        // Update CV download link
        if (cvDownloadLink && siteData[`cv_${lang}`]) {
            cvDownloadLink.href = siteData[`cv_${lang}`];
        } else if (cvDownloadLink) {
             cvDownloadLink.href="#"; // Fallback
        }


        // Update active language button style
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.id === `lang-${lang}`);
        });
    };

    // --- Event Listeners ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.id.split('-')[1];
            localStorage.setItem('preferredLang', selectedLang); // Save preference
            updateText(selectedLang);
             // Close mobile menu if open after language change
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
        link.addEventListener('click', (e) => {
            // Only close if it's an internal link and menu is active
            if (link.getAttribute('href').startsWith('#') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                // Optional: Smooth scroll to section after closing menu if default is prevented
                // const targetId = link.getAttribute('href');
                // const targetElement = document.querySelector(targetId);
                // if (targetElement) {
                //   e.preventDefault(); // Prevent default jump
                //   targetElement.scrollIntoView({ behavior: 'smooth' });
                // }
            }
        });
    });

    // --- Initial Load ---
    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Set initial language (check storage, default to 'sv')
    const preferredLang = localStorage.getItem('preferredLang') || 'sv';
    updateText(preferredLang);

}); // End DOMContentLoaded