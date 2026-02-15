const goals = [
  { title: 'Achieve SGPA 8.5+', progress: 68, deadline: 'Dec 15, 2026' },
  { title: 'Complete 60 DSA problems', progress: 45, deadline: 'Nov 10, 2026' },
  { title: 'Submit all assignments on time', progress: 80, deadline: 'Ongoing' }
];

const goalCards = document.getElementById('goalCards');
if (goalCards) {
  goalCards.innerHTML = goals.map((goal) => `
    <div class="col-md-6 col-lg-4">
      <div class="soft-card p-3 h-100">
        <h2 class="h6">${goal.title}</h2>
        <small class="text-muted d-block mb-2">Deadline: ${goal.deadline}</small>
        <div class="progress mb-2"><div class="progress-bar bg-primary" style="width:${goal.progress}%"></div></div>
        <small class="fw-semibold">${goal.progress}% complete</small>
      </div>
    </div>
  `).join('');
}
