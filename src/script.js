function darkmode(event) {
    event.preventDefault();
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.querySelector("button#darkmode")=btndm;
btndm.addEventListener("click", darkmode);