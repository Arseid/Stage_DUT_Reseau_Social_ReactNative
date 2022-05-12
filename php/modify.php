<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $pronouns=$DecodedData['pronouns'];
    $bio=$DecodedData['bio'];
    $email=$DecodedData['email'];

    $SR="SELECT * from users WHERE email LIKE '$email'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $user_id=$row[0];

    $MR="UPDATE profile SET gender = '$pronouns', description = '$bio' WHERE profile.user_id = '$user_id'";
    $MQ=mysqli_query($ConnectDB,$MR);

    if ($MQ){
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