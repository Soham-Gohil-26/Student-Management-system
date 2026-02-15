const attendanceData = [
  { subject: 'DSA', attended: 32, total: 40 },
  { subject: 'DBMS', attended: 28, total: 36 },
  { subject: 'Operating Systems', attended: 19, total: 30 },
  { subject: 'Computer Networks', attended: 26, total: 34 }
];

const rows = document.getElementById('attendanceRows');
const prediction = document.getElementById('attendancePrediction');

if (rows) {
  rows.innerHTML = attendanceData.map((item) => {
    const percent = ((item.attended / item.total) * 100).toFixed(1);
    const status = percent < 75 ? 'Risk' : 'Safe';
    const badgeClass = percent < 75 ? 'text-bg-danger' : 'text-bg-success';
    return `<tr>
      <td>${item.subject}</td>
      <td>${item.attended}</td>
      <td>${item.total}</td>
      <td>${percent}%</td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
    </tr>`;
  }).join('');

  const avg = attendanceData.reduce((sum, s) => sum + (s.attended / s.total) * 100, 0) / attendanceData.length;
  prediction.textContent = avg < 75
    ? 'High risk: attend all classes for the next 2 weeks to cross 75%.'
    : 'You are currently in a safe zone. Maintain consistency to stay above 80%.';
}
