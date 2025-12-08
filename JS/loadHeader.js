document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
      .then(res => res.text())
      .then(header => {
        document.body.insertAdjacentHTML("afterbegin", header);
  
        // Recarregar o script do tema
        const themeScript = document.createElement("script");
        themeScript.src = "js/script.js";
        document.body.appendChild(themeScript);
      });
  });
  