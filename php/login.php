<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $email=$DecodedData['email'];
    $pwd=$DecodedData['pwd'];

    $SQ="SELECT * from users WHERE email='$email' AND pwd='$pwd'";

    $R=mysqli_query($ConnectDB,$SQ);
    $count=mysqli_num_rows($R);

    if ($count>0){
        $Message="found";
        $row = mysqli_fetch_row($R);
        $forename=$row[1];
        $surname=$row[2];
        
    }
    else{
        $Message="not found";
    }

    $Response[]=array(
        "Message"=>$Message,
        "Forename"=>$forename,
        "Surname"=>$surname,
    );

    echo json_encode($Response);
?>