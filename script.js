document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});

function orderOnWhatsApp() {
    let totalAmount = 0; // Update this with actual cart total
    let location = "XYZ Street, Kota, Rajasthan"; 
    let message = `Hello, I want to place an order. My total is ₹${totalAmount}. Deliver it to ${location}.`;

    let whatsappURL = `https://wa.me/9876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
