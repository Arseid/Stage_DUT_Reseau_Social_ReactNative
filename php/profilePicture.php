<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $image=$DecodedData['uri'];
    $email=$DecodedData['email'];

    $SR="SELECT * from users WHERE email LIKE '$email'";

    $SQ=mysqli_query($ConnectDB,$SR);
    $count=mysqli_num_rows($SQ);

    if ($count>0){
        $row = mysqli_fetch_row($SQ);
        $user_id=$row[0];
        $IR="UPDATE profile SET pp = '$image' WHERE profile.user_id = '$user_id'";
        $IQ=mysqli_query($ConnectDB,$IR);
        $Message="upload done";
    }
    else{
        $Message="upload failed";
    }

    $Response[]=array("Message"=>$Message);

    echo json_encode($Response);
?>

