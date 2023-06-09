const weeklyData = [78, 29, 60, 99, 46, 99, 70];
const monthlyData = [230, 180, 280, 110, 190, 195, 45, 12 ,98 , 24 , 111 , 204];
const weeklyData2 = [10, 29, 60, 31, 46, 73, 144];
const monthlyData2 = [123, 100, 300, 350, 280, 195, 195, 209 ,100 , 101 , 102, 140];


const weeklyBtn = document.getElementById('weekly-chart-btn');
const monthlyBtn = document.getElementById('monthly-chart-btn');
const lineChartCanvas = document.getElementById('line-chart');

let activeChartType = 'weekly';
let lineChart;

function updateChart() {
  let chartData = (activeChartType === 'weekly') ? weeklyData : monthlyData;
  let chartLabels = (activeChartType === 'weekly') ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  lineChart.data.labels = chartLabels;

  if(graphState == 'electricity')
  lineChart.data.datasets[0].data = chartData;
  else
  lineChart.data.datasets[0].data = monthlyData2;

  lineChart.update();

  // Electric Expense değerini güncelle
  const electricExpenseValue = document.getElementById('electric-expense-value');
  electricExpenseValue.textContent = chartData.reduce((a, b) => a + b, 0);
}

weeklyBtn.addEventListener('click', () => {
  activeChartType = 'weekly';
  weeklyBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
  updateChart();
});

monthlyBtn.addEventListener('click', () => {
  activeChartType = 'monthly';
  monthlyBtn.classList.add('active');
  weeklyBtn.classList.remove('active');
  updateChart();
});

lineChart = new Chart(lineChartCanvas, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Haftalık etiketler
    datasets: [
      {
        label: 'Electric Consumption',
        data: weeklyData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 4,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            weight: 'bold' // Yazıların kalınlığı
          }
        }
      },
      x: {
        ticks: {
          font: {
            weight: 'bold'
          }
        }
      }
    }
  }
});



// Electricity Usage This Week için çember pasta grafik oluşturma
const usageValue = 25; // Kullanım yüzdesi
const usageChartCanvas = document.getElementById('usage-chart');
const usageChartCtx = usageChartCanvas.getContext('2d');

// Kullanım grafiğini oluştur
usageChartCtx.clearRect(0, 0, usageChartCanvas.width, usageChartCanvas.height); // Önceki çizimleri temizle
const radius = Math.min(usageChartCanvas.width, usageChartCanvas.height) / 2;
const startAngle = -0.5 * Math.PI;
const endAngle = startAngle + (2 * Math.PI * usageValue) / 100;

// İç çemberi çiz
const innerRadius = radius * 1; 
usageChartCtx.beginPath();
usageChartCtx.arc(radius, radius, innerRadius, 0, 2 * Math.PI);
usageChartCtx.fillStyle = '#a7b4c0ac'; // Boş kısım rengi
usageChartCtx.fill();

// Dış çembere göre kullanım grafiğini çiz
usageChartCtx.beginPath();
usageChartCtx.moveTo(radius, radius);
usageChartCtx.arc(radius, radius, radius, startAngle, endAngle);
usageChartCtx.fillStyle = '#4f64a8'; // Kullanım rengi
usageChartCtx.fill();

// Yüzdelik değeri grafiğin içine yazdır
const text = `${usageValue}%`;
const textSize = usageChartCtx.measureText(text);
const textX = radius;
const textY = radius + radius * 0.4; // Yüzdelik değeri biraz daha aşağıya kaydır
usageChartCtx.font = 'bold 30px Arial';
usageChartCtx.fillStyle = '#ffffff';
usageChartCtx.textAlign = 'center';
usageChartCtx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // Shadow color
usageChartCtx.shadowOffsetX = 1; // Shadow offset along the X-axis
usageChartCtx.shadowOffsetY = 3; // Shadow offset along the Y-axis
usageChartCtx.shadowBlur = 4; // Shadow blur radius

usageChartCtx.textBaseline = 'middle';
usageChartCtx.fillText(text, textX, textY);



document.getElementById('kwh').textContent = `${usageValue}%`;


var waterBtn = document.getElementById("water-btn");
let graphState = 'electricity';
var statisticsContainer = document.getElementById("statistics-container");
waterBtn.addEventListener("click", function() {
  if(graphState == 'electricity') {
    graphToWater();
    document.getElementById('elusage').textContent = 'Water Usage';
    document.getElementById('elcost').textContent = 'Water Cost';
  }
  else {
  graphToElectricity();
  document.getElementById('elusage').textContent = 'Electric Usage';
  document.getElementById('elcost').textContent = 'Electric Cost';
} 

});

function graphToElectricity() {
  graphState = 'electricity';
  waterBtn.innerHTML = `<img class="right" src="right-arrow.png" alt="Water Icon" width="16px" height="16px"> Water`;
  lineChart.destroy();
  lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Haftalık etiketler
      datasets: [
        {
          label: 'Electricity Consumption',
          data: weeklyData2,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              weight: 'bold' // Yazıların kalınlığı
            }
          }
        },
        x: {
          ticks: {
            font: {
              weight: 'bold'
            }
          }
        }
      }
    }
  });
}

function graphToWater() {
  graphState = 'water';
  waterBtn.innerHTML = `<img class="right" src="left-arrow.png" alt="Water Icon" width="16px" height="16px"> Electricity`;
  lineChart.destroy();
  lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Haftalık etiketler
      datasets: [
        {
          label: 'Water Consumption',
          data: weeklyData,
          borderColor: 'rgba(230, 126, 34, 1)', // Yeni çizgi rengi (turuncu tonu)
          backgroundColor: 'rgba(230, 126, 34, 0.2)', // Yeni arka plan rengi (turuncu tonu)
          borderWidth: 4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              weight: 'bold' // Yazıların kalınlığı
            }
          }
        },
        x: {
          ticks: {
            font: {
              weight: 'bold'
            }
          }
        }
      }
    }
  });
}

const humidity = localStorage.getItem('b-humidity') ? localStorage.getItem('b-humidity') : 0;
const co2 = localStorage.getItem('b-co2') ? localStorage.getItem('b-co2') : 0;
const temperature = localStorage.getItem('b-temperature') ? localStorage.getItem('b-temperature') : 0;
const electric = localStorage.getItem('b-electric') ? localStorage.getItem('b-electric') : 0;
document.getElementById('valuesCo2').textContent = co2 + " ppm ";
document.getElementById('valuesTemp').textContent = temperature + " C°";
document.getElementById('valuesHum').textContent = '% ' + humidity ;
document.getElementById('kwh').textContent = electric + ' kwh';


const isRouterOn = localStorage.getItem('b-wifiCheck') ? localStorage.getItem('b-wifiCheck') : 'off';
const routerOn = isRouterOn == 'true' ? 'on' : 'off';
document.getElementById('routerOn').classList.add(routerOn);
document.getElementById('routerOn').textContent = routerOn.toUpperCase();

const isLightOn = localStorage.getItem('b-lightSet') ? localStorage.getItem('b-lightSet') : 'off';
const lightOn = isLightOn == 'true' ? 'on' : 'off';
document.getElementById('lightOn').classList.add(lightOn);
document.getElementById('lightOn').textContent = lightOn.toUpperCase();

const isLockOn = localStorage.getItem('b-doorCheck') ? localStorage.getItem('b-doorCheck') : 'off';
const lockOn = isLockOn == 'true' ? 'on' : 'off';
document.getElementById('lockOn').classList.add(lockOn);
document.getElementById('lockOn').textContent = lockOn.toUpperCase();

const wifiTime = localStorage.getItem('b-wifiTime') ? localStorage.getItem('b-wifiTime') : 'Always';
const doorTime = localStorage.getItem('b-doorTime') ? localStorage.getItem('b-doorTime') : 'Always';
const brightness = localStorage.getItem('b-bright') ? localStorage.getItem('b-bright') : 0;

document.getElementById('descWifi').textContent = 'Wifi Open Hours: ' + wifiTime;
document.getElementById('descLock').textContent = 'Door Open Hours: ' + doorTime;
document.getElementById('descLight').textContent = 'Brightness: ' + brightness;