const container = document.getElementById("container");

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");



(async function initialLoad() {
    try {
      const res = await fetch('https://dummyjson.com/products', {
        method: "GET",
      });
      const data = await res.json();
      const products = data.products; 
      
      
      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${product.images[0]}" alt="image of the product">
          <h5>${product.title}</h5>

          
          
        `;

        
        

        container.appendChild(card); // Append  cards to the container
        
        card.addEventListener("click", function () {
          const isExpanded = card.classList.contains("expanded");
          // console.log("test")
        
          if (!isExpanded) {
            const productDetail = document.createElement('p');
            productDetail.innerText = product.description;
            productDetail.className = 'description';
            card.appendChild(productDetail);
            card.classList.add("expanded");
          } else {
            const description = card.querySelector('.description');
            if (description) {
              description.remove();
            }
            card.classList.remove("expanded");
          }
        });
  
        // console.log(product)
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  })();

  
  searchButton.addEventListener("click", async (event) => {
    event.preventDefault(); // stops relaoding 

    console.log( 'button')// event listenter is working-
  
    const query = searchInput.value.trim();
    if (!query) return;
  
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
        method: "GET"
      });
  
      const data = await res.json();
      displayProducts(data.products);
    } catch (err) {
      console.error("Search failed:", err);
    }
  });

  function displayProducts(products) {
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

