<?php   
    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
    if(!isset($_GET['texto'])){
        header("Location: ../containers/categorias.php"); 
    }
 ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Tienda</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta:300,400,700"> 
    <link rel="stylesheet" href="../fonts/icomoon/style.css">

    <link rel="stylesheet" href="../css/bootstrap1.min.css">
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
    <?php include("../layout/header.php"); ?> 

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-2">

          <div class="row">
              <div class="col-md-12 mb-5">
                <div class="float-md-left mb-4"><h2 class="text-black h5">Shop All</h2></div>
                <div class="d-flex">
                  <div class="dropdown mr-1 ml-md-auto">
                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Mas Recientes
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <a class="dropdown-item" href="#">Inmuebles</a>
                      <a class="dropdown-item" href="#">Hogar</a>
                      <a class="dropdown-item" href="#">Electr??nica</a>
                    </div>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Filtrar</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                      <a class="dropdown-item" href="../containers/filtros.php?texto=pasc">Precio ascendente</a>
                      <a class="dropdown-item" href="../containers/filtros.php?texto=pdesc">Precio descendente</a>
                     
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="../containers/filtros.php?texto=nasc">Nombre, A-Z</a>
                      <a class="dropdown-item" href="../containers/filtros.php?texto=ndesc">Nombre, Z-A</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="color:black">Productos</h1>

        <hr class="mt-2 mb-5">
        <div class="row text-center text-lg-left">
    <?php
                     $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                     $consultaCon="SELECT imagen_Prod,idProducto,Nombre_Prod,Precio,Descripcion FROM producto where Nombre_Prod like '%".$_GET['texto']."%' or  Descripcion like '%".$_GET['texto']."%' order by idProducto DESC ";
                     $resultadoCon=mysqli_query($conexion,$consultaCon);

                     if(mysqli_num_rows($resultadoCon)>0){

                   
                    while ($resultado=mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)){
                    ?>
                     <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div class="block-4 text-center border">
                    
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="../imagenes/<?php echo $resultado["imagen_Prod"]; ?>" alt="" style="width:300px;height:250px;">
                    </a>
                    <div class="card-body" style="height:200px"; >
                    <h4  class="card-text" ><?php echo $resultado["Nombre_Prod"]; ?></h4>
                    <h5  class="card-text">
                    <p class="text-primary font-weight-bold">L<?php echo $resultado["Precio"]; ?>.00</p>
                    </h5>
                    <a href="../config/detalles.php?idProducto=<?php echo $resultado["idProducto"]; ?>" class='hidden-sm'>Mas detalles</a>
                     </div>
                    </div>
                    </div> 
                   
                  <?php   }   }else{
                      echo '<h2>Sin resultados</h2>';
                  }?>
                    
           
                   
                   
                 
                        
                        </div>
                    
            <div class="row" data-aos="fade-up">
              <div class="col-md-12 text-center">
                <div class="site-block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 order-1 mb-5 mb-md-0">
            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block"><span>Categorias</span> </h3>
              <ul class="list-unstyled mb-0">
              <?php
                        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                        $consultaCon="SELECT idCategoria,Tipocategoria FROM categoria";
                        
                        $resultadoCon=mysqli_query($conexion,$consultaCon);
                          while ($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC)) {
                            ?>
                            <li class="mb-1"><a href="../containers/filtroCategoria.php?texto=<?php echo $valores['Tipocategoria']?>" class="d-flex"><span><?php echo $valores['Tipocategoria'];?></span> <span class="text-black ml-auto">
                            <?php 
                             $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                             $consultaCon1="SELECT count(Categoria_idCategoria) FROM producto where Categoria_idCategoria=".$valores['idCategoria'];
                             $resultadoCon1=mysqli_query($conexion,$consultaCon1);
                             $resultados= mysqli_fetch_row($resultadoCon1);
                              echo $resultados[0];
                            
                      }
                      echo  '</a>';
                    ?>
               </li>
              </ul>
               
            </select>
            </div>

            <div class="border p-4 rounded mb-4">
              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Filtrar por Precio</h3>
                <div id="slider-range" class="border-primary"></div>
                <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
              </div>
              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Filtrar por Fecha</h3>
                <label for="s_sm" class="d-flex">
                <form action="../containers/filtroFecha.php" method="post">
                  <input type="date" id="date" name="date" class="mr-2 mt-1"> 
                </label>
                <button>Buscar</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="site-section site-blocks-2">
                <div class="row justify-content-center text-center mb-5">
                  <div class="col-md-7 site-section-heading pt-4">
                    <h2>Categorias</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
                    <a class="block-2-item" href="#">
                      <figure class="image">
                        <img src="images/women.jpg" alt="" class="img-fluid">
                      </figure>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Women</h3>
                      </div>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                    <a class="block-2-item" href="#">
                      <figure class="image">
                        <img src="images/children.jpg" alt="" class="img-fluid">
                      </figure>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Children</h3>
                      </div>
                    </a>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                    <a class="block-2-item" href="#">
                      <figure class="image">
                        <img src="images/men.jpg" alt="" class="img-fluid">
                      </figure>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Men</h3>
                      </div>
                    </a>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  

    
  </div>
  </div>

  <script src="../js/jquery-3.3.1.min.js"></script>
  <script src="../js/jquery-ui.js"></script>
  <script src="../js/popper.min.js"></script>
  <script src="../js/bootstrap1.min.js"></script>
  <script src="../js/owl.carousel.min.js"></script>
  <script src="../js/jquery.magnific-popup.min.js"></script>
  <script src="../js/aos.js"></script>

  <script src="../js/main1.js"></script>
    
  </body>
</html>