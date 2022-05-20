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

    /*
    $bothLists=array();
    array_push($bothLists,$listFollowers);
    array_push($bothLists,$listFollowing);
    */

    $test=array();

    $Response[]=array(
        "ListFollowing"=>$listFollowing,
        "ListFollowers"=>$listFollowers,
    );

    echo json_encode($Response);

    //$testArray='1,2,3,4,5,6,7,8,9';
    
    //$IR="INSERT INTO test(list_follow) values('$testArray')";
    //$IQ=mysqli_query($ConnectDB,$IR);

    /*
    $SR="SELECT list_follow from test WHERE test_id='4'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row2 = mysqli_fetch_row($SQ);

    $array=explode(',',$row2[0]);
    array_push($array,$user_id);
    $arrayAfter=implode(',',$array);

    $MR="UPDATE test SET list_follow = '$arrayAfter' WHERE test.test_id = '5'";
    $MQ=mysqli_query($ConnectDB,$MR);

    $size=sizeof(explode(',',$arrayAfter));
    */

    /*
    $toEcho=0;

    for ($i=0;$i<sizeof($array);$i++){
        $toEcho=$array[$i];
    } 
    */  

    //echo json_encode($size);
    //echo json_encode('done');
?>