<?php 
$name = $_POST["emri"]; 
$email = $_POST["email"]; 
$msg = $_POST["msg"]; 
$to = "feedback@example.com"; 
$subject = "Feedback-u nga ueb sajti! "; 
$mailcontent = 'Emri i d�rguesit: '. $name . "\n" 
.'Email-i i d�rguesit: '. $email . "\n" 
."Komenti i d�rguesit: \n".$msg ."\n"; 
$headers = 'from: webserver@example.com'; 
if(mail($to, $subject, $msg, $headers)) { 
echo 'Email-i �sht� d�rguar me sukses!'; 
} 
else { 
echo 'D�rgimi i email-it ka d�shtuar!'; 
} 
?>