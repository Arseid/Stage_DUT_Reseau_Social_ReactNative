<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $forename=$DecodedData['forename'];
    $surname=$DecodedData['surname'];
    $email=$DecodedData['email'];
    $pwd=$DecodedData['pwd'];

    $SQ="SELECT * from users WHERE email LIKE '$email'";

    $SQ=mysqli_query($ConnectDB,$SQ);
    $count=mysqli_num_rows($SQ);

    if ($count>0){
        $Message="already exists";
    }
    else{
        $IQ="INSERT INTO users(forename,surname,email,pwd) values('$forename','$surname','$email','$pwd')";
        $RQ=mysqli_query($ConnectDB,$IQ);
        if($RQ){
            $Message="user successfully registered";
        }
        else{
            $Message="registration failed";
        }
    }

    $Response[]=array("Message"=>$Message);

    echo json_encode($Response);
?>