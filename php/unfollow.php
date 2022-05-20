<?php
    include("/home/users/etudiant/e/ey001600/www/.ht_mysql.inc");

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $ConnectDB=mysqli_connect("$server","$user","$password","$base");
    $DB=mysqli_select_db($ConnectDB,"users");

    $email = $DecodedData['email'];
    $targetEmail = $DecodedData['targetEmail'];

    // Fetch user_ids
    $SRUser="SELECT * from users WHERE email='$email'";
    $SQUser=mysqli_query($ConnectDB,$SRUser);
    $rowUser=mysqli_fetch_row($SQUser);
    $self_user_id=$rowUser[0];

    $SRTargetUser="SELECT * from users WHERE email='$targetEmail'";
    $SQTargetUser=mysqli_query($ConnectDB,$SRTargetUser);
    $rowTargetUser=mysqli_fetch_row($SQTargetUser);
    $target_user_id=$rowTargetUser[0];

    // -1 following
    $SRUser="SELECT * from profile WHERE user_id='$self_user_id'";
    $SQUser=mysqli_query($ConnectDB,$SRUser);
    $rowUser=mysqli_fetch_row($SQUser);

    $arrayFollowing=explode(',',$rowUser[6]);
    $key=array_search($target_user_id,$arrayFollowing);
    array_splice($arrayFollowing,$key,1);
    $arrayFollowingAfter=implode(',',$arrayFollowing);

    $SRUser="UPDATE profile SET following = '$arrayFollowingAfter' WHERE profile.user_id = '$self_user_id'";
    $SQUser=mysqli_query($ConnectDB,$SRUser);

    // -1 follower
    $SRTargetUser="SELECT * from profile WHERE user_id='$target_user_id'";
    $SQTargetUser=mysqli_query($ConnectDB,$SRTargetUser);
    $rowTargetUser=mysqli_fetch_row($SQTargetUser);

    $arrayFollower=explode(',',$rowTargetUser[5]);
    $key=array_search($self_user_id,$arrayFollower);
    array_splice($arrayFollower,$key,1);
    $arrayFollowerAfter=implode(',',$arrayFollower);

    $SRTargetUser="UPDATE profile SET followers = '$arrayFollowerAfter' WHERE profile.user_id = '$target_user_id'";
    $SQTargetUser=mysqli_query($ConnectDB,$SRTargetUser);
    
    echo json_encode('Unfollowed');
?>