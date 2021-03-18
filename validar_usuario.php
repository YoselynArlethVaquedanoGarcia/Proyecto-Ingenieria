<?php

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];

$conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");

$consulta="SELECT Correo,Contraseña,Nombre FROM usuario where Correo='$correo' and Contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);
session_start();
    $_SESSION['correo']=$correo;
if($filas){
    header("location:index.php");
}else{
    header("location:login.php");
}
mysqli_free_result($resultado);
mysqli_close($conexion);
?>