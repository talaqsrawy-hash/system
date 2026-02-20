// home.js: Concierge homepage logic
window.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('category-cards');
  Object.values(CATEGORIES).forEach(cat => {
    const card = document.createElement('div');
    card.className = 'concierge-card';
    card.style.borderColor = cat.color;
    card.innerHTML = `
      <div class="concierge-card-emoji">${cat.emoji}</div>
      <div class="concierge-card-title">${cat.question}</div>
      <div class="concierge-card-subtitle">${cat.subtitle}</div>
    `;
    card.onclick = () => {
      window.location.href = `category.html?id=${cat.id}`;
    };
    cardsContainer.appendChild(card);
  });

  // Search autocomplete (stub)
  const searchBar = document.getElementById('search-bar');
  const autocompleteList = document.getElementById('autocomplete-list');
  searchBar.addEventListener('input', () => {
    // TODO: Implement search autocomplete
    autocompleteList.innerHTML = '';
  });
});
