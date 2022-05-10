<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];
    $targetEmail = $DecodedData['targetEmail'];

    // +1 following
    $SRUser="SELECT * from users WHERE email='$email'";
    $SQUser=mysqli_query($ConnectDB,$SRUser);
    $rowUser=mysqli_fetch_row($SQUser);
    $self_user_id=$rowUser[0];
    $SRUser="SELECT * from profile WHERE user_id='$self_user_id'";
    $SQUser=mysqli_query($ConnectDB,$SRUser);
    $rowUser=mysqli_fetch_row($SQUser);
    $numberFollowingTarget=$rowUser[5];
    $numberFollowingTargetPlus=$numberFollowingTarget+1;
    $SRUser="UPDATE profile SET following = '$numberFollowingTargetPlus' WHERE profile.user_id = '$self_user_id'";
    $SQUser=mysqli_query($ConnectDB,$SRUser);

    // +1 follower
    $SRTargetUser="SELECT * from users WHERE email='$targetEmail'";
    $SQTargetUser=mysqli_query($ConnectDB,$SRTargetUser);
    $rowTargetUser=mysqli_fetch_row($SQTargetUser);
    $target_user_id=$rowTargetUser[0];
    $SRTargetUser="SELECT * from profile WHERE user_id='$target_user_id'";
    $SQTargetUser=mysqli_query($ConnectDB,$SRTargetUser);
    $rowTargetUser=mysqli_fetch_row($SQTargetUser);
    $numberFollowerTarget=$rowTargetUser[4];
    $numberFollowerTargetPlus=$numberFollowerTarget+1;
    $SRTargetUser="UPDATE profile SET followers = '$numberFollowerTargetPlus' WHERE profile.user_id = '$target_user_id'";
    $SQTargetUser=mysqli_query($ConnectDB,$SRTargetUser);
    
    echo json_encode('Followed');
?>