// Evento simples para botão "About Me"
document.querySelector('.btn-about').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Seção "About Me" ainda não implementada.');
});

const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Carregar tema salvo
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Função para alternar tema
function toggleTheme() {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// clique do Botão modo claro/escuro
themeSwitch.addEventListener("click", toggleTheme);

// Acessibilidade: ativar com Enter ou Espaço
themeSwitch.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleTheme();
  }
});

