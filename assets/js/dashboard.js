const weeklyCtx = document.getElementById('weeklyChart');
const subjectCtx = document.getElementById('subjectChart');

if (weeklyCtx) {
  new Chart(weeklyCtx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Hours',
        data: [2.5, 3, 2, 4, 2.2, 3.8, 1],
        borderRadius: 8,
        backgroundColor: '#6d5efc'
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 5 } }
    }
  });
}

if (subjectCtx) {
  new Chart(subjectCtx, {
    type: 'doughnut',
    data: {
      labels: ['DSA', 'DBMS', 'OS', 'CN'],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: ['#6d5efc', '#22c55e', '#f59e0b', '#f43f5e']
      }]
    },
    options: { plugins: { legend: { position: 'bottom' } } }
  });
}
