export function displayProducts(products) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Clear previous results
  
    if (products.length === 0) {
      searchResults.innerHTML = '<p>No results found. Try searching for something else.</p>';
      return;
    }
  
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.images?.[0] || 'default-image.png'}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;
      searchResults.appendChild(card);
    });
  }