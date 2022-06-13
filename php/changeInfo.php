<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $option1=$DecodedData['option1'];
    $option2=$DecodedData['option2'];
    $email=$DecodedData['email'];

    $MR="UPDATE users SET option1 = '$option1', option2 = '$option2' WHERE users.email = '$email'";
    $MQ=mysqli_query($ConnectDB,$MR);

    if ($MQ){
        $Message="user's info successfully modified";
    }
    else{
        $Message="modification failed";
    }

    $Response[]=array(
        "Message"=>$Message,
    );

    echo json_encode($Response);
?>