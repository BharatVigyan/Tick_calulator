let intervalId = null;

document.getElementById('startButton').addEventListener('click', () => {
  const salary = parseFloat(document.getElementById('salary').value);

  if (isNaN(salary) || salary <= 0) {
    alert('Please enter a valid monthly salary.');
    return;
  }

  // Clear any existing interval
  if (intervalId) clearInterval(intervalId);

  const perSecondEarning = salary / (30 * 24 * 60 * 60); // Assuming 30 days in a month
  const perHourEarning = salary / (30 * 24); // Earnings per hour
  let totalEarning = 0;
  let elapsedTimeInSeconds = 0;

  // Update the earnings display every second
  intervalId = setInterval(() => {
    elapsedTimeInSeconds++;

    totalEarning += perSecondEarning;

    document.getElementById('perSecondCounter').textContent = `Per Second: ₹${perSecondEarning.toFixed(2)}`;
    document.getElementById('hourlyCounter').textContent = `Hourly Earnings: ₹${(elapsedTimeInSeconds / 3600 * perHourEarning).toFixed(2)}`;
    document.getElementById('totalCounter').textContent = `Total Earnings: ₹${totalEarning.toFixed(2)}`;
  }, 1000);
});
