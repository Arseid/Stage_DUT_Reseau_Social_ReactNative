<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];

    $SR="SELECT * from users WHERE email!='$email' ORDER BY RAND() LIMIT 6";
    $SQ=mysqli_query($ConnectDB,$SR);
    $rows=mysqli_fetch_all($SQ);

    
    for ($i=0;$i<sizeof($rows);$i++){
        $user_id=$rows[$i][0];

        $SR="SELECT * from profile WHERE user_id='$user_id'";
        $SQ=mysqli_query($ConnectDB,$SR);
        $row = mysqli_fetch_row($SQ);
        array_push($rows[$i],$row);
    }
    

    echo json_encode($rows);
?>