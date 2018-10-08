
<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = $params->email;
        $phone = $params->phoneNumber;
        $name = $params->fullName;
        $comments = $params->comments;
        $message = ' Email: '.$email.' Name: '.$name.' Phone: '.$phone. 'Comments: '.$comments; 

        $recipient = 'd.kokoshkyn@gmail.com';
        $subject = 'new message';
        $headers = "From: $name <$email>";

        mail($recipient, $subject, $message, $headers);
        echo 'Thank you '.$name.'. Your Info has been submitted.';
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}