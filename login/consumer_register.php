<?php
session_start();

@include 'config.php';

$errors = [];

if(isset($_POST['submit'])){
    $name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : '';
    $email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $confirmPassword = isset($_POST['cpassword']) ? $_POST['cpassword'] : '';

    $select = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($select);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0){
        $errors[] = 'User already exists!';
    } else {
        if($password !== $confirmPassword){
            $errors[] = 'Passwords do not match!';
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $insert = "INSERT INTO users(name, email, password) VALUES(?, ?, ?)";
            $stmt = $conn->prepare($insert);
            $stmt->bind_param("sss", $name, $email, $hashedPassword);
            $stmt->execute();
            header('Location: consumer_login.php');
            exit();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumer Register Form</title>
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
            <h3>Sign Up</h3>
            <?php 
            if(!empty($errors)){
                foreach($errors as $error){
                    echo '<span class="error-msg">'.$error.'</span>';
                }
            }
            
            ?>
            <input type="text" name="name" required placeholder="Enter your name">
            <input type="email" name="email" required placeholder="Enter your email">
            <input type="password" name="password" required placeholder="Enter your password">
            <input type="password" name="cpassword" required placeholder="Confirm your password">
            <input type="submit" name="submit" value="Sign Up" class="form-btn">
            <p>Already have an account? <a href="consumer_login.php">Login</a></p>
        </form>
    </div>
</body>
</html>
