<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email=$DecodedData['email'];

    $testArray='1,2,3,4,5,6,7,8,9';
    
    //$IR="INSERT INTO test(list_follow) values('$testArray')";
    //$IQ=mysqli_query($ConnectDB,$IR);

    //$MR="UPDATE test SET list_follow = '$array' WHERE test.user_id = 2";
    //$MQ=mysqli_query($ConnectDB,$MR);

    $SR="SELECT list_follow from test WHERE test_id='4'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);

    $array=explode(',',$row[0]);
    $toEcho=0;

    for ($i=0;$i<sizeof($array);$i++){
        $toEcho=$array[$i];
    }   

    echo json_encode($array);
    //echo json_encode('done');
?>