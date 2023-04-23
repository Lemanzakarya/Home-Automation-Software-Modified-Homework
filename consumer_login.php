<?php
session_start();

@include 'config.php';

if(isset($_POST['submit'])){
    $name =  isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : '';
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = md5($_POST['password']);
    $cpass = isset($_POST['cpassword']) ? md5($_POST['cpassword']) : '';

    $select = "SELECT * FROM users WHERE email = '$email' && password = '$pass' ";
    $result = mysqli_query($conn, $select);

    if(mysqli_num_rows($result) > 0){
     header('location: consumer.html');
    }else{
        $error[] = 'incorrect email or password!';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login form</title>

    <!-- consumer css file link -->
    <link rel="stylesheet" href="style1.css">

</head>
<body>
<div class="logout-container">
  <form action="logout.php" method="post">
    <input type="submit" name="submit" value="Logout" class="logout-btn">
  </form>
</div>

    <div class="form-container">
        <form action="" method="post">
            <h3>login</h3>
            <?php 
            if(isset($error)){
                foreach($error as $error){
                    echo '<span class="error-msg">'.$error.'</span>';
                }
            }
            
            ?>
            <input type="email" name="email" required placeholder="Enter your email">
            <input type="password" name="password" required placeholder="Enter your password">
            <input type="submit" name="submit" value="Login" class="form-btn">
            <p>don't have an account? <a href="consumer_register.php">sign up</a></p>
   </form>
 </div>
</body>
</html>