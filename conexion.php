<?php

$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);

if (!$conexion) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

//echo "Éxito: Se realizó una conexión apropiada a MySQL! La base de datos proyecto es genial." . PHP_EOL;
//echo "Información del host: " . mysqli_get_host_info($conexion) . PHP_EOL;

$id = rand();


        //  Recibir los datos y almacenarlos en variables
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $direccion = $_POST['direccion'];
        $genero = $_POST['genero'];
        $email = $_POST['email'];
        $contraseña= $_POST['password'];
        $imagen= $_POST['imagen'];

        //Consulta para Insertar
        $sql = "INSERT INTO usuario(idUsuario, Nombre, Correo, Telefono, Direccion, Genero,Contraseña,Imagen) VALUES ('$id', '$nombre', '$email', '$telefono','$direccion','$genero','$contraseña','$imagen')";

        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);
        

    mysqli_close($conexion);

    header("Location: login.php"); 
?>
