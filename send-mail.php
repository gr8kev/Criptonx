<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "info@criptonx.com"; // Replace with your email address
    $subject = "New Message from Website";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $mailBody = "Name: $name\nEmail: $email\n\n$message";

    if (mail($recipient, $subject, $mailBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
}
