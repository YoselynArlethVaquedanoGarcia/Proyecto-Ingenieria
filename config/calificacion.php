<?php   
    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
    if(!isset($_GET['texto'])){
        header("Location: ../containers/categorias.php"); 
    }
    if(isset($_GET['categoria'])){
      $categoria= $_GET['categoria'];
  }
    
 ?>
 <!DOCTYPE html>
<html lang="en">
  <head>
    <title>BestWay</title>
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
                   Calificacion del Vendedor
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <a class="dropdown-item" href="../config/calificacion.php?categoria=<?php echo $categoria ?>&texto=asc">Orden Ascendente</a>
                      <a class="dropdown-item" href="../config/calificacion.php?categoria=<?php echo $categoria ?>&texto=desc">Orden Descendente</a>
                    </div>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Filtrar</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                      <a class="dropdown-item" href="../containers/?categoria=<?php echo $categoria ?>&filtros.php?texto=pasc">Precio ascendente</a>
                      <a class="dropdown-item" href="../containers/filtros.php?categoria=<?php echo $categoria ?>&texto=pdesc">Precio descendente</a>
                     
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="../containers/filtros.php?categoria=<?php echo $categoria ?>&texto=nasc">Nombre, A-Z</a>
                      <a class="dropdown-item" href="../containers/filtros.php?categoria=<?php echo $categoria ?>&texto=ndesc">Nombre, Z-A</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="color:black">Productos</h1>

<hr class="mt-2 mb-5">

<div class="row mb-5">


  <?php
                     
                    
                     $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
                     if(isset($_GET['categoria'])){
                   
                    $limite=6;//productos por pagina
                    $totalQuery=$conexion->query("SELECT count(*) FROM producto inner join categoria on  producto.Categoria_idCategoria= categoria.idCategoria where categoria.Tipocategoria='$categoria' ");
                     }else{
                       $limite=6;//productos por pagina
                       $totalQuery=$conexion->query("SELECT count(*) FROM producto inner join categoria on  producto.Categoria_idCategoria= categoria.idCategoria  ");
                     }
                     $productosCategoria=mysqli_fetch_row($totalQuery);
                     $totalBotones=round($productosCategoria[0]/$limite);
                     if(isset($_GET['limite'])){
                      if($_GET['categoria']){
                     switch ($_GET['texto']) {
                        case "asc":
                            $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                            producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                            producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion)
                            FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario  inner join categoria on producto.Categoria_idCategoria=categoria.idCategoria where categoria.TipoCategoria='$categoria'
                            GROUP BY idUsuario
                            HAVING  avg(Calificacion)> 0
                            ORDER BY avg(Calificacion) ASC limit ".$_GET['limite'].",".$limite; 
                            break;
                        case "desc":
                            $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                            producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                            producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion) 
                            FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario inner join categoria on producto.Categoria_idCategoria=categoria.idCategoria where categoria.TipoCategoria='$categoria'
                            GROUP BY idUsuario
                            HAVING  avg(Calificacion)> 0
                            ORDER BY avg(Calificacion) DESC limit ".$_GET['limite'].",".$limite; 
                           
                           break;
                    }
                  }
                else {
                  switch ($_GET['texto']) {
                    case "asc":
                        $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                        producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                        producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion)
                        FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario
                        GROUP BY idUsuario
                        HAVING  avg(Calificacion)> 0
                        ORDER BY avg(Calificacion) ASC limit ".$limite;
                        break;
                    case "desc":
                        $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                        producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                        producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion)
                        FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario
                        GROUP BY idUsuario
                        HAVING  avg(Calificacion)> 0
                        ORDER BY avg(Calificacion) DESC limit ".$limite;
                       
                       break;
                }
              }
              }else{
                if(isset($_GET['categoria'])){
                  switch ($_GET['texto']) {
                     case "asc":
                         $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                         producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                         producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion)
                         FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario  inner join categoria on producto.Categoria_idCategoria=categoria.idCategoria where categoria.TipoCategoria='$categoria'
                         GROUP BY idUsuario
                         HAVING  avg(Calificacion)> 0
                         ORDER BY avg(Calificacion) ASC limit ".$limite; 
                         break;
                     case "desc":
                         $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                         producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                         producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion) 
                         FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario inner join categoria on producto.Categoria_idCategoria=categoria.idCategoria where categoria.TipoCategoria='$categoria'
                         GROUP BY idUsuario
                         HAVING  avg(Calificacion)> 0
                         ORDER BY avg(Calificacion) DESC limit ".$limite; 
                        
                        break;
                 }
               
             }else {
               switch ($_GET['texto']) {
                 case "asc":
                     $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                     producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                     producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion)
                     FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario
                     GROUP BY idUsuario
                     HAVING  avg(Calificacion)> 0
                     ORDER BY avg(Calificacion) ASC limit ".$limite;
                     break;
                 case "desc":
                     $consultaCon="SELECT avg(Calificacion), calificaciones.idUsuario,
                     producto.imagen_Prod,producto.idProducto,producto.Nombre_Prod,
                     producto.Precio,producto.Descripcion,calificaciones.idUsuario,avg(Calificacion)
                     FROM calificaciones inner join producto on calificaciones.idUsuario = producto.idUsuario
                     GROUP BY idUsuario
                     HAVING  avg(Calificacion)> 0
                     ORDER BY avg(Calificacion) DESC limit ".$limite;
                    
                    break;
             }
           }
          }   
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
                    <p class="text-primary font-weight-bold">Calificacion:<?php echo round($resultado["avg(Calificacion)"],2); ?>%</p>
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
                            <li class="mb-1"><a href="../containers/filtroFecha.php?texto=<?php echo $valores['Tipocategoria']?>" class="d-flex" style="color:white"><span><?php echo $valores['Tipocategoria'];?></span> <span class="text-black ml-auto">
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
                <form action="../containers/filtroPrecio.php" method="POST">
                <input type="text"  class="form-control" placeholder="L. M??n" style="height: 30px; width:79px" name="minimo"  id="minimo">
                <span class="input-group-text" style="height: 25px; padding: 3px;width:15px">-</span>
                <input type="text" class="form-control" placeholder="L. M??x" style="height: 30px;width:79px" name="maximo" id="maximo"><br>
                <button class="btn btn-info">Filtrar</button>
                </form>
              </div>

              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Filtrar por Fecha</h3>
                <label for="s_sm" class="d-flex">
                <form action="../containers/filtroFecha.php" method="post">
                  <input type="date" id="date" name="date" class="mr-2 mt-1"> <br>
                </label>
                <button class="btn btn-info">Filtrar</button>
                </form>
                
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