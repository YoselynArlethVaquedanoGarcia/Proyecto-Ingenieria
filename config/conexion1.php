<?php

$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);

session_start();
if(!isset($_SESSION['correo'])){
  error_reporting(0);
}


  $corr=$_SESSION['correo'];
    if(!empty($corr)){
        //include 'validar_usuario.php';
       
        //$sql="SELECT Correo, Nombre, telefono,direccion,imagen FROM usuario where Correo='$corr'";
        $sql3="SELECT idUsuario, Correo,Nombre,Telefono,Direccion,Imagen FROM `usuario` WHERE Correo='$corr'";

        $response= mysqli_query($conexion,$sql3);
        while ($fila = mysqli_fetch_assoc($response)) {
           $id_se=$fila["idUsuario"];
           $email= $fila["Correo"];
           $nombre= $fila["Nombre"];
           $telefono= $fila["Telefono"];
           $direccion=$fila["Direccion"];
           $imagen=$fila["Imagen"];
         }

        }



$id_pro = rand();

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
    $fecha=date("Y")."-".date("m")."-".date("d");

        //Consulta para Insertar
        $sql = "INSERT INTO producto(idProducto, Nombre_Prod, Precio, Descripcion,imagen_Prod,Estado_idEstado,Categoria_idCategoria,Departamento_idDepartamento,imagen_Prod1,imagen_Prod2,imagen_Prod3,idUsuario,Fecha_Registro) 
            VALUES ('$id_pro', '$nombre', '$precio', '$descripcion','$imagen','$estado','$categoria','$departamento','$imagen1','$imagen2','$imagen3','$id_se','$fecha')";
          $sql2="INSERT INTO usuario_has_producto (Usuario_idUsuario, Producto_idProducto, Mostrar) 
                            VALUES ('$id_se', '$id_pro', 1);";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);
         $resultado2= mysqli_query($conexion,$sql2);

    mysqli_close($conexion);

    header("Location: ../containers/registroProducto.php"); 
?>
