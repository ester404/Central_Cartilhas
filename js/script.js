// ===== Fix de FOUC (evita flash de fonte não estilizada) =====
if (document.fonts) {
  document.fonts.ready.then(() => document.body.classList.add('fonts-loaded'));
  setTimeout(() => document.body.classList.add('fonts-loaded'), 400); // fallback
} else {
  document.body.classList.add('fonts-loaded');
}

// ===== Menu mobile (hamburger) =====
const navHamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');
if (navHamburger && navLinks) {
  navHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== Seleção de setor (página de departamento) =====
function selectSetor(id) {
  // destaca o quadradinho selecionado
  document.querySelectorAll('.setor-tile').forEach(tile => {
    tile.classList.toggle('active-tile', tile.dataset.setor === id);
  });

  // mostra só o painel correspondente
  document.querySelectorAll('.setor-panel').forEach(panel => {
    panel.classList.toggle('open', panel.id === 'panel-' + id);
  });

  // rola até o painel aberto
  const openPanel = document.getElementById('panel-' + id);
  if (openPanel) {
    setTimeout(() => {
      openPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  }
}
