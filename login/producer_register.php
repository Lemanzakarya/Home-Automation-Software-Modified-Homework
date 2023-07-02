<?php
session_start();

@include 'p-config.php';

$errors = [];

if(isset($_POST['submit'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];
    $confirm_password = $_POST['cpassword'];

    // Form veri doğrulama kontrolleri
    if(empty($name)){
        $errors[] = 'Name is required!';
    } elseif(!preg_match("/^[a-zA-Z]+$/", $name)){
        $errors[] = 'Name should only contain letters!';
    }

    if(empty($email)){
        $errors[] = 'Email is required!';
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errors[] = 'Invalid email format!';
    }

    if(empty($password)){
        $errors[] = 'Password is required!';
    } elseif(strlen($password) < 6){
        $errors[] = 'Password should be at least 6 characters long!';
    }

    if($password !== $confirm_password){
        $errors[] = 'Passwords do not match!';
    }

    if(empty($errors)){
        // Veritabanına ekleme işlemleri
        $select = "SELECT * FROM usersp WHERE email = ? LIMIT 1";
        $stmt = $conn->prepare($select);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows > 0){
            $errors[] = 'User already exists!';
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $insert = "INSERT INTO usersp (name, email, password) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($insert);
            $stmt->bind_param("sss", $name, $email, $hashed_password);
            $stmt->execute();
            header('location: producer_login.php');
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
    <title>Producer Register Form</title>

    <link rel="stylesheet" href="style1.css">
</head>
<body>
<div class="logout-container">
    <form action="logout.php" method="post">
        <input type="submit" name="submit" value="Logout" class="logout-btn">
    </form>
</div>
<div class="form-producer">
    <form action="" method="post">
        <h3>Sign Up</h3>
        <?php 
        if(!empty($errors)){
            foreach($errors as $error){
                echo '<span class="error-msg">'.$error.'</span>';
            }
        }
        ?>
        <input type="text" name="name" required placeholder="Enter your name" value="">
        <input type="email" name="email" required placeholder="Enter your email" value="">
        <input type="password" name="password" required placeholder="Enter your password" value="">
        <input type="password" name="cpassword" required placeholder="Confirm your password" value="">
        <input type="submit" name="submit" value="Sign Up" class="form-btn">
        <p>Already have an account? <a href="producer_login.php">Login</a></p>
    </form>
</div>
</body>
</html>
