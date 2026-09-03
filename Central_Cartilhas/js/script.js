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

// ===== Busca de cartilha (página de departamento) =====
function filterSetores(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll('.setor-tile').forEach(tile => {
    const name = (tile.querySelector('.st-name')?.textContent || '').toLowerCase();
    const desc = (tile.querySelector('.st-desc')?.textContent || '').toLowerCase();
    const match = !q || name.includes(q) || desc.includes(q);
    tile.classList.toggle('st-hidden', !match);
  });
}
