// Conmutador de Modo Oscuro / Claro
function toggleTheme() {
    const body = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '☀️ Light Mode';
    } else {
        body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '🌙 Dark Mode';
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
}
