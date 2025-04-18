/ login.js

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Simulated login check
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      // Redirect or take action
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});
