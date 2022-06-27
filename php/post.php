<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];

    // Fetch user info
    $SR="SELECT * from users WHERE email LIKE '$email'";
    $SQ=mysqli_query($ConnectDB,$SR);
    $row = mysqli_fetch_row($SQ);
    $user_id=$row[0];

    // Insert post
    $body = $DecodedData['body'];
    $date = $DecodedData['date'];

    $IR="INSERT INTO post(user_id,date,body,file,like_list) VALUES ('$user_id','$date','$body','','')";
    $IQ=mysqli_query($ConnectDB,$IR);

    /*
    // Verify existing posts
    $SR="SELECT * FROM post";
    $SQ=mysqli_query($ConnectDB,$SR);
    $rows=mysqli_fetch_array($SQ);
    $size=count($rows);
    $fileNumber=$size+1;

    if (empty($DecodedData['file']['fileName'])){
        $Message='File not ok';
        
        // Insert post
        $body = $DecodedData['body'];
        $date = $DecodedData['date'];

        $IR="INSERT INTO post(user_id,date,body,file,like_number) VALUES ('$user_id','$date','$body','','0')";
        $IQ=mysqli_query($ConnectDB,$IR);
        
    }
    else{
        $Message='File ok';
        
        // File Upload
        $fileName = $fileNumber.$DecodedData['file']['fileName'];
        $base64 = $DecodedData['file']['base64'];

        $data = base64_decode($base64);
        $success = file_put_contents($fileName,$data);
        rename("./$fileName","./PostFile/$forenameSurname/$fileName");

        // Insert post
        $body = $DecodedData['body'];
        $date = $DecodedData['date'];
        $newDirectory = "http://isis.unice.fr/~ey001600/ext/PostFile/$forenameSurname/$fileName";

        $IR="INSERT INTO post(user_id,date,body,file,like_number) VALUES ('$user_id','$date','$body','$newDirectory','0')";
        $IQ=mysqli_query($ConnectDB,$IR);
    }
    */

    echo json_encode('Posted');
?>