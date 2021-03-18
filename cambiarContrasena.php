<?php

//validar el correo existe 
$correoCon = $_POST['CorreoContra'];
$contraNueva=$_POST['ContraNueva'];
$conf=$_POST['confirmar'];

$conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");

$consultaCon="SELECT Correo FROM usuario where Correo='$correoCon' ";
$resultadoCon=mysqli_query($conexion,$consultaCon);


if(mysqli_num_rows($resultadoCon)>0){
    $Cambio= "UPDATE usuario SET Contraseña = '$contraNueva' WHERE Correo='$correoCon' ";

    $resultado= mysqli_query($conexion,$Cambio);

     header("location:login.php"); 

}else{
    header("location:contrasena.php");

}





mysqli_free_result($resultadoCon);
mysqli_close($conexion);

?>


