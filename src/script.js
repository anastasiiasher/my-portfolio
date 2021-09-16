function darkmode(event) {
    event.preventDefault();
    var element = document.body;
    element.classList.toggle("dark-mode");
}
let btndm = document.querySelector("button#darkmode");
btndm.addEventListener("click", darkmode);