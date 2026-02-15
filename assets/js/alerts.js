const alerts = [
  { type: 'Attendance', priority: 'high', title: 'Attendance below threshold', message: 'OS attendance dropped to 63%. Attend next 5 classes.', when: '2h ago' },
  { type: 'Goal', priority: 'medium', title: 'Goal pace is behind', message: 'DSA goal should be at 55%, currently 45%.', when: '5h ago' },
  { type: 'Study', priority: 'low', title: 'Low study consistency', message: 'Only 3 active study days this week. Aim for 5.', when: '1d ago' }
];

const alertList = document.getElementById('alertsList');
if (alertList) {
  alertList.innerHTML = alerts.map((alert) => `
    <div class="soft-card p-3 alert-item ${alert.priority}">
      <div class="d-flex justify-content-between flex-wrap gap-2">
        <div>
          <h2 class="h6 mb-1">${alert.title}</h2>
          <p class="mb-1 text-muted">${alert.message}</p>
          <small class="text-muted">${alert.when}</small>
        </div>
        <div class="text-end">
          <span class="badge text-bg-light">${alert.type}</span>
          <span class="badge ${alert.priority === 'high' ? 'text-bg-danger' : alert.priority === 'medium' ? 'text-bg-warning' : 'text-bg-success'}">${alert.priority}</span>
        </div>
      </div>
    </div>
  `).join('');
}
