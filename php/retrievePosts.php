<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];
    $listFollowing = $DecodedData['listFollowing'];

    // Fetch user info
    $SR="SELECT * from users WHERE email LIKE '$email'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $user_id=$row[0];

    // Verify if user follows people
    if ($listFollowing=='') {
        // Select posts
        $SR="SELECT * from post WHERE user_id='$user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $rows=mysqli_fetch_all($SQ);

        $listPosts=array();
        for ($i=0;$i<sizeof($rows);$i++){
            array_push($listPosts,$rows[$i]);
        }
    }
    else {
        $arrayFollowing=explode(',',$listFollowing);
        $listPosts=array();

        // Select user's posts
        $SR="SELECT * from post WHERE user_id='$user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $rows=mysqli_fetch_all($SQ);

        for ($i=0;$i<sizeof($rows);$i++){
            array_push($listPosts,$rows[$i]);
        }

        // Select following users' posts
        for ($i=0;$i<sizeof($arrayFollowing);$i++){
            $following_user_id=$arrayFollowing[$i];
            $SR="SELECT * from post WHERE user_id='$following_user_id'";
            $SQ=mysqli_query($ConnectDB,$SR);
            $rows=mysqli_fetch_all($SQ);

            for ($i=0;$i<sizeof($rows);$i++){
                array_push($listPosts,$rows[$i]);
            }            
        }  
    }

    // Fetch other infos
    for ($i=0;$i<sizeof($listPosts);$i++){
        $post_user_id=$listPosts[$i][1];

        $SR="SELECT * from users WHERE user_id='$post_user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);

        array_push($listPosts[$i],$row[1]);
        array_push($listPosts[$i],$row[2]);
        array_push($listPosts[$i],$row[5]);

        $SR="SELECT * from profile WHERE user_id='$post_user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);   
        
        array_push($listPosts[$i],$row[3]);
    }
    
    echo json_encode($listPosts);
?>