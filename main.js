var openButtons = document.querySelectorAll(".openFormBtn");
var overlay = document.getElementById("formOverlay");
var formImage = document.getElementById("bgInfoForm");
var nameTag = document.getElementById("name");



openButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        var imgSrc = this.getAttribute("data-img");
        var dataName = this.getAttribute("data-name");
        formImage.style.background = "no-repeat center/cover url(\""+imgSrc+"\")";
        nameTag.textContent = dataName;
        overlay.classList.remove("hidden");
    });
});

document.getElementById("closeForm").addEventListener("click", function (e) {
    e.preventDefault();
    popupForm.reset();
    overlay.classList.add("hidden");
});

document.getElementById("popupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted!");
    popupForm.reset();
    overlay.classList.add("hidden");
});