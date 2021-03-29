<?php 
include('../layout/navbar.php')
?>
<head>
                     
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>BestWay</title>
    <link rel="stylesheet" href="../css1/bootstrap.min.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" type="text/css" href="../css/estilo.css">
    
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>

<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="../js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
    
  </head>
<header>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<div class="carousel-inner" role="listbox">
        <div class="carousel-item active" style="background-image: url('../imagenes/ropa.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Moda</h3>
          <p class="lead">"La moda termina rápido. El estilo es para siempre." Ralph Lauren</p>
        </div>
        </div>
          
      <div class="carousel-item" style="background-image: url('../imagenes/carro.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Vehículos</h3>
          <p class="lead">Encuentra vehículos nuevos, seminuevos ​​y usados.</p>
        </div>
      </div>
      
      <div class="carousel-item" style="background-image: url('../imagenes/casa.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Inmuebles</h3>
          <p class="lead">Renta, compra y venta de inmuebles en BestWay.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('../imagenes/mascotas.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Mascotas</h3>
          <p class="lead">"Hasta que uno no ha amado un animal, una parte del alma sigue sin despertar." Anatole France</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('../imagenes/electronica.png')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Electrónica</h3>
          <p class="lead" >Eres un amante de la tecnología? Encuentra aquí los mejores artículos de electrónica.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('../imagenes/servicios.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Servicios</h3>
          <p class="lead">Descubre la variedad de servicios que ofrecemos.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('../imagenes/negocios.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Negocios</h3>
          <p class="lead">"Para tener éxito, tienes que tener tu corazón en tu negocio, y tu negocio en tu corazón."Thomas Watson</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('../imagenes/empleo.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3 class="display-4">Empleo</h3>
          <p class="lead">Buscas trabajo? Consulta las mejores ofertas de empleo en BestWay</p>
        </div>
      </div>
  </div>
            
            <!--Controles NEXT y PREV-->
            <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <!--Controles de indicadores-->
            <ol class="carousel-indicators">
                <li data-target="#carousel1" data-slide-to="0" class="active"></li>
                <li data-target="#carousel1" data-slide-to="1"></li>
                <li data-target="#carousel1" data-slide-to="2"></li>
                <li data-target="#carousel1" data-slide-to="3"></li>
                <li data-target="#carousel1" data-slide-to="4"></li>
                <li data-target="#carousel1" data-slide-to="5"></li>
                <li data-target="#carousel1" data-slide-to="6"></li>
                <li data-target="#carousel1" data-slide-to="7"></li>
            </ol>
            
        </div>
        </div >
        </header>
        
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"><script/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

 
<?php if (isset($_SESSION['correo'])):?> 
 <div class="container">
    <div class="row">
      <div class="col-lg-6"><br>
      <h4 style="border-bottom: solid 2px gray;"><?php echo $nombre ?></h4><br>
      <h6 style="border-bottom: solid 2px gray; margin-left: 20px;">Información de Contacto</h6>
      <div>
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Correo electronico: <?php echo $email ?> </p> 
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Telefono: <?php echo $telefono ?> </p> 
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Dirección: <?php echo $direccion ?> </p> 
      </div>
</div> 
<script>
      $('.carousel').carousel();
    </script>  
<?php endif;?>
<?php if (!isset($_SESSION['correo'])):?> 
<h6 style="border-bottom: solid 2px gray; margin-left: 20px;">Información de Contacto</h6>
<?php endif;?>

<section class="customer-logos slider">
<div class="container">
    <div class="row">
        <div class="row">
            <div class="col-md-9">
                <h3>
                   Electrónica</h3>
            </div>
            <div class="col-md-3">
                <!-- Controls -->
                <div class="controls pull-right hidden-xs">
                    <a class="left fa fa-chevron-left btn btn-success" href="#carousel-example"
                        data-slide="prev"></a><a class="right fa fa-chevron-right btn btn-success" href="#carousel-example"
                            data-slide="next"></a>
                </div>
            </div>
        </div>
        <div id="carousel-example" class="carousel slide hidden-xs" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=877553375";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);

                                
                                echo ' <img src="../imagenes/tv.jpg" class="img-responsive" alt="a" />';
                                
                    ?>
                                   
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=877553375";
                        $resultadoCon=mysqli_query($conexion,$consultaCon);

                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                        }
                       
                    ?>
                               
                     </div> 
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=608629547";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);

                                
                                echo ' <img src="../imagenes/samsungA31.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                    
                                        <?php
                                    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                    $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=608629547";
                                    $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                    while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                        echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                        echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';}
                                        ?>
                                        </div>
                                        </div>
                                        <br>
                                        <br>
                                        <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=877553375";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);

                                echo ' <img src="../imagenes/LaptopDell.jpg" class="img-responsive" alt="a" />';
                                
                    ?>
                          
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                    $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=1531951138";
                                    $resultadoCon=mysqli_query($conexion,$consultaCon);

                                    while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                        echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                        echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                        }
                        ?>
                                        </div>
                                       
                                    </div>
                                    <div class="separator clear-left">
                                        
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=1842202489";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/impresoraHP.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=1842202489";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=1209257036";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/audifonos.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=1209257036";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>

                                    </div>
                                    <div class="separator clear-left">
                                        
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=2092270687";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/Tablet.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=2092270687";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                        <div class="rating hidden-sm col-md-6">
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=1028673900";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/smartwatch.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=1028673900";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                        <div class="rating hidden-sm col-md-6">
                                            <i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star">
                                            </i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star">
                                            </i><i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=1745896938";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);

                                echo ' <img src="../imagenes/parlante.jpg" class="img-responsive" alt="a" />';
                                
                    ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=1745896938";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="row">
            <div class="col-md-9">
                <h3>
                    Vehículos</h3>
            </div>
            <div class="col-md-3">
                <!-- Controls -->
                <div class="controls pull-right hidden-xs">
                    <a class="left fa fa-chevron-left btn btn-primary" href="#carousel-example-generic"
                        data-slide="prev"></a><a class="right fa fa-chevron-right btn btn-primary" href="#carousel-example-generic"
                            data-slide="next"></a>
                </div>
            </div>
        </div>
        <div id="carousel-example-generic" class="carousel slide hidden-xs" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=917699416";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/audiA4.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <br>
                                <br>
                                <br>
                                <br>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=917699416";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=2059976625";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/hondaCity.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=2059976625";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                        <div class="rating hidden-sm col-md-6">
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                      
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=399774425";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/suzukiCiaz.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <br>
                                <br>
                                <br>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=399774425";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                      
                                    </div>
                                    <div class="separator clear-left">
                                      
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="http://www.jquery2dotnet.com" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=2084625924";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/T-Cross.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <br>
                                <br>
                            
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=2084625924";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                      
                                    </div>
                                    <div class="separator clear-left">
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="http://www.jquery2dotnet.com" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=542183993";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/glc.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <br>
                                <br>
                                <br>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=542183993";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                        <div class="rating hidden-sm col-md-6">
                                        </div>
                                    </div>
                                    <div class="separator clear-left">
                                       
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="col-item">
                                <div class="photo">
                                <?php
                                $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                $consultaCon="SELECT idProducto,imagen_Producto FROM producto where idProducto=1127614873";
                                $resultadoCon=mysqli_query($conexion,$consultaCon);
                                echo ' <img src="../imagenes/edge.jpg" class="img-responsive" alt="a" />';
                                ?>
                                </div>
                                <div class="info">
                                    <div class="row">
                                        <div class="price col-md-6">
                                        <?php
                                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                                        $consultaCon="SELECT Nombre_Prod,Precio  FROM producto where IdProducto=1127614873";
                                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                                   
                                        while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                                            echo '<h5>'.$valores["Nombre_Prod"].'</h5>';
                                            echo '<h5 class="price-text-color" style="text-decoration:none ; color:SteelBlue">L'.$valores["Precio"].'.00</h5>';
                                        }
                                            ?>
                                        </div>
                                     
                                    </div>
                                    <div class="separator clear-left">
                                    
                                        <p class="btn-details">
                                            <i class="fa fa-list"></i><a href="#" class="hidden-sm">Mas detalles</a></p>
                                    </div>
                                    <div class="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
