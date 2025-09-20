<?php
// submit.php

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data safely
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Save data in a file (e.g., users.txt)
    $file = fopen("Login.txt", "a");
    if ($file) {
        fwrite($file, "Email: $email | Password: $password\n");
        fclose($file);

        echo "<h2>✅ Login Submitted Successfully!</h2>";
        echo "<p>Email : $email</p>";
        echo "<p>Your data has been saved.</p>";
        echo '<a href="Login.htm">Go Back to Login</a>';
    } else {
        echo "❌ Could not open file to save data.";
    }
} else {
    echo "Form not submitted correctly.";
}
?>