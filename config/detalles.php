


<?php 
include('../layout/navbar.php')
?>
<?php

  $consulta=ConsultarDetalles($_GET['idProducto']);

  function ConsultarDetalles($idProducto)
  {
    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
    $consultaCon="SELECT producto.idProducto,producto.Nombre_Prod,producto.Precio,producto.Descripcion,producto.imagen_Prod,producto.Estado_idEstado,estado.Estado,producto.imagen_Prod1,usuario.Nombre,usuario.Correo,usuario.Telefono,producto.idUsuario,producto.imagen_Prod2,producto.imagen_Prod3,Moneda FROM producto 
    inner join estado on producto.Estado_idEstado=estado.idEstado  inner join usuario on producto.idUsuario=usuario.idUsuario inner join moneda where producto.idMoneda=moneda.idMoneda and idProducto=$idProducto";
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
      $resultado['idUsuario'],
      $resultado['imagen_Prod2'],
      $resultado['imagen_Prod3'],
      $resultado['Moneda']
    
    ];

  }


?>

<?php


  $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
  if(isset($_POST['rating']) and isset($_POST['comentario'])){
 $calificacion=$_POST['rating'];
 $id=$consulta[10];
 $idCalificacion= rand();
 $comentario=$_POST['comentario'];
 $query="INSERT INTO calificaciones(idCalificacion,Calificacion,Comentario,idUsuario) VALUES('$idCalificacion','$calificacion','$comentario','$id') ";
$resultadoCon2=mysqli_query($conexion,$query);
  }
 else{
   
 }
  




?>

<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Detalles</title>

<link rel="stylesheet" href="../css1/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="../css/estilo.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css">


</head>
<body >

<div class="container">

  <!-- Portfolio Item Heading -->
  <h1 class="my-4" id="Nombre_Prod" >
  <?php echo $consulta[1] ?>
  </h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-8">
   
    <img class="img-fluid" src="../imagenes/<?php echo $consulta[4]; ?>" alt="" width=650px >
    
    <hr class="mt-2 mb-5">

<div class="row text-center text-lg-left">
<h3>Vistas del Producto</h3>
  <div class="col-lg-5 col-md-4 col-6">
    <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../imagenes/<?php echo $consulta[4]; ?>" alt="" width=500px> 
        </a>
  </div>
  <div class="col-lg-5 col-md-4 col-6">
    <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../imagenes/<?php echo $consulta[6]; ?>" alt="" width=500px>
        </a>
  </div>
  <div class="col-lg-5 col-md-4 col-6">
    <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../imagenes/<?php echo $consulta[11]; ?>" alt="">
        </a>
  </div>
  <div class="col-lg-5 col-md-4 col-6">
    <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src="../imagenes/<?php echo $consulta[12]; ?>" alt="">
        </a>
  </div>
 
</div>

</div>



    <div class="col-md-4">
      <h3 class="my-3">Descripción</h3>
      <p><span></span> <?php echo $consulta[3] ?></p>
      <p>Precio:<?php echo $consulta[2] ?>&nbsp;<?php echo $consulta[13]; ?></p>
      <p>Estado del Producto: <?php echo $consulta[5] ?></p>
      <?php   if(isset($_SESSION['correo'])){ 
      echo '<div  class="card text-white bg-secondary mb-3" style="width: 25rem;">
      
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
      <button class="btn btn-info">Enviar</button>&nbsp;&nbsp; &nbsp; <a href="#" class="abrir"><button type="button" class="btn btn-danger " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >Denunciar</button></a>';
      }
      ?>
        </form>
        

 
      </p>
      
  </div>
</div>
   
    </div>
    
    
  </div>
        </div>
         
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Denuncia</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="../config/denuncia.php" method="POST">
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Denunciar a:</label>
            <p><?php echo $consulta[7]; ?></p>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Denuncia:</label>
            <textarea id="denuncia" name="denuncia"  class="form-control" id="message-text"></textarea>
          </div>
          <input id="idUsuario" name="idUsuario" type="hidden" value="<?php echo $consulta[10];?>">
          <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary">Enviar Denuncia</button>
      </div>
        </form>
      </div>
      
    </div>
  </div>
</div>

<script>$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
});</script>




    <script src="../jquery/jquery-3.3.1.min.js"></script>	 
    <script src="../bootstrap4/js/bootstrap.min.js"></script>   
    
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="../popper/popper.min.js"></script>	 	 	
    	
    <script src="../codigo.js"></script>
    <script src="../js/validar.js"></script> 
    <script src="../validar_usuario.php"></script>
    <scrip src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js"></script>
    
    <script src="../assets/libs/jquery/dist/jquery.min.js"></script>
    <script src="../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
    <script src="../assets/extra-libs/sparkline/sparkline.js"></script>
    <script src="../dist/js/waves.js"></script>
    <script src="../dist/js/sidebarmenu.js"></script>
    <script src="../dist/js/custom.min.js"></script>
    <script src="../assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
    <script src="../assets/libs/magnific-popup/meg.init.js"></script>
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
    <script>
    $('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
});
    </script>
</body>
  		