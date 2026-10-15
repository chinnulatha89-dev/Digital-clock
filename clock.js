
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);
