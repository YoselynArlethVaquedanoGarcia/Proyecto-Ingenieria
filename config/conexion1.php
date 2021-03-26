<?php

$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);



$id = rand();

    //  Recibir los datos y almacenarlos en variables
    $nombre= $_POST['nombreProd'];
    $precio = $_POST['Precio'];
    $descripcion = $_POST['descripcion'];
    $estado = $_POST['Estado_Prod'];
    $categoria=$_POST['categoria'];
    $departamento=$_POST['departamento'];
    $imagen= $_POST['imagen_Prod'];
       

        //Consulta para Insertar
        $sql = "INSERT INTO producto(idProducto, Nombre_Prod, Precio, Descripcion,imagen_Prod,Estado_idEstado,Categoria_idCategoria,Departamento_idDepartamento) VALUES ('$id', '$nombre', '$precio', '$descripcion','$imagen','$estado','$categoria','$departamento')";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);

    mysqli_close($conexion);

    header("Location: ../containers/registroProducto.php"); 
    
?>
