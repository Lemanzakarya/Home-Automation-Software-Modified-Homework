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

const electricUsageToday = [10, 15, 20, 25, 30, 35, 40];
const electricUsageThisMonth = [200, 250, 300, 350, 400, 450, 500];
const waterUsageToday = [5, 8, 12, 15, 10, 7, 9];
const waterUsageThisMonth = [100, 120, 150, 130, 110, 140, 160];

// Create electric usage chart
const electricUsageChart = new Chart(document.getElementById('electric-usage-chart'), {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Today',
        data: electricUsageToday,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
      },
      {
        label: 'This Month',
        data: electricUsageThisMonth,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: true,
      },
    },
  },
});

// Create water usage chart
const waterUsageChart = new Chart(document.getElementById('water-usage-chart'), {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Today',
        data: waterUsageToday,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
      },
      {
        label: 'This Month',
        data: waterUsageThisMonth,
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: true,
      },
    },
  },
});

const dashboard = document.getElementById('rooms-section');
const statistics = document.getElementById('usage-container');

dashboard.addEventListener('click' , () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
});

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

