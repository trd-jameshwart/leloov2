<?php
require_once("../../lib/initialize.php");

if(isset($_POST['email']) && isset($_POST['password'])){

    if(empty($_POST['email']) || empty($_POST['password']) ){
        echo "0";
    }else{
            $user_email = $dbcore->escape_value($_POST['email']);
            $user_pword = $dbcore->escape_value($_POST['password']);
            if($user->user_login($user_email,$user_pword)){
                echo "user is login already";
            }else{
                echo "incorrect username or password";
            }
    }
}