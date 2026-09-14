document.addEventListener('DOMContentLoaded', () => {
    loadResources();
    loadWishlist();
});

// Carga automática del archivo JSON de la carpeta recursos
async function loadResources() {
    const container = document.getElementById('resourcesContainer');
    try {
        const response = await fetch('recursos/resources.json');
        if (!response.ok) throw new Error("No se encontró el índice de recursos.");
        const resources = await response.json();

        container.innerHTML = '';
        if (resources.length === 0) {
            container.innerHTML = '<p class="text-muted">No hay recursos disponibles por el momento.</p>';
            return;
        }

        resources.forEach(item => {
            const fileCard = document.createElement('div');
            fileCard.className = 'resource-item';

            // Extrae el texto seguro según si es objeto multilenguaje o texto simple (priorizando 'es')
            const titleText = typeof item.title === 'object' ? (item.title.es || item.title.en || '') : (item.title || '');
            const descText = typeof item.description === 'object' ? (item.description.es || item.description.en || '') : (item.description || '');
            const categoryText = typeof item.category === 'object' ? (item.category.es || item.category.en || '') : (item.category || '');
            const filenameText = item.filename || '';

            // Guarda el atributo para el buscador convirtiendo texto puro a minúsculas
            fileCard.setAttribute('data-title', `${titleText.toLowerCase()} ${categoryText.toLowerCase()} ${filenameText.toLowerCase()}`);

            const icon = getFileIcon(item.type || '');

            fileCard.innerHTML = `
                <div class="resource-info">
                    <span class="resource-icon">${icon}</span>
                    <div>
                        <h4 class="resource-name">${titleText}</h4>
                        <p class="resource-desc">${descText}</p>
                        <span class="post-tag">${categoryText}</span>
                    </div>
                </div>
                <a href="recursos/${filenameText}" download class="doc-link" style="white-space: nowrap;">
                    ⬇️ <span class="lang-en">Download</span><span class="lang-es">Descargar</span><span class="lang-zh">下载</span>
                </a>
            `;
            container.appendChild(fileCard);
        });

        // Actualiza la visibilidad según el idioma seleccionado
        if (typeof toggleLang === 'function' && typeof currentLang !== 'undefined') {
            // Sincroniza visualización de lenguaje
            const event = new Event('change');
        }
    } catch (error) {
        container.innerHTML = `<p style="color: var(--accent-red);">Error al cargar los recursos: ${error.message}</p>`;
    }
}

// Iconos automáticos según el tipo de archivo
function getFileIcon(type) {
    switch (type.toLowerCase()) {
        case 'excel': case 'xlsx': case 'csv': return '📊';
        case 'pdf': case 'doc': case 'docx': return '📄';
        case 'image': case 'png': case 'jpg': return '🖼️';
        case 'audio': case 'mp3': case 'wav': return '🎵';
        case 'video': case 'mp4': return '🎥';
        case 'zip': case 'rar': case '7z': return '📦';
        default: return '📁';
    }
}

// Buscador en tiempo real
function filterResources() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.resource-item');

    items.forEach(item => {
        const text = item.getAttribute('data-title');
        if (text.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Lógica de Wishlist (Guardado Local en el Navegador)
function loadWishlist() {
    const wishlistContainer = document.getElementById('wishlistContainer');
    const items = JSON.parse(localStorage.getItem('lux_wishlist')) || [
        "Dataset shapefiles de iluminado público Tijuana 2026",
        "Plantilla en Excel para matriz de evaluación criminológica"
    ];

    wishlistContainer.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'wishlist-item';
        li.innerHTML = `
            <span>📌 ${item}</span>
            <button onclick="removeWishlistItem(${index})" class="delete-btn">❌</button>
        `;
        wishlistContainer.appendChild(li);
    });
}

function addWishlistItem() {
    const input = document.getElementById('wishlistInput');
    const value = input.value.trim();

    if (value === '') return;

    const items = JSON.parse(localStorage.getItem('lux_wishlist')) || [];
    items.push(value);
    localStorage.setItem('lux_wishlist', JSON.stringify(items));

    input.value = '';
    loadWishlist();
}

function removeWishlistItem(index) {
    const items = JSON.parse(localStorage.getItem('lux_wishlist')) || [];
    items.splice(index, 1);
    localStorage.setItem('lux_wishlist', JSON.stringify(items));
    loadWishlist();
}
