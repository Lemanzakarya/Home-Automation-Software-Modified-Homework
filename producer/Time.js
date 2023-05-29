function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    var currentDate = new Date();
  
    var optionsDate = { year: 'numeric', month: '2-digit', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('tr-TR', optionsDate);
  
    var optionsTime = { hour: '2-digit', minute: '2-digit' };
    var formattedTime = currentDate.toLocaleTimeString('tr-TR', optionsTime);
  
    document.getElementById("date").textContent = formattedDate;
    document.getElementById("time").textContent = formattedTime;
  }
  
  updateDateTime();
  
  setInterval(updateDateTime, 1000);
  