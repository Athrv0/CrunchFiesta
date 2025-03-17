let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartTotal = document.getElementById("cart-total");
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: ₹${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello, I want to order:\n";
    cart.forEach(item => {
        message += `${item.name} - ₹${item.price}\n`;
    });
    message += `Total: ₹${document.getElementById("cart-total").textContent}`;

    let whatsappURL = `https://wa.me/918779989576?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

function toggleMenu() {
    let menu = document.getElementById("side-menu");
    menu.classList.toggle("open");
}

function showSubMenu(category) {
    alert(`Showing menu for ${category}...`);
}
