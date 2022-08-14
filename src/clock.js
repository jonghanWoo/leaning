const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  if (Number(hours) < 13) {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  } else {
    const hour12 = String(hours).padStart(2, "0");
    clock.innerText = `${hour12}:${minutes}:${seconds}`;
  }
}

getClock();
setInterval(getClock, 1000);
