const API_URL = "http://localhost:3000/api";

// Test API Route
document.querySelector("#testBtn").addEventListener("click", () => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      document.querySelector("#testOutput").textContent = data.message;
    });
});

// Load Items Route
document.querySelector("#itemsBtn").addEventListener("click", () => {
  fetch(`${API_URL}/items`)
    .then(res => res.json())
    .then(items => {
      const list = document.querySelector("#itemsList");
      list.innerHTML = "";
      items.forEach(item => {
        list.innerHTML += `<li>${item.name}</li>`;
      });
    });
});
