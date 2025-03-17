document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("signup-modal");
    let btn = document.getElementById("signup-btn");
    let closeBtn = document.querySelector(".close");

    btn.onclick = function() {
        modal.style.display = "block";
    };
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
