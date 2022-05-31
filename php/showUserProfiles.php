<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];

    $SR="SELECT * from users WHERE email='$email'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $user_id=$row[0];

    $SR="SELECT * from profile WHERE user_id='$user_id'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $listFollowing=$row[6];
    $arrayFollowing=explode(',',$listFollowing);

    $SR="SELECT * from users WHERE email!='$email' AND user_id NOT IN ('" . implode( "', '", $arrayFollowing ) . "') ORDER BY RAND() LIMIT 15";
    $SQ=mysqli_query($ConnectDB,$SR);
    $rows=mysqli_fetch_all($SQ);

    for ($i=0;$i<sizeof($rows);$i++){
        $random_user_id=$rows[$i][0];

        $SR="SELECT * from profile WHERE user_id='$random_user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);
        array_push($rows[$i],$row);
    }

    echo json_encode($rows);
?>