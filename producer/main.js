const allButtons = document.querySelectorAll(".circular-button")
allButtons.forEach((item)=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("btn-on")
    })
})