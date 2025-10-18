function updateTime() {
  const timeElement = document.getElementById("current-time");
  timeElement.textContent = Date.now();
}

updateTime(); // Show immediately
setInterval(updateTime, 1000); // Optional: update every second
