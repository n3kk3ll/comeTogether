<?php
// php mailer files

use PHPMailer\PHPMailer\PHPMailer;

require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';
require 'mailer/Exception.php';
// user data
$name = $_POST['name'];
$phone = $_POST['phone'];
// e-mail variables
$title = "Заявка на пробне заняття";
$body = '' . $name . ' залишив заявку на пробне заняття. <br> Ви можете зв\'язатися з ним за номером ' . $phone;
//php mailer settings
$mail = new PHPMailer();
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;
$mail->SMTPDebug = 2;
$mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
};
//mailbox settings
$mail->Host = 'smtp.gmail.com';
$mail->Username = '';   // mailbox login
$mail->Password = '';   // mailbox password
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';
$mail->setFrom('', 'ComeTogether Team'); // first argument should be identical to mailbox login
// who will receive the mail
$mail->addAddress('');  // mail receiver
// sending message
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;
// check is mail was send
if (!$mail->send()) {
    echo 'error';
} else {
    echo json_encode(["name" => $name, "phone" => $phone]);
}
