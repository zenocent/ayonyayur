function goToHome() {
    window.location.href = "#home";
}
function goToProduct() {
    window.location.href = "#product";
}

function goToContact() {
    window.location.href = "#contact";
}

function followUs() {
    window.location.href = "sosial-media.html";
}

const containcerSearch = document.querySelector(".container-search");
const btnSearch = document.querySelector(".btn-search");
let show = true;

btnSearch.addEventListener("click", () => {

    if (show) {
        containcerSearch.style.visibility = "visible";
        containcerSearch.style.transform = "scale(1)";
        show = false;
    } else {
        containcerSearch.style.visibility = "hidden";
        containcerSearch.style.transform = "scale(0)";
        show = true;
    }
});
