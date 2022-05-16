let boutBurg = document.querySelector('.burger')
let menuNav = document.querySelector('nav')

boutBurg.addEventListener('click', () => {
    if (menuNav.style.left == "100%") {
        menuNav.style.left = "0%"
    }
    else {
        menuNav.style.left = "100%"
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 703) {
        menuNav.style.display = "flex"
    }
    else {
        menuNav.style.left = "100%"
    }
})