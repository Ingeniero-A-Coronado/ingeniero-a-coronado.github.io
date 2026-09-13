/**
 * Inicializador global de Cactus Chat para el foro
 */
function initForum(sectionId = "cactus-chat-thread") {
  const container = document.getElementById(sectionId);
  if (!container) return; // Si la página no tiene la sección del foro, no ejecuta nada

  // Configuración de Cactus Chat apuntando a tu sala pública de Matrix
  initCactusChat({
    defaultServerName: "matrix.org",
    cactusName: "cactusbot",
    serverName: "matrix.org",
    siteName: "ingeniero-a-coronado",
    commentSectionId: `#lux-in-tenebris-forum:matrix.org`
  });
}

// Carga la función automáticamente cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  initForum();
});
