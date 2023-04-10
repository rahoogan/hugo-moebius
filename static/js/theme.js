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
    let current = window.location.pathname;
    if (current.startsWith('/tags/')) {
        // Clear all existing tags
        document.querySelectorAll('.tag').forEach(function(i) {
            if (i.classList.contains('active')) {
                i.classList.remove('active');
            }
        })
        current
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
    if (current === '/posts/') {
        document.querySelector('nav.navbar a[href="/posts/"]').classList.toggle("active")
    }
    else if (current === '/about/' ) {
        document.querySelector('nav.navbar a[href="/about/"]').classList.toggle("active")
    }
})

// Scroll indicator for article content pages
let is_article = document.querySelector(".article-content")
if (is_article) {
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        if (scrolled > 0) {
            document.querySelector("hr.banner-divider").style.width = scrolled + "%";
        }
        else {
            document.querySelector("hr.banner-divider").style.width = "100%";
        }
    }
}

// Dark theme
// From - https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
// determines if the user has a set theme
function detectColorScheme(){
    var theme="light";    //default to light

    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            var theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme=="dark") {
         document.documentElement.setAttribute("data-theme", "dark");
    }
}

//identify the toggle switch HTML element
const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }    
}

//listener for changing themes
toggleSwitch.addEventListener('change', switchTheme, false);

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "dark"){
    toggleSwitch.checked = true;
}