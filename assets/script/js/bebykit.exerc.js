var toggled = false;
var navbarIcon = document.querySelector(".navbar-icon");
var navbarItem = document.querySelector(".navbar-item");

navbarIcon.addEventListener("click", function() {
    if (!toggled) {
        toggled = true;
        // navbarItem.style.display = "block";
        navbarItem.style.transform = "translateY(160%)";
        return;
    } else {
        toggled = false;
        // navbarItem.style.display = "none";
        navbarItem.style.transform = "translateY(0%)";
        return;
    }
});