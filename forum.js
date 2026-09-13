document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  
  // Ruteo de salas por sección
  let sectionId = "comunidad-general";
  if (path === "academia.html") {
    sectionId = "academia-forum";
  } else if (path === "resources.html") {
    sectionId = "recursos-forum";
  }

  // Inicialización oficial
  initComments({
    node: document.getElementById("cactus-chat-thread"),
    defaultHomeserverUrl: "https://matrix.cactus.chat:8448",
    serverName: "cactus.chat",
    siteName: "ingeniero-a-coronado",
    commentSectionId: sectionId
  });
});
