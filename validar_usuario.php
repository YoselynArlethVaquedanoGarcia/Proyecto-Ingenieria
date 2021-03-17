<?php

$correo = $_POST['correo'];
$contraseña = $_POST['contraseña'];
//session_start();
//$_SESSION['usuario']=$usuario;


$conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");


$consulta="SELECT Correo,Contraseña FROM usuario where Correo='$correo' and Contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
  
    header("location:index.php");

}else{
    //header("location:login.php");
}
mysqli_free_result($resultado);
mysqli_close($conexion);
