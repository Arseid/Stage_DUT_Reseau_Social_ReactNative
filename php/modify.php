<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $forename=$DecodedData['forename'];
    $surname=$DecodedData['surname'];
    $email=$DecodedData['email'];

    $MQ="UPDATE users SET forename = '$forename', surname = '$surname' WHERE users.email = '$email'";

    $MR=mysqli_query($ConnectDB,$MQ);

    if ($MR){
        $Message="user successfully modified";
    }
    else{
        $Message="modification failed";
    }

    $Response[]=array(
        "Message"=>$Message,
    );

    echo json_encode($Response);
?>