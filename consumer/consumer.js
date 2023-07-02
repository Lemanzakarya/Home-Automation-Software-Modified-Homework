import getTodaysWeather from '../lib/weatherApi.js'

const icons = document.querySelectorAll('.icon');
const feelingHeading = document.getElementById('feeling-heading');

const messages = {
  good: 'Great to know that you are feeling good! Wishing you a wonderful day ahead.',
  normal: 'Remember that every day is a chance for something amazing to happen. Wishing you a brighter day ahead!',
  bad: 'It is okay to have ups and downs in life.Sending you warm thoughts and support.'
};

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const feeling = icon.parentElement.querySelector('input').value;
    icons.forEach(icon => {
        icon.style.display = 'none';
      });
    feelingHeading.textContent = messages[feeling];
    
  });
});


// Electric consumption data
var electricData = {
  labels: ["Living Room", "Bathroom", "Bedroom", "Kitchen"],
  datasets: [{
    data: [34, 25, 26, 15],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
  }]
};

// Water consumption data
var waterData = {
  labels: ["Kitchen", "Bathroom"],
  datasets: [{
    data: [64, 36],
    backgroundColor: ["#FF6384", "#36A2EB"]
  }]
};


var electricChart = new Chart(document.getElementById("electric-usage-chart"), {
  type: 'doughnut',
  data: electricData,
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.labels[tooltipItem.index];
            var value = data.datasets[0].data[tooltipItem.index];
            return label + ": " + value + "%";
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          size: 16,
          weight: 'bold'
        },
        formatter: function (value, context) {
          return value + '%';
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});

// Water consumption chart
var waterChart = new Chart(document.getElementById("water-usage-chart"), {
  type: 'doughnut',
  data: waterData,
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.labels[tooltipItem.index];
            var value = data.datasets[0].data[tooltipItem.index];
            return label + ": " + value + "%";
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          size: 16,
          weight: 'bold'
        },
        formatter: function (value, context) {
          return value + '%';
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});


const statistics = document.getElementById('usage-container');

// dashboard.addEventListener('click' , () => {
//     window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth'
//       });
// });

statistics.addEventListener('click' , () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
});

function reveal() {
    var reveals = document.querySelectorAll(".notActive");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 145;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener('scroll',reveal);

const weather = await getTodaysWeather();
console.log(weather);