const button = document.getElementById("submit");

button?.addEventListener("click", () => {

  const nameVar = document.getElementById("name").value;
  const mailVar = document.getElementById("email").value;
  const msgVar = document.getElementById("nachricht").value;

  console.log("Name: " + nameVar);
  console.log("E-Mail: " + mailVar);
  console.log("Message: " + msgVar);

  alert("Konnte nicht gesendet werden!");
})

//Fetching für Devices

//Smartphones

const GetSmartphoneData = async () => {
  const response = await fetch('https://dummyjson.com/products/category/smartphones');
  const data = await response.json();
  return data.products;
}

const smartphonesList = document.getElementById('smartphones-list');

document.addEventListener('DOMContentLoaded', async () => {
    const smartphones = await GetSmartphoneData();
    // console.log(smartphones);
    for (let i = 0; i < smartphones.length; i++) {
        const smartphone = smartphones[i];
        const smartphoneElement = document.createElement('li');
        smartphonesList.innerHTML = smartphonesList.innerHTML + `

        <li class="product-card">
          <img class="product-image" src="${smartphone.images[2]}" alt="Bild von ${smartphone.title}">
          <h2 class="product-title">${smartphone.title}</h2>
          <p class="product-price">${smartphone.price} CHF</p>
          <p class="product-description">
            ${smartphone.description}.
          </p>
          <button class="cart-button">
            <img src="../assets/cart.png" alt="In den Warenkorb" />
          </button>
        </li>  `
  } 
});

//Tablets

const GetTabletData = async () => {
  const response = await fetch('https://dummyjson.com/products/category/tablets');
  const data2 = await response.json();
  return data2.products;
}

const tabletsList = document.getElementById('tablets-list');

document.addEventListener('DOMContentLoaded', async () => {
  const tablets = await GetTabletData(); 

  for (let i = 0; i < tablets.length; i++) {
    const tablet = tablets[i]; 
    
        tabletsList.innerHTML = tabletsList.innerHTML + `
      <li class="product-card">
        <img class="product-image" src="${tablet.images[1]}" alt="Bild von ${tablet.title}">
        <h2 class="product-title">${tablet.title}</h2>
        <p class="product-price">${tablet.price} CHF</p>
        <p class="product-description">
          ${tablet.description}
        </p>
        <button class="cart-button">
          <img src="../assets/cart.png" alt="In den Warenkorb" />
        </button>
      </li>`
}
});

//Laptops

const GetLaptopData = async () => {
  const response = await fetch('https://dummyjson.com/products/category/laptops');
  const data3 = await response.json();
  return data3.products;
}

const laptopsList = document.getElementById('laptops-list');

document.addEventListener('DOMContentLoaded', async () => {
  const laptops = await GetLaptopData(); 

  for (let i = 0; i < laptops.length; i++) {
    const laptop = laptops[i]; 
    
        laptopsList.innerHTML = laptopsList.innerHTML + `
      <li class="product-card">
        <img class="product-image" src="${laptop.images[2]}" alt="Bild von ${laptop.title}">
        <h2 class="product-title">${laptop.title}</h2>
        <p class="product-price">${laptop.price} CHF</p>
        <p class="product-description">
          ${laptop.description}
        </p>
        <button class="cart-button">
          <img src="../assets/cart.png" alt="In den Warenkorb" />
        </button>
      </li>`
}
});