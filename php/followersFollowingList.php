<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email=$DecodedData['email'];

    $SR="SELECT * from users WHERE email LIKE '$email'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $user_id=$row[0];

    $SR="SELECT * from profile WHERE user_id='$user_id'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);

    $followers=$row[5];
    $following=$row[6];

    // Create List of followers
    $listFollowers=array();
    $arrayFollowers=explode(',',$followers);
    for ($i=0;$i<sizeof($arrayFollowers);$i++){
        $follower=array();

        $follower_id=$arrayFollowers[$i];
        $SR="SELECT * from users WHERE user_id='$follower_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);

        array_push($follower,$row[1]);
        array_push($follower,$row[2]);

        $SR="SELECT * from profile WHERE user_id='$follower_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);        

        array_push($follower,$row[3]);
        array_push($listFollowers,$follower);
    }

    // Create List of following
    $listFollowing=array();
    $arrayFollowing=explode(',',$following);
    for ($i=0;$i<sizeof($arrayFollowing);$i++){
        $following=array();

        $following_id=$arrayFollowing[$i];
        $SR="SELECT * from users WHERE user_id='$following_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);

        array_push($following,$row[1]);
        array_push($following,$row[2]);

        $SR="SELECT * from profile WHERE user_id='$following_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);        

        array_push($following,$row[3]);
        array_push($listFollowing,$following);
    }

    $bothLists=array();
    array_push($bothLists,$listFollowers);
    array_push($bothLists,$listFollowing);

    echo json_encode($bothLists);
?>