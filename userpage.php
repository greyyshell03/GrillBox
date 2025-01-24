<?php
// Retrieve the username from the database or file
// ...

// Pass the username as a variable to the HTML template

$username = 'username';
include('login_register.php');
// Include the HTML template or page content
include('login_register_connection.php');
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Welcome, <?php echo $username; ?>!</h1>
  <p>Here's some content for the user page...</p>
    
</body>
</html>