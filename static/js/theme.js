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

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.startsWith('/tags/')) {
        // Clear all existing tags
        document.querySelectorAll('.tag').forEach(function(i) {
            if (i.classList.contains('active')) {
                i.classList.remove('active');
            }
        })
        window.location.pathname
            .split('/')
            .filter(word => word.length > 0 && word !== "tags")
            .forEach(function(t) {
                // Set current active tag
                document.querySelector('.tag-'+t).classList.toggle('active');
            });
    }
    else {
        document.querySelectorAll('.tag.active').forEach(function(i) {
            i.classList.remove('active');
        })
    }
})

// Scroll indicator for article content pages
let is_article = document.querySelector(".article-content")
if (is_article) {
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.querySelector("hr.banner-divider").style.width = scrolled + "%";
    }
}