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
        
        card.addEventListener("click", function () {
          const isExpanded = card.classList.contains("expanded");
        
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
  
        console.log(product)
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  })();

