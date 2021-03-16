<?php

include("conexion.php");
if((isset($_POST['nombre']) && !empty($_POST['name']))
&& (isset($_POST['telefono']) && !empty($_POST['telefono']))
&& (isset($_POST['direccion']) && !empty($_POST['direccion']))
&& (isset($_POST['genero']) && !empty($_POST['genero']))
&& (isset($_POST['email']) && !empty($_POST['email']))
&& (isset($_POST['password']) && !empty($_POST['password']))
&& (isset($_POST['conpass']) && !empty($_POST['conpass']))
){

	$nombre = $_POST['nombre'];
	$telefono = $_POST['telefono'];
	$direccion = $_POST['direccion'];
	$genero = $_POST['genero'];
    $email = $_POST['email'];
    $Contraseña= $_POST['password'];
    $confirmarContraseña = $_POST['conpass'];
}
?>

