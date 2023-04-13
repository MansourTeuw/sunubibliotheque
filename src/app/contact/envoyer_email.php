<?php

if (isset($_POST['submit'])) {
  $to = "euwt3376@gmail.com"; // l'adresse email à laquelle vous souhaitez envoyer le message
  $from = $_POST['email']; // l'adresse email de l'expéditeur
  $nom = $_POST['nom'];
  $sujet = $_POST['sujet'];
  $message = $_POST['message'];
  $headers = "From:" . $from;
  mail($to, $sujet, $message, $headers);
  echo "Message envoyé. Merci de nous avoir contacté !";
}

