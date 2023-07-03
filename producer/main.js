const allButtons = document.querySelectorAll(".circular-button")
let selectedRoomId = '';

function deleteRoom(roomId) {
  selectedRoomId = roomId;
  // Add any additional logic for deleting a room
}

function showConfirmation() {
  if (selectedRoomId) {
    const selectedRoom = document.getElementById(selectedRoomId);
    const roomName = selectedRoom.innerText.trim();
    const confirmation = confirm(`Are you sure you want to delete ${roomName}?`);

    if (confirmation) {
      // Call the deleteRoom function to delete the selected room
      deleteRoom(selectedRoomId);
      selectedRoom.remove();
      selectedRoomId = '';
    }
  }
}


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
  
  function showDevicePopup() {
    var devicePopup = document.getElementById("devicePopup");
    devicePopup.style.display = "block";
  }
  
  function addDevice() {
    var deviceName = document.getElementById("deviceName").value;
    var roomName = document.getElementById("roomName").value;
  
    // Yeni cihazı eklemek için burada yapılması gereken işlemler
  
    // Popup ekranını kapat
    cancelDevice();
  }
  
  function cancelDevice() {
    var devicePopup = document.getElementById("devicePopup");
    devicePopup.style.display = "none";
  
    // Metin alanlarını temizle (isteğe bağlı)
    document.getElementById("deviceName").value = "";
    document.getElementById("roomName").value = "";
  }
  
  var addDeviceButton = document.getElementById("addDevice");
  addDeviceButton.addEventListener("click", showDevicePopup);
  