<?php
// connect to database using include meethod

include('./config/db_connect.php');

// writr query for all data
$sql = 'SELECT title, content, email FROM users ORDER BY created_at';

// make query and get result
$result = mysqli_query($conn, $sql);

// fetch the resulting rows as an array
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

// free the result from memory
mysqli_free_result($result);

// close connection
mysqli_close($conn);


?>
<!DOCTYPE html>
<html lang="en">
<?php include('./templates/header.php'); ?>
<h4 class="center grey-text">Users</h4>
<div class="container">
    <div class="row">
        <?php foreach ($users as $user) { ?>
            <div class="col s6 md3">
                <div class="card z-deptph-0">
                    <div class="card-content center">
                        <h6><?php echo htmlspecialchars($user['title']); ?></h6>
                        <div><?php echo htmlspecialchars($user['content']); ?></div>
                    </div>
                    <div class="card-action right-align">
                        <a class="brand-text" href="#">more info</a>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</div>


<?php include('./templates/footer.php'); ?>

</body>

</html>