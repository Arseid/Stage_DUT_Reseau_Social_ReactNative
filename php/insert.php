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
    $type=$DecodedData['type'];
    $option1=$DecodedData['option1'];
    $option2=$DecodedData['option2'];

    $SR="SELECT * from users WHERE email LIKE '$email'";

    $SQ=mysqli_query($ConnectDB,$SR);
    $count=mysqli_num_rows($SQ);

    if ($count>0){
        $Message="already exists";
    }
    else{
        $IR="INSERT INTO users(forename,surname,email,pwd,type,option1,option2) values('$forename','$surname','$email','$pwd','$type','$option1','$option2')";
        $IQ=mysqli_query($ConnectDB,$IR);
        if($IQ){
            $SR="SELECT * from users WHERE email LIKE '$email'";
            $SQ=mysqli_query($ConnectDB,$SR);
            $row = mysqli_fetch_row($SQ);
            $user_id=$row[0];
            $IR="INSERT INTO profile (user_id,gender,description,pp,followers,following) values ('$user_id','','','http://isis.unice.fr/~ey001600/ext/profilePicture/default.png','','')";
            $IQ=mysqli_query($ConnectDB,$IR);
            $Message="user successfully registered";
        }
        else{
            $Message="registration failed";
        }
    }

    $Response[]=array("Message"=>$Message);

    echo json_encode($Response);
?>