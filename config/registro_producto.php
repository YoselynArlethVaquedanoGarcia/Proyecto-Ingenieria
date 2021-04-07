
   <?php
     
//$id = rand();


        //  Recibir los datos y almacenarlos en variables
        $nombre_Prod = $_POST['nombreProd'];
        $precio = $_POST['Precio'];
        $descripcion = $_POST['descripcion'];
        $estado_Prod = $_POST['Estado_Prod'];
        $categoria=$_POST['categoria'];
        $departamento=$_POST['departamento'];
        $imagen_Prod= $_POST['imagen_Prod'];

    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
        //Consulta para Insertar
        $sql = "INSERT INTO producto ( Nombre_Prod, Costo, Descripcion, Estado_Producto, imagen_Prod, Categoria_idCategoria, Departamento_idDepartamento) 
                        VALUES ( ' $nombre_Prod', '$precio', '$descripcion', '$estado_Prod','$imagen_Prod','$departamento','$categoria')";
        

        //Ejecutar Consulta
                        
        $resultado= mysqli_query($conexion,$sql);

echo "<script>console.log('Insertar  departamento : " . $departamento . "' );</script>";
   mysqli_close($conexion);

    header("Location:../containers/registro_producto.php");  

       
    ?>


    