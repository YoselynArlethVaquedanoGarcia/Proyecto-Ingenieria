<?php 
include('../layout/navbar.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="../css1/bootstrap.min.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" type="text/css" href="../css/estilo.css">
   
</head>
<body>


  <form method="post" action="../config/conexion2.php"  id=" formulario" class="needs-validation "  novalidate> 
    <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img-left d-none d-md-flex">
                 <!-- Background image for card set in CSS! -->
              </div>
              <div class="card-body" >
              <h1 class="card-title text-center"> !Suscribete! </h1>
                <form  method="post" action="../config/conexion.php" class="needs-validation" novalidate>
                <h5>Seleccione la Categoria a la que desea Suscribirse</h5>
                  
            <div class="form-group">

            <select class="form-select" aria-label="Default select example" name="categoria" id="categoria"required>
            <option value="0">Categoria</option>

      <?php
            $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
            $consultaCon="SELECT idCategoria,Tipocategoria FROM categoria";
            $resultadoCon=mysqli_query($conexion,$consultaCon);

              while ($valores = mysqli_fetch_array($resultadoCon)) {
                echo '<option value="'.$valores[idCategoria].'">'.$valores[Tipocategoria].'</option>';
          }
?>
  </select>
                
                  
                
                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit" name="submit" onclick="iniciarSeccion()">Suscribirse</button>
                             
          </form>
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
  
</body>
</html>