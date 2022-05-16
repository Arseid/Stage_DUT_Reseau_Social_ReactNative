<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $email=$DecodedData['email'];

    $SQ="SELECT * from users WHERE email='$email'";

    $R=mysqli_query($ConnectDB,$SQ);
    $count=mysqli_num_rows($R);

    if ($count>0){
        $Message="User Info :";
        //Retrieve all info in user
        $row = mysqli_fetch_row($R);
        $user_id=$row[0];
        $forename=$row[1];
        $surname=$row[2];
        $pwd=$row[4];
        $type=$row[5];
        $option1=$row[6];
        $option2=$row[7];
        
        //Retreive all info in profile
        $SQ="SELECT * from profile WHERE user_id='$user_id'";
        $R=mysqli_query($ConnectDB,$SQ);
        $row = mysqli_fetch_row($R);
        $gender = $row[1];
        $description = $row[2];
        $pp = $row[3];
        $backgroundProfilePicture = $row[4];

        $followers = $row[5];
        if(strlen($followers)==0){
            $followersCounter=0;
        } else {
            $followersArray=explode(',',$followers);
            $followersCounter=sizeof($followersArray);    
        }

        $following = $row[6];
        if(strlen($following)==0){
            $followingCounter=0;
        } else {
            $followingArray=explode(',',$following);
            $followingCounter=sizeof($followingArray);
        }

        $interest = $row[7];
    }
    else{
        $Message="not found";
    }

    $Response[]=array(
        "Message"=>$Message,
        "Forename"=>$forename,
        "Surname"=>$surname,
        "Pwd"=>$pwd,
        "Type"=>$type,
        "Option1"=>$option1,
        "Option2"=>$option2,
        "Gender"=>$gender,
        "Description"=>$description,
        "PP"=>$pp,
        "BackgroundPicture"=>$backgroundProfilePicture,
        "Followers"=>$followers,
        "FollowersCounter"=>$followersCounter,
        "Following"=>$following,
        "FollowingCounter"=>$followingCounter,
        "Interest"=>$interest,
    );

    echo json_encode($Response);
?>