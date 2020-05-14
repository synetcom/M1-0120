<?php 

// connect to database
// mysqli to connect to database
$conn = mysqli_connect('localhost:8889', 'microsoft', 'Ginger5609', 'form');
// localhost:port number, id, pw, database name

// check connection
if (!$conn) {
    echo 'connection error' . mysqli_connect_error();
}

?>