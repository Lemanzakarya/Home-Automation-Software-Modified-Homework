const allButtons = document.querySelectorAll(".circular-button")
allButtons.forEach((item) => {
    const btnText = item.querySelector(".btn-status")
    item.addEventListener("click", () => {
        item.classList.toggle("btn-on");
        if(item.classList.contains("btn-on")) {
            btnText.innerHTML = "ON"
        } else {
            btnText.innerHTML = "OFF"
        }
    })
})