<?php
session_start();

@include 'p-config.php';

$errors = [];

if(isset($_POST['submit'])){
    $email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $select = "SELECT * FROM usersp WHERE email = ? LIMIT 1";
    $stmt = $conn->prepare($select);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows === 1){
        $row = $result->fetch_assoc();
        if(password_verify($password, $row['password'])){
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['email'] = $row['email'];
            header('Location: ../producer/main.html');
            exit();
        } else {
            $errors[] = 'Incorrect email or password!';
        }
    } else {
        $errors[] = 'Incorrect email or password!';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Producer Login Form</title>

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
            <h3>Login</h3>
            <?php 
            if(!empty($errors)){
                foreach($errors as $error){
                    echo '<span class="error-msg">'.$error.'</span>';
                }
            }
            
            ?>
            <input type="email" name="email" required placeholder="Enter your email">
            <input type="password" name="password" required placeholder="Enter your password">
            <input type="submit" name="submit" value="Login" class="form-btn">
            <p>Don't have an account? <a href="producer_register.php">Sign up</a></p>
        </form>
    </div>
</body>
</html>
