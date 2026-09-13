document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  
  // Mapeo inteligente de secciones
  let sectionId = "comunidad-general"; // Por defecto para Index, Sameri y Lux in Tenebris
  
  if (path === "academia.html") {
    sectionId = "academia-forum";
  } else if (path === "resources.html") {
    sectionId = "recursos-forum";
  }

  initCactusChat({
    defaultServerName: "matrix.org",
    cactusName: "cactusbot",
    serverName: "matrix.org",
    siteName: "ingeniero-a-coronado",
    commentSectionId: sectionId
  });
});
