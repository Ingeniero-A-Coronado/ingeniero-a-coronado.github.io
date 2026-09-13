/**
 * Inicializador global de Cactus Chat para el foro
 */
function initForum() {
  const container = document.getElementById("cactus-chat-thread");
  if (!container) return; // Si la página no tiene el contenedor, no ejecuta nada

  // Inicialización oficial de Cactus Chat
  initCactusChat({
    defaultServerName: "matrix.org",
    cactusName: "cactusbot",
    serverName: "matrix.org",
    siteName: "ingeniero-a-coronado",
    commentSectionId: "lux-in-tenebris-forum"
  });
}

// Carga la función automáticamente al montar el DOM
document.addEventListener("DOMContentLoaded", () => {
  initForum();
});
