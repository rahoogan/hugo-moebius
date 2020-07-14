const nav_btn = document.querySelectorAll("nav .nav-link");
nav_btn.forEach(function(item) {
    // Toggle selected item
    item.addEventListener("click", function(e) {
        // Toggle all other selected items
        let other_btns = document.querySelectorAll("nav .nav-link.active");
        other_btns.forEach(function(i) {
            i.classList.remove("active")
        })
        // Set currently selected item
        e.target.classList.toggle("active")
    })
})

const scroll_btn = document.getElementById("scroll-btn");
scroll_btn.addEventListener("click", function(e) {
    // Prevent navigating to empty href
    e.preventDefault();
    // Scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

/* Dropdown Menu */
const hamburger = document.getElementById("hamburger");
const dropdown = document.querySelector("ul.navbar-dropdown");
hamburger.addEventListener("click", function(e) {
    e.preventDefault();
    hamburger.classList.toggle("active")
    dropdown.classList.toggle("active")
})