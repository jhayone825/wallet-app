<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $car = htmlspecialchars($_POST['car']);
    $message = htmlspecialchars($_POST['message']);

    // CHANGE THIS TO YOUR REAL EMAIL
    $to = "your_email@example.com"; 

    $subject = "New Car Inquiry from $name";
    $body = "You have a new car inquiry:\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Car Interested: $car\n".
            "Message: $message\n";

    $headers = "From: noreply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>✅ Thank you, $name! Your inquiry has been sent successfully.</h2>";
    } else {
        echo "<h2>❌ Sorry, there was an error sending your inquiry. Please try again.</h2>";
    }
}
?>
