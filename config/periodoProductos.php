
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tienda</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta:300,400,700"> 
    <link rel="stylesheet" href="../fonts/icomoon/style.css">

    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/magnific-popup.css">
    <link rel="stylesheet" href="../css/jquery-ui.css">
    <link rel="stylesheet" href="../css/owl.carousel.min.css">
    <link rel="stylesheet" href="../css/owl.theme.default.min.css">


    <link rel="stylesheet" href="../css/aos.css">

    <link rel="stylesheet" href="../css/style3.css">
    
   <style>
     .h1{
       color:black;
     }
   </style>
  </head>
  <body style="Background-color:  mediumturquoise">
  
  <div class="site-wrap">
  

    <div class="site-section">
      <div style="text-align:center" class="container">

       
          <div class="col-md-9 order-2">

            <div class="row">
              <div class="col-md-12 mb-5">
              <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="color:black">Control de Productos</h1>
              <hr class="mt-2 mb-5">
              <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" >
              <label style="color:black" for="">Seleccione el periodo disponible de las publicaciones: </label>
              <select name="texto">
                <option value="" selected >Seleccione Periodo</option>
                <option value=3 >90 Días</option>
                <option value=4>120 Días</option>
                </select>
                <button class='btn btn-success' type="submit" name="submit">Establecer Periodo</button>
                </form>
              </div>
            </div>
            <h4></h4>
         <?php  if (isset($_POST['submit'])){
                $dato =$_POST['texto'];
                echo  "<h4> El perido de disponibilidad se ha definido en ".$dato." Meses </h4>";
                }?>

        <hr class="mt-2 mb-5">
        <div class="row text-center text-lg-left">
    <?php
    
                    $host="localhost"; $usuario="Yoselyn"; $contraseña="Yoselyn123"; $base="proyecto";
                    try{
                      $conexion = new PDO ('mysql:host='.$host.';dbname='.$base, $usuario, $contraseña);
                    }
                    catch (PDOException $e){
                      print "error". $e->getMessage();
                      die();
                    }
                     $sql="SELECT p.imagen_Prod,p.idProducto,p.Nombre_Prod,p.Precio, p.Fecha_Registro FROM producto p
                             where
                             p.Categoria_idCategoria!='6'  
                             order by p.Fecha_Registro ASC";
                     $consulta=$conexion->query($sql);             

                    $fecha_actual = new DateTime();

                    
                      while ($resultado=$consulta->fetch(PDO::FETCH_ASSOC)){
                      ?>
                    
                      <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                      <div class="block-4 text-center border">
                      
                      <a href="#" class="d-block mb-4 h-100">
                      <img class="img-fluid img-thumbnail" src="../imagenes/<?php echo $resultado["imagen_Prod"]; ?>" alt="" style="width:300px;height:250px;">
                      </a>
                      <div class="card-body" style="height:120px"; >
                      <h4  class="card-text" ><?php echo $resultado["Nombre_Prod"]; ?></h4>
                      <h5  class="card-text">
                   <!--   <p class="text-primary font-weight-bold">L.00</p>-->
                   <p class="text-primary font-weight-bold">Fecha de Publicación <?php echo $resultado["Fecha_Registro"]; ?></p>
                      <?php $fecha_publicacion = new DateTime($resultado["Fecha_Registro"]);
                            //$dato=3;
                            $diferencia = $fecha_publicacion ->diff($fecha_actual);
                            $mes = $diferencia -> m;
                            //var_dump($mes);
                            error_reporting(0);
                            if ( $mes>=$dato){
                                echo "<h4 style='background-color:red; color:white'>Publicación Caduco</h4>
                                    <a href='../config/eliminarProductos.php?idProducto=".$resultado['idProducto']."''>
                                    <button type='button' class='btn btn-danger'>Eliminar</button></a>";
                            }
                            else{
                                echo "<h4 style='background-color:green; color:white'>Publicación Vigente</h4>";
                            }
                      ?>
                    
                      </h5>
                   <!---   <a href="../config/detalles.php?idProducto=" >Mas detalles</a> -->
                       </div>
                      </div>
                      <br>
                      </div> 
                     
                    <?php   } ?>
                    
           
                   
                   
                 
                        
                        </div>
                    



        
      
    </div>
  

    
  </div>
  </div>

  <script src="../js/jquery-3.3.1.min.js"></script>
  <script src="../js/jquery-ui.js"></script>
  <script src="../js/popper.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/owl.carousel.min.js"></script>
  <script src="../js/jquery.magnific-popup.min.js"></script>
  <script src="../js/aos.js"></script>

  <script src="../js/main1.js"></script>
    
  </body>
</html>