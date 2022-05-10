<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email=$DecodedData['email'];

    $IR="INSERT INTO test(list_follow) values('{"testKey": "testValue"}')";
    $IQ=mysqli_query($ConnectDB,$IR);

    echo json_encode('Test Done');
?>