
<?php 
include('../layout/navbar.php')
?>
<?php
  
  
  $consulta=ConsultarDetalles($_GET['idProducto']);

  function ConsultarDetalles($idProducto)
  {
    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
    $consultaCon="SELECT producto.idProducto,producto.Nombre_Prod,producto.Precio,producto.Descripcion,producto.imagen_Prod,producto.Estado_idEstado,estado.Estado  FROM producto 
    inner join estado on producto.Estado_idEstado=estado.idEstado where idProducto=$idProducto";
    $resultadoCon=mysqli_query($conexion,$consultaCon);
    $resultado=mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC) ;

    return [
      $resultado['idProducto'],
      $resultado['Nombre_Prod'],
      $resultado['Precio'],
      $resultado['Descripcion'],
      $resultado['imagen_Prod'],
      $resultado['Estado']
    ];

  }


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
<div class="container">

  <!-- Portfolio Item Heading -->
  <h1 class="my-4" id="Nombre_Prod" >
  <?php echo $consulta[1] ?>
  </h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src="../imagenes/<?php echo $consulta[4] ?>" alt="">
      
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Descripción</h3>
      <p> <?php echo $consulta[3] ?></p>
      <p>Precio: L. <?php echo $consulta[2] ?>.00</p>
      <p>Estado del Producto: <?php echo $consulta[5] ?></p>
<?php if (isset($_SESSION['correo'])):?> 
    <h3 class="my-3">Información del Vendedor</h3>
    <ul>
        <li> Correo electronico: <?php echo $email ?></li>
        <li>Telefono: <?php echo $telefono ?></li>
        <li>Dirección: <?php echo $direccion ?> </li>
      </ul>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">Comentario:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

  </div>
<?php endif;?>
<?php if (!isset($_SESSION['correo'])):?> 
<h6 style="border-bottom: solid 2px gray; margin-left: 20px;">Información de Contacto</h6>
<?php endif;?>
    </div>
    
    
  </div>
        </div>
      	
      
    <script src="../jquery/jquery-3.3.1.min.js"></script>	 	
    <script src="../popper/popper.min.js"></script>	 	 	
    <script src="../bootstrap4/js/bootstrap.min.js"></script>   	
    <script src="../codigo.js"></script>
    <script src="../js/validar.js"></script> 
    <script src="../validar_usuario.php"></script>
</body>
  		