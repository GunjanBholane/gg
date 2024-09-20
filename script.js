// Daily Scam Prevention Tips
const tips = [
    "Never share your password with anyone.",
    "Don't click on links in unsolicited emails.",
    "Use two-factor authentication for extra security.",
    "Always verify the sender of an email before opening attachments."
];

document.getElementById('tip-of-the-day').innerText = tips[Math.floor(Math.random() * tips.length)];

// Quiz Function
function checkQuiz() {
    const answers = document.forms['quiz-form'];
    let score = 0;

    // Loop through questions 1 to 26
    for (let i = 1; i <= 26; i++) {
        if (answers[`q${i}`].value === "correct") {
            score++;
        }
    }

    document.getElementById('quiz-result').innerText = `You got ${score}/26 questions correct!`;
}

// Scam Checker Function
function checkScam() {
    const message = document.getElementById('message').value.toLowerCase();
    let result = "This message seems safe.";

    if (message.includes("urgent") || message.includes("password") || message.includes("bank account")||
        message.includes("Won") ||message.includes("lottery") ||message.includes("cash prize") ||message.includes("OTP")||
        message.includes("end")||message.includes("soon")||message.includes("expires")||message.includes("http"))
         {
        result = "Warning: This message might be a scam! Please first verify it or asked authorized people";
    }

    document.getElementById('scam-result').innerText = result;
}
