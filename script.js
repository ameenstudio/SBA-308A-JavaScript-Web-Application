const container = document.getElementById("container");

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
        // card.addEventListener()
        card.addEventListener("click", function (e) {
          console.log("test");
          
        });
  
        console.log(product)
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  })();

  //i might use it later on <p>${product.description}</P>