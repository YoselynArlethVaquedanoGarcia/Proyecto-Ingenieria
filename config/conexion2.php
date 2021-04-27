<?php
$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);


$id= rand();

$categoria=$_POST['categoria'];
$email='correopruebasoporte46@gmail.com';
        //Consulta para Insertar
        $sql = "INSERT INTO suscripcion(idSuscripcion, Categoria, Correo) VALUES ('$id', '$categoria', '$email')";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);

    mysqli_close($conexion);

   
?>