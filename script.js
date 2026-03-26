
const addBtn = document.querySelector(".add");
const skipBtn = document.querySelector(".skip");

const img = document.querySelector("#display");
const nameEl = document.querySelector(".name");
const priceEl = document.querySelector(".price");

const itemList = document.querySelector(".items-list");
const totalEl = document.querySelector("#totalAmount");

const bookBtn = document.querySelector(".book-btn");
const error  = document.querySelector("#error");

const services = [
    { name: "Dry Cleaning", price: 200, img: "https://plus.unsplash.com/premium_photo-1682129229709-c017d24fa3cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Laundry Service", price: 150, img: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ironing", price: 100, img: "https://plus.unsplash.com/premium_photo-1683134123155-20499f471baa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Premium Wash", price: 300, img: "https://images.unsplash.com/photo-1603057360282-927e9eca0d87?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

let currentIndex = 0;
let total = 0;
let count = 1;

// 👉 UI Update
function updateService() {
    img.src = services[currentIndex].img;
    nameEl.textContent = services[currentIndex].name;
    priceEl.textContent = "₹" + services[currentIndex].price;
}

// 👉 SKIP
skipBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % services.length;
    updateService();
});

// 👉 ADD ITEM
addBtn.addEventListener("click", () => {

    const service = services[currentIndex];

    // 👉 empty wala section hide karo
    document.querySelector(".emty").style.display = "none";

    // 👉 new item create karo
    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `
        <p>${count}</p>
        <p>${service.name}</p>
        <p>₹${service.price}</p>
    `;

    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.padding = "5px 10px";

    itemList.appendChild(item);

    // 👉 total update
    total += service.price;
    totalEl.textContent = total;

    count++;

    // 👉 button active karo
    bookBtn.style.backgroundColor = "darkblue";

    // 👉 error hide karo
    error.style.display = "none";

    // 👉 next service auto show (optional)
    currentIndex = (currentIndex + 1) % services.length;
    updateService();
});

// 👉 BOOK BUTTON (validation)
bookBtn.addEventListener("click", () => {
    if (total === 0) {
        error.style.display = "block";
    } else {
        alert("Booking Successful ✅");
    }
});