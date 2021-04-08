
<?php 
include('../layout/navbar.php')
?>
<?php
  
  
  $consulta=ConsultarDetalles($_GET['idProducto']);

  function ConsultarDetalles($idProducto)
  {
    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
    $consultaCon="SELECT producto.idProducto,producto.Nombre_Prod,producto.Precio,producto.Descripcion,producto.imagen_Prod,producto.Estado_idEstado,estado.Estado,producto.imagen_Prod1,usuario.Nombre,usuario.Correo,usuario.Telefono,producto.idUsuario FROM producto 
    inner join estado on producto.Estado_idEstado=estado.idEstado  inner join usuario on producto.idUsuario=usuario.idUsuario where idProducto=$idProducto";
    $resultadoCon=mysqli_query($conexion,$consultaCon);
    $resultado=mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC) ;

    return [
      $resultado['idProducto'],
      $resultado['Nombre_Prod'],
      $resultado['Precio'],
      $resultado['Descripcion'],
      $resultado['imagen_Prod'],
      $resultado['Estado'],
      $resultado['imagen_Prod1'],
      $resultado['Nombre'],
      $resultado['Correo'],
      $resultado['Telefono'],
      $resultado['idUsuario']
    ];

  }


?>

<?php

  $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
 $calificacion=$_POST['rating'];
  $id=$consulta[10];
  $comentario=$_POST['comentario'];
  $idCalificacion= rand();

$query="INSERT INTO calificaciones(idCalificacion,Calificacion,Comentario,idUsuario) VALUES('$idCalificacion','$calificacion','$comentario','$id') ";
$resultadoCon2=mysqli_query($conexion,$query);


?>










<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modificar Categoria</title>
<link rel="stylesheet" href="../css1/bootstrap.min.css">
<link rel="stylesheet" href="../style.css">
<link rel="stylesheet" type="text/css" href="../css/estilo.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css">
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
    
      <img class="img-fluid" src="../imagenes/<?php echo $consulta[4]; ?>" alt="" >
      
      
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Descripción</h3>
      <p><span></span> <?php echo $consulta[3] ?></p>
      <p>Precio: L. <?php echo $consulta[2] ?>.00</p>
      <p>Estado del Producto: <?php echo $consulta[5] ?></p>
      <div  class="card text-white bg-secondary mb-3" style="width: 25rem;">
      <div class="card-body">
      <div class="card-header">Vendedor</div>
    <h5 class="card-title">Datos Personales:</h5>
    <p class="card-text"> 
      <ul>
      <li>Nombre:<?php echo $consulta[7]; ?>  </li>
        <li> Correo electronico:<?php echo $consulta[8];?></li>
        <li>Telefono:<?php echo $consulta[9]; ?></li>
        <form action="" method="post">
        <li>Calificación:<div id="rateYo"></div></li>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Comentario:</label>
        <textarea class="form-control" id="comentario" name="comentario" rows="3"></textarea>
      </div><br>
      <input type="hidden" name="rating" id="rating">
      <button class="btn btn-info">Enviar</button>
     
        </form>
        
       
      </p>
      
  </div>
</div>
   
    </div>
    
    
  </div>
        </div>
      	
      
    <script src="../jquery/jquery-3.3.1.min.js"></script>	 	
    <script src="../popper/popper.min.js"></script>	 	 	
    <script src="../bootstrap4/js/bootstrap.min.js"></script>   	
    <script src="../codigo.js"></script>
    <script src="../js/validar.js"></script> 
    <script src="../validar_usuario.php"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js"></script>
    <script>
      $(function () {
      
      $("#rateYo").rateYo({
        fullStar: true,
        onSet: function (rating, rateYoInstance) {
        $('#rating').val(rating)
      }
      });

      });
    </script>
</body>
  		