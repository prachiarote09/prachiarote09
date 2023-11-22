// script.js
document.addEventListener("DOMContentLoaded", function () {
    const showMoreButtons = document.querySelectorAll(".show-more-button");
    showMoreButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const dummyButtons = this.nextElementSibling;
            dummyButtons.classList.toggle("hidden");
        });
    });
});
