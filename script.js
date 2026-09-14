// Conmutador de Modo Oscuro / Claro
function toggleTheme() {
    const body = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '☀️';
    } else {
        body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '🌙';
    }
}

// Conmutador de Idioma Cíclico (EN -> ES -> ZH)
let currentLang = 'en';

function toggleLang() {
    const enElements = document.querySelectorAll('.lang-en');
    const esElements = document.querySelectorAll('.lang-es');
    const zhElements = document.querySelectorAll('.lang-zh');
    const langBtn = document.getElementById('langToggle');

    // Ocultar todos
    enElements.forEach(el => el.style.display = 'none');
    esElements.forEach(el => el.style.display = 'none');
    zhElements.forEach(el => el.style.display = 'none');

    if (currentLang === 'en') {
        esElements.forEach(el => el.style.display = 'block');
        currentLang = 'es';
        if (langBtn) langBtn.innerText = '🌐 ES';
    } else if (currentLang === 'es') {
        zhElements.forEach(el => el.style.display = 'block');
        currentLang = 'zh';
        if (langBtn) langBtn.innerText = '🌐 中文';
    } else {
        enElements.forEach(el => el.style.display = 'block');
        currentLang = 'en';
        if (langBtn) langBtn.innerText = '🌐 EN';
    }

    // Actualizar el texto del botón de donación según el idioma activo
    updateDonateButtonText();
}

// Actualizar texto del botón de donación
function updateDonateButtonText() {
    const donateText = document.getElementById('donateBtnText');
    if (!donateText) return;

    if (currentLang === 'es') {
        donateText.innerText = '☕ Donar';
    } else if (currentLang === 'zh') {
        donateText.innerText = '☕ 打赏';
    } else {
        donateText.innerText = '☕ Donate';
    }
}

// Inserción dinámica del botón de donación al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('donateBtn')) return;

    const donateBtn = document.createElement('a');
    donateBtn.id = 'donateBtn';
    donateBtn.href = 'https://buymeacoffee.com/ing_arnoldo_coronado';
    donateBtn.target = '_blank';
    donateBtn.rel = 'noopener noreferrer';
    donateBtn.className = 'donate-btn';
    
    const donateText = document.createElement('span');
    donateText.id = 'donateBtnText';
    donateText.innerText = '☕ Donate';
    donateBtn.appendChild(donateText);

    const targetContainer = document.querySelector('nav') || document.querySelector('header');
    if (targetContainer) {
        targetContainer.appendChild(donateBtn);
    } else {
        document.body.prepend(donateBtn);
    }

    updateDonateButtonText();
});
