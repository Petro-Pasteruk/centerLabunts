document.querySelector(".header__burger-wrap").addEventListener("click", function () {
    if (this.classList.contains("close")) {
        document.querySelector(".nav").classList.remove("visibility");
        this.classList.remove("close");
    } else {
        document.querySelector(".nav").classList.add("visibility");
        this.classList.add("close");
    }
});