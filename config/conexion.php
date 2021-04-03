<?php

$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);
$id = rand();

        $nombre=$_POST['nombre'];
        $telefono =$_POST['telefono'];
        $direccion =$_POST['direccion'];
        $genero =$_POST['genero'];
        $email =$_POST['email'];
        $contraseña=$_POST['password'];
        $imagen=$_POST['imagen'];

        //Consulta para Insertar
        $sql = "INSERT INTO usuario(idUsuario, Nombre, Correo, Telefono, Direccion, Genero,Contraseña,Imagen) VALUES ('$id', '$nombre', '$email', '$telefono','$direccion','$genero','$contraseña','$imagen')";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);

    mysqli_close($conexion);

    header("Location: ../containers/login.php"); 
?>
