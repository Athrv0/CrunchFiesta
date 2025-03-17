function showSubmenu(menuItem) {
    let content = document.getElementById("menu-content");

    let menuItems = {
        "drinks": "Our refreshing drinks: Coca-Cola, Pepsi, Red Bull, Fresh Juices.",
        "pizza": "Delicious pizzas: Cheese Pizza, Veggie Delight, BBQ Chicken.",
        "pasta": "Tasty pastas: White Sauce, Red Sauce, Mix Pasta.",
        "cafe": "Cozy café experience with premium coffee and snacks.",
        "pastry": "Sweet pastries: Chocolate Cake, Croissants, Muffins.",
        "why-us": "Why choose us? Quality ingredients, great taste, and best service!"
    };

    content.innerHTML = `<p>${menuItems[menuItem]}</p>`;

    let menuLinks = document.querySelectorAll("nav ul li");
    menuLinks.forEach(link => link.classList.remove("active"));

    event.target.classList.add("active");
}
