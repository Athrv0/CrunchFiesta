let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
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
