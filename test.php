
<?php
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

require 'inc/src/Twilio/autoload.php';
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$sid = 'AC813465cdab069f18ea4dc0275fb60f5a';
$token = '318fced0b955a169817ff2f29d3e2594';
$client = new Client($sid, $token);

// Use the client to do fun stuff like send text messages!
$client->messages->create(
    // the number you'd like to send the message to
    '+966551307726',
    array(
        // A Twilio phone number you purchased at twilio.com/console
        'from' => '+12052360674',
        // the body of the text message you'd like to send
        'body' => "Hey Jenny! Good luck on the bar exam!"
    )
);
?>
