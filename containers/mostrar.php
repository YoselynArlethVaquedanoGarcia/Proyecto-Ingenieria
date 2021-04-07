<?php
$id= $_GET["id"];


$conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");

$consulta="SELECT Usuario_idUsuario FROM usuario_has_producto where Producto_idProducto='$id' ";
$resultado=mysqli_query($conexion,$consulta);

if(mysqli_num_rows($resultado)>0){

	$consultaMostrar="UPDATE usuario_has_producto SET Mostrar = '0' 
                            where usuario_has_producto.Producto_idProducto = '$id';";

    $resultado= mysqli_query($conexion,$consultaMostrar);

     header("location:mi_Productos.php"); 

}else{
   header("location:index.php");

}





mysqli_free_result($resultado);
mysqli_close($conexion);

            


?>