<?php

$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);
$id = rand();

        $descripcion=$_POST['denuncia'];
        $idUsuario =$_POST['idUsuario'];
      

        //Consulta para Insertar
        $sql = "INSERT INTO denuncias(idDenuncia,descripcion,idUsuario) VALUES ('$id', '$descripcion', '$idUsuario')";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);

    mysqli_close($conexion);
if(!$resultado==null){
    header("Location: ../containers/categorias.php"); 
}else{
    echo 'ERROR';
}
   
   
?>