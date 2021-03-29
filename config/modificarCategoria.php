<?php
  
  
  $consulta=ConsultarCategoria($_GET['idCategoria']);

  function ConsultarCategoria($idCategoria)
  {
    $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
    $consultaCon="SELECT idCategoria,Tipocategoria FROM categoria where idCategoria=$idCategoria";
    $resultadoCon=mysqli_query($conexion,$consultaCon);
    $resultado=mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC) ;

    return [
      $resultado['idCategoria'],
      $resultado['Tipocategoria'],
    
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
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img-left d-none d-md-flex">
                 <!-- Background image for card set in CSS! -->
              </div>
              <div class="card-body">
                <h4 class="card-title text-center">Modificar Categorias</h4>
                <form action="../config/modificarCategoria1.php" method="POST">
                <input class="form-control" type="hidden" name="idCategoria" value="<?php echo $_GET['idCategoria']?> ">
                <label for="idCategoria">Id Categoria:</categoria><br>
                <div class="form-label-group">
                  <input class="form-control" type="text" id="idCategoria" name="idCategoria"; value="<?php echo $consulta[0] ?>" >
                  </div>
                  <br>
                  <label for="Tipocategoria">Categoria: </label>
                  <div class="form-label-group">
  		          <input  class="form-control" type="text" id="Tipocategoria" name="Tipocategoria" value="<?php echo $consulta[1] ?>">
            </div>
                 

                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit" >Guardar</button>
                  
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        <script src="../jquery/jquery-3.3.1.min.js"></script>	 	
        <script src="../popper/popper.min.js"></script>	 	 	
        <script src="../bootstrap4/js/bootstrap.min.js"></script>   	
      

</body>
  		
