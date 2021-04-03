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
    $imagen1= $_POST['imagen_Prod1'];
    $imagen2= $_POST['imagen_Prod2'];
    $imagen3= $_POST['imagen_Prod3'];
    $id= $_POST['idUsuario'];

        //Consulta para Insertar
        $sql = "INSERT INTO producto(idProducto, Nombre_Prod, Precio, Descripcion,imagen_Prod,Estado_idEstado,Categoria_idCategoria,Departamento_idDepartamento,imagen_Prod1,imagen_Prod2,imagen_Prod3,idUsuario) VALUES ('$id', '$nombre', '$precio', '$descripcion','$imagen','$estado','$categoria','$departamento','$imagen1','$imagen2','$imagen3','$id')";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);

    mysqli_close($conexion);

    header("Location: ../containers/registroProducto.php"); 
    
?>
