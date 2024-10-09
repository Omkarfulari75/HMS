// Handle registration
function handleRegister(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("register_username").value;
    const password = document.getElementById("register_password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    
    if (password !== confirmPassword) {//password check
        alert("Passwords do not match.");
        return false;
    }

    // Store the username and password in LocalStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! You can now log in.");

    // Redirect to the login page
    window.location.href = "login.html";
}

// Handle login validation and redirection
function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("login_username").value;
    const password = document.getElementById("login_password").value;

    // Retrieve stored credentials from LocalStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Validate the entered credentials with stored ones
    if (username === storedUsername && password === storedPassword) {
        // Store login status in SessionStorage
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", username);

        // Redirect to home page
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password.");
    }
}

// Check if the user is logged in (for home page access)
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        // If not logged in, redirect to the login page
        window.location.href = "login.html";
    } else {
        // If logged in, display the welcome message
        const username = sessionStorage.getItem("username");
        document.getElementById("welcomeMessage").textContent = "Welcome, " + username + "!";
    }
}

// Handle logout and clear session data
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");

    // Redirect to login page after logout
    window.location.href = "login.html";
}
