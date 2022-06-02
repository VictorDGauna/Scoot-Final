function toggleMenu() {
    console.log("it worked");
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;