<?php
session_start();
session_destroy();

header("location: ../containers/login.php")
?>