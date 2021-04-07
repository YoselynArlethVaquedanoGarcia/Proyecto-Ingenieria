
<?php 
include('../layout/navbar.php')

?>


<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modificar Categoria</title>
<link rel="stylesheet" href="../css1/bootstrap.min.css">
<link rel="stylesheet" href="../style.css">
<link rel="stylesheet" type="text/css" href="../css/estilo.css">
</head>
<body>
 <form method="post" action="mi_Productos.php"  novalidate>
<div class="container">
  <div class="row">
      <?php
      $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");

      //$sql_registro= mysqli_query($conexion, "SELECT COUNT(*) as cantidad FROM usuario_has_producto WHERE Usuario_idUsuario=1283205551;");

      //$resultado_regis = mysqli_fetch_array($sql_registro);

      //$total = $resultado_regis['cantidad'];

      $query = mysqli_query($conexion, "select producto.idProducto,
                                                producto.Nombre_Prod, 
                                                producto.Precio, 
                                                producto.Descripcion, 
                                                producto.imagen_Prod 
                                        from producto 
                                        INNER JOIN usuario_has_producto 
                                        on producto.idProducto = usuario_has_producto.Producto_idProducto 
                                        WHERE usuario_has_producto.Mostrar=1 and usuario_has_producto.Usuario_idUsuario=$id
                                        order by producto.idProducto;");

mysqli_close($conexion);


$result= mysqli_num_rows($query);
if($result > 0){
  while($data= mysqli_fetch_array($query)){
    $id_prod=$data['idProducto'];
   
      ?>
          
          <div class="row">
            <h1 class="my-4" id="Nombre_Prod" >
                <?php echo $data['Nombre_Prod'] ?>
            </h1>
            <!-- Portfolio Item Row -->
            <div class="row">

                <div class="col-md-3">
                  <img class="img-fluid" src="../imagenes/<?php echo $data['imagen_Prod'] ?>" alt="">
                  
                </div>

                <div class="col-md-6">
                  <h3 class="my-3">Descripción</h3>
                  <p> <?php echo $data['Descripcion'] ?></p>
                   <p>Precio: L. <?php echo $data['Precio'] ?>.00</p>
                   
                   <div>
                    <a href="mostrar.php?id=<?php echo $data['idProducto'] ; ?>"> Eliminar</a>
                   </div> 
               
                </div>
              </div>
          </div>
      </div> 
  <?php
   
           
            
}
}
  ?>
</div>
   </form>
<?php 
          
         
            
          ?>
    <script src="../jquery/jquery-3.3.1.min.js"></script>   
    <script src="../popper/popper.min.js"></script>     
    <script src="../bootstrap4/js/bootstrap.min.js"></script>     
    <script src="../codigo.js"></script>
    <script src="../js/validar.js"></script> 
    <script src="../validar_usuario.php"></script>
</body>
      