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

    // Auto-send location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            message += `\nMy Location: https://www.google.com/maps?q=${lat},${lon}`;

            let whatsappURL = `https://wa.me/918779989576?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    } else {
        alert("Geolocation is not supported.");
    }
}

function toggleMenu() {
    let menu = document.getElementById("side-menu");
    menu.classList.toggle("open");
}
