<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $email=$DecodedData['email'];
    $text=$DecodedData['text'];
    $option1=$DecodedData['option1'];

    $listUsers=array();

    if ($option1==''){
        $SR="SELECT * from users WHERE email!='$email' AND (forename LIKE '%$text%' OR surname LIKE '%$text%')";
    }
    else{
        $SR="SELECT * from users INNER JOIN profile ON users.user_id=profile.user_id WHERE users.email!='$email' AND FIND_IN_SET('$option1', profile.interest) AND (forename LIKE '%$text%' OR surname LIKE '%$text%')";
    }

    $SQ=mysqli_query($ConnectDB,$SR);
    $rows=mysqli_fetch_all($SQ);

    for ($i=0;$i<sizeof($rows);$i++){
        $user=array();
        array_push($user,$rows[$i][0]);
        array_push($user,$rows[$i][1]);
        array_push($user,$rows[$i][2]);
        array_push($user,$rows[$i][3]);
        array_push($user,$rows[$i][5]);

        $user_id=$rows[$i][0];
        $SR="SELECT * from profile WHERE user_id='$user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row=mysqli_fetch_row($SQ);

        array_push($user,$row[3]);

        array_push($listUsers,$user);
    }

    echo json_encode($listUsers);
?>