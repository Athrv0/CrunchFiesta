// Sidebar Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("side-menu");
    menu.style.width = (menu.style.width === "250px") ? "0" : "250px";
}

// WhatsApp Order Function (With Location)
function orderNow() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let locationURL = `https://www.google.com/maps?q=${lat},${lon}`;

            let message = `Hello, I want to order from CrunchFiesta. My location: ${locationURL}`;
            let whatsappURL = `https://wa.me/918779989576?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    } else {
        alert("Geolocation not supported!");
    }
}
