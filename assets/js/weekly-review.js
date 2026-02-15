const sliders = ['productivity', 'stress', 'fatigue'];

sliders.forEach((id) => {
  const input = document.getElementById(id);
  const label = document.getElementById(`${id}Value`);
  if (input && label) {
    input.addEventListener('input', () => {
      label.textContent = input.value;
    });
  }
});

const reviewBtn = document.getElementById('reviewBtn');
const reviewResult = document.getElementById('reviewResult');

if (reviewBtn) {
  reviewBtn.addEventListener('click', () => {
    const productivity = Number(document.getElementById('productivity').value);
    const stress = Number(document.getElementById('stress').value);
    const fatigue = Number(document.getElementById('fatigue').value);

    if (stress >= 4 && productivity <= 2) {
      reviewResult.textContent = 'Burnout alert: take lighter sessions this weekend and focus on revision.';
      reviewResult.className = 'mt-3 mb-0 text-danger';
      return;
    }

    reviewResult.textContent = 'Review submitted. Great work! Keep your pace consistent next week.';
    reviewResult.className = 'mt-3 mb-0 text-success';
  });
}
