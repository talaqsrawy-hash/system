// Dummy data to initialize localStorage for the e-commerce app
(function initDummyData() {
  if (!localStorage.getItem('products')) {
    const products = [
      { id: 1, name: 'Cement Bag', category: 'Building Materials', price: 10, image: 'https://via.placeholder.com/150', sellerId: 1 },
      { id: 2, name: 'Steel Rod', category: 'Building Materials', price: 25, image: 'https://via.placeholder.com/150', sellerId: 1 },
      { id: 3, name: 'T-Shirt', category: 'Clothing & Accessories', price: 15, image: 'https://via.placeholder.com/150', sellerId: 2 },
      { id: 4, name: 'Car Battery', category: 'Car Parts', price: 80, image: 'https://via.placeholder.com/150', sellerId: 3 },
      { id: 5, name: 'Phone Case', category: 'Phone Accessories', price: 8, image: 'https://via.placeholder.com/150', sellerId: 2 },
      { id: 6, name: 'LCD Screen', category: 'Phone Parts', price: 50, image: 'https://via.placeholder.com/150', sellerId: 3 }
    ];
    localStorage.setItem('products', JSON.stringify(products));
  }
  if (!localStorage.getItem('users')) {
    const users = [
      { id: 1, name: 'Seller One', role: 'SELLER' },
      { id: 2, name: 'Seller Two', role: 'SELLER' },
      { id: 3, name: 'Seller Three', role: 'SELLER' },
      { id: 100, name: 'Buyer One', role: 'BUYER' }
    ];
    localStorage.setItem('users', JSON.stringify(users));
  }
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  if (!localStorage.getItem('invoices')) {
    localStorage.setItem('invoices', JSON.stringify([]));
  }
  if (!localStorage.getItem('supportTickets')) {
    localStorage.setItem('supportTickets', JSON.stringify([]));
  }
})();
