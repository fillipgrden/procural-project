<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $subject = "Wiadomość portfolio";
     $mailTo = "filip.grden@op.pl";
     $headers = "Od: ".$mailFrom;
     $txt = "Masz wiadomosc od ".$headers." ".$name." ".$surname."\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}