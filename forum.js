document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("utterances-container");

  if (container) {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "ingeniero-a-coronado/ingeniero-a-coronado.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
  }
});
