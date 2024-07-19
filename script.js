const quotes = [
    "Believe in yourself!",
    "You are stronger than you think.",
    "Every day is a new beginning.",
    "Stay positive, work hard, make it happen.",
    "The best time for new beginnings is now.",
    "You are capable of amazing things."
];

function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Display a new quote when the page loads
window.onload = displayNewQuote;