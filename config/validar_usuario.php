<?php

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

$conexion=mysqli_connect("localhost","Chris","zxcv","proyecto");

$consulta="SELECT Correo,Contraseña,idUsuario FROM usuario where Correo='$correo' and Contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);
session_start();
    $_SESSION['correo']=$correo;
if($filas){
    header("location:../containers/index.php");
}else{
    header("location:../containers/login.php");
}
mysqli_free_result($resultado);
mysqli_close($conexion);
?>