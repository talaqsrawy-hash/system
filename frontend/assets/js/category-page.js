// category-page.js: Dynamic loader for category.html
window.addEventListener('DOMContentLoaded', () => {
  // Parse category id from URL
  const params = new URLSearchParams(window.location.search);
  const catId = params.get('id');
  const category = CATEGORIES[catId];
  if (!category) {
    document.getElementById('category-title').textContent = 'Category Not Found';
    return;
  }

  // Set page title and hero heading
  document.title = `${category.label} - Marketplace`;
  document.getElementById('category-title').textContent = category.label;

  // Breadcrumb
  document.getElementById('breadcrumb').innerHTML = `Home &gt; ${category.label}`;

  // Sidebar: subcategories and price range
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <h2>Subcategories</h2>
    <div class="subcategory-list">
      ${category.subcategories.map(sub => `<label><input type="checkbox" name="subcategory" value="${sub}"> ${sub}</label>`).join('')}
    </div>
    <div class="price-range">
      <h2>Price Range</h2>
      <input type="range" min="0" max="999" step="1" value="999" id="price-range">
      <span id="price-value">$0 — $999</span>
    </div>
  `;

  // Products grid (stub)
  const productsGrid = document.getElementById('products-grid');
  productsGrid.innerHTML = '<div>Loading products...</div>';
  // TODO: Fetch products from API and render

  // Pagination (stub)
  document.getElementById('pagination').innerHTML = '';
});
