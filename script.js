const data = [
  ['Nosy Be', 'plage', 'Eaux turquoise et plages tropicales.',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80'],
  ['Morondava', 'nature', 'L\u2019Allée des Baobabs et ses paysages emblématiques.',
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80'],
  ['Isalo', 'nature', 'Massifs rocheux, canyons et piscines naturelles.',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80'],
  ['Antananarivo', 'culture', 'La capitale et son patrimoine des Hautes Terres.',
    'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=900&q=80'],
  ['Sainte-Marie', 'plage', 'Une île paisible entre mer et nature.',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'],
  ['Antsirabe', 'culture', 'Artisanat, architecture et ambiance locale.',
    'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80']
];

const cards = document.getElementById('cards');

function render(f = 'all') {
  cards.innerHTML = data
    .filter(x => f === 'all' || x[1] === f)
    .map(x => `
      <article class="card" style="background-image:url('${x[3]}')">
        <div class="content">
          <small>${x[1].toUpperCase()}</small>
          <h3>${x[0]}</h3>
          <p>${x[2]}</p>
        </div>
      </article>
    `)
    .join('');
}

document.querySelectorAll('[data-f]').forEach(b => b.onclick = () => {
  document.querySelectorAll('[data-f]').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  render(b.dataset.f);
});

render();
