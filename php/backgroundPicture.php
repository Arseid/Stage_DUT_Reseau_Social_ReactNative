<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    // Profile Picture Upload
    $fileName = $DecodedData['background']['fileName'];
    $base64 = $DecodedData['background']['base64'];

    $data = base64_decode($base64);
    $success = file_put_contents($fileName,$data);
    rename("./$fileName","./BackgroundPicture/$fileName");

    // Change directory for the new profile picture
    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];
    $date = $DecodedData['date'];
    $newDirectory = "http://isis.unice.fr/~ey001600/ext/BackgroundPicture/$fileName?time=$date";

    $SR="SELECT * from users WHERE email LIKE '$email'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $user_id=$row[0];
    $MR="UPDATE profile SET backgroundPicture = '$newDirectory' WHERE profile.user_id = '$user_id'";
    $MQ=mysqli_query($ConnectDB,$MR);
    
    echo json_encode('Background picture changed');
?>