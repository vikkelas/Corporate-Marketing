<?php
// Файлы phpmailer
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
//$mail->SMTPDebug = 3;  

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru'; 
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username   = 'admin@mynavilab.ru'; // Логин на почте
$mail->Password   = 'F3eaPBqYiN@VfTM'; // Пароль на почте
$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port= 2525;




$mail->setFrom('admin@mynavilab.ru'); // Адрес самой почты и имя отправителя
$mail->addAddress('bass89@mail.ru'); 
$mail->isHTML(true); 
// Формирование самого письма
$mail->Subject = "Заявка с сайта Corporate Marketing";
$body = '
<h1>Заявка</h1>
<h2>'.$name.' оставил заявку</h2>
<p>номер телефона: <strong>'.$phone.'</strong></p>
<p>почта: <strong>'.$email.'</strong></p>
';

$mail->Body = $body;
if(!$mail->send()) {
    echo 'Error';
}
?>