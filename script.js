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

/*Fetching für Devices*/

const GetSmartphoneData = async () => {
  const response = await fetch('https://dummyjson.com/products/category/smartphones');
  const data = await response.json();
  return data.products;
}

const smartphoneList = document.getElementById('products-list');

document.addEventListener('DOMContentLoaded', async () => {
    const smartphones = await GetSmartphoneData();
    // console.log(smartphones);
    for (let i = 0; i < smartphones.length; i++) {
        const smartphone = smartphones[i];
        const smartphoneElement = document.createElement('li');
        smartphoneList.innerHTML = smartphoneList.innerHTML + `

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
