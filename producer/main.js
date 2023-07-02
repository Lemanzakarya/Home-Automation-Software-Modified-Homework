const allButtons = document.querySelectorAll(".circular-button")

const btnObj = []

window.onload = () => {
    const allBtn = getAllBtnLocalStoreg();
    allBtn.forEach((item, index) => {
        const btn = document.querySelector(`[title="${item.title}"]`)
        const btnText = btn.querySelector(".btn-status")
        if (item.status === "ON") {
            btn.classList.add("btn-on")
            btnText.textContent = "ON"
        } else {
            btn.classList.remove("btn-on")
            btnText.textContent = "OFF"
        }
    }
    )
}


allButtons.forEach((item, index) => {
    const btnText = item.querySelector(".btn-status")
    item.addEventListener("click" ,() => {
        clickedButton(item, btnText,index)
    })
})
console.log(btnObj)



function clickedButton(item, btnText,index) {
    item.classList.toggle("btn-on");
    if (btnText.textContent === "OFF") {
        item.classList.contains("btn-on")
        btnText.textContent = "ON"
    } else {
        item.classList.contains("btn-on")
        btnText.textContent = "OFF"
    }
    changeLocal(item, btnText,index)
}

function changeLocal(item, btnText,index) {
    const allBtn = getAllBtnLocalStoreg();
    const btnObj = {
        id:index,
        title: item.title,
        status: btnText.textContent
    }
    allBtn.forEach((item, index) => {
        if (item.title === btnObj.title) {
            allBtn.splice(index, 1)
        }    
    })
    allBtn.push(btnObj)
    localStorage.setItem("btnStatus", JSON.stringify(allBtn))
}


function getAllBtnLocalStoreg() {
    let btnStatus;
    if (localStorage.getItem("btnStatus") === null) {
        btnStatus = []
    } else {
        btnStatus = JSON.parse(localStorage.getItem("btnStatus"))
    }
    return btnStatus
}

function openPopup() {
    document.getElementById("popupContainer").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
  }
  
  document.getElementById("roomForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const roomName = document.getElementById("roomName").value;
    console.log("Room Name:", roomName);
    closePopup(); 
  });
  
