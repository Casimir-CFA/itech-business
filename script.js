fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector(".produits");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price}</strong><br>
        <a class="whatsapp"
           href="https://wa.me/22966109277?text=Bonjour%20iTech%20Business%2C%20je%20veux%20le%20${product.name}"
           target="_blank">
           Commander sur WhatsApp
        </a>
      `;

      container.appendChild(card);
    });
  });
