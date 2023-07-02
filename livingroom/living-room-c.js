
let activeChartType = 'weekly'; // Initialize the activeChartType globally

// Declare the weeklyData and monthlyData variables outside the function
let weeklyData, monthlyData;
const weeklyBtn = document.getElementById('weekly-chart-btn');
const monthlyBtn = document.getElementById('monthly-chart-btn');
const lineChartCanvas = document.getElementById('line-chart');
let lineChart;

// Verileri localStorage'dan al ve grafiğe entegre et
function retrieveDataAndCreateChart() {
  const jsonData = localStorage.getItem("electricData");
  if (jsonData) {
    const data = JSON.parse(jsonData);
    weeklyData = data.weeklyData;
    monthlyData = data.monthlyData;
    if (lineChart) {
      lineChart.destroy();
    }

    const chartLabels = (activeChartType === 'weekly')
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: 'Electric Consumption',
            data: (activeChartType === 'weekly') ? weeklyData : monthlyData,
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
                weight: 'bold'
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

    // Diğer grafikler için monthlyData kullanabilirsin

  } else {
    alert("No data found.");
  }
}


// Call retrieveDataAndCreateChart initially to display the chart with the initial activeChartType
retrieveDataAndCreateChart();

// Update the chart when the active button changes
function updateChart() {
  lineChart.data.datasets[0].data = (activeChartType === 'weekly') ? weeklyData : monthlyData;
  const chartLabels = (activeChartType === 'weekly')
  ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  lineChart.data.labels = chartLabels;
  lineChart.update();
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

// Call retrieveDataAndCreateChart initially to display the chart with the initial activeChartType
retrieveDataAndCreateChart();

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


// Metin değerlerini güncelle


const humidity = localStorage.getItem('ba-humidity') ? localStorage.getItem('ba-humidity') : 0;
const co2 = localStorage.getItem('ba-co2') ? localStorage.getItem('ba-co2') : 0;
const temperature = localStorage.getItem('ba-temperature') ? localStorage.getItem('ba-temperature') : 0;
const electric = localStorage.getItem('ba-electric') ? localStorage.getItem('ba-electric') : 0;
document.getElementById('valuesCo2').textContent = co2 + " ppm ";
document.getElementById('valuesTemp').textContent = temperature + " C°";
document.getElementById('valuesHum').textContent = '% ' + humidity ;
document.getElementById('kwh').textContent = electric + ' kwh';

const smart1 = localStorage.getItem('ba-tv1') ? localStorage.getItem('ba-tv1') : 0;
const smart2 = localStorage.getItem('ba-tv2') ? localStorage.getItem('ba-tv2') : 0;

const wifiTime = localStorage.getItem('ba-wifiTime') ? localStorage.getItem('ba-wifiTime') : 'Always';
const doorTime = localStorage.getItem('ba-doorTime') ? localStorage.getItem('ba-doorTime') : 'Always';
const brightness = localStorage.getItem('ba-bright') ? localStorage.getItem('ba-bright') : 0;

document.getElementById('descSmart1').textContent = 'Volume: ' + smart1;
document.getElementById('descSmart2').textContent = 'Channel Number: ' + smart2;
document.getElementById('descWifi').textContent = 'Wifi Open Hours: ' + wifiTime;
document.getElementById('descLock').textContent = 'Door Open Hours: ' + doorTime;
document.getElementById('descLight').textContent = 'Brightness: ' + brightness;

const isSmartOn = localStorage.getItem('ba-tvOn') ? localStorage.getItem('ba-tvOn') : 'off';
const smartOn = isSmartOn == 'true' ? 'on' : 'off';
document.getElementById('smartOn').classList.add(smartOn);
document.getElementById('smartOn').textContent = smartOn.toUpperCase();

const isRouterOn = localStorage.getItem('ba-wifiCheck') ? localStorage.getItem('ba-wifiCheck') : 'off';
const routerOn = isRouterOn == 'true' ? 'on' : 'off';
document.getElementById('routerOn').classList.add(routerOn);
document.getElementById('routerOn').textContent = routerOn.toUpperCase();

const isLockOn = localStorage.getItem('ba-doorCheck') ? localStorage.getItem('ba-doorCheck') : 'off';
const lockOn = isLockOn == 'true' ? 'on' : 'off';
document.getElementById('lockOn').classList.add(lockOn);
document.getElementById('lockOn').textContent = lockOn.toUpperCase();

const isLightOn = localStorage.getItem('ba-lightSet') ? localStorage.getItem('ba-lightSet') : 'off';
const lightOn = isLightOn == 'true' ? 'on' : 'off';
document.getElementById('lightOn').classList.add(lightOn);
document.getElementById('lightOn').textContent = lightOn.toUpperCase();

const usageValue = electric;

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