let products = [
  { id: 1, name: "iPhone 15", price: 1000 },
  { id: 2, name: "Samsung S23", price: 900 },
  { id: 3, name: "AirPods", price: 200 }
];

let cart = [];

function showProducts() {
  let div = document.getElementById("products");

  products.forEach(p => {
    div.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price}$</p>
        <button onclick="add(${p.id})">Qo‘shish</button>
      </div>
    `;
  });
}

function add(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById("count").innerText = cart.length;
}

function toggleCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.classList.toggle("hidden");

  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    list.innerHTML += `<li>${item.name} - ${item.price}$</li>`;
  });
}

function buy() {
  alert("Rahmat! Buyurtma qabul qilindi ✅");
  cart = [];
  document.getElementById("count").innerText = 0;
}

showProducts();
