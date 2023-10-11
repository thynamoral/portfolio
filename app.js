
const mobile_bars = document.querySelector(".mobile-bars");
const mobile_nav_menu = document.querySelector(".mobile-nav-menu");
const close_mobile_bars = document.querySelector(".close-mobile-bars");
const nav_link_mobile = document.querySelectorAll(".nav-link-mobile");

mobile_bars.addEventListener("click",() => {
    mobile_nav_menu.classList.remove("hide");
})

close_mobile_bars.addEventListener("click",() => {
    mobile_nav_menu.classList.add("hide");
})

nav_link_mobile.forEach((link) => {
    link.addEventListener("click",() => {
        mobile_nav_menu.classList.add("hide");
    })
})