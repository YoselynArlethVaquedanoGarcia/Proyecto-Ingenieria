<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BestWay</title>
    <link rel="stylesheet" href="../css1/bootstrap.min.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" type="text/css" href="../css/estilo.css">
   
</head>
<body>


  <form method="post" action="../config/registro_producto.php"  id=" formulario" class="needs-validation "  novalidate> 
    <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img-left d-none d-md-flex">
                 <!-- Background image for card set in CSS! -->
              </div>
              <div class="card-body">
                <h4 class="card-title text-center">Registro de Producto</h4>
                <form  method="post" action="../config/registro_producto.php" class="needs-validation" novalidate>

                  <div class="form-label-group" >
                    <input type="text" id="nombreProd" name="nombreProd" class="form-control" placeholder="Nombre Producto" required autofocus >
                    <label for="nombre_Prod">Nombre Producto</label>
                    <div  class="valid-feedback">!Dato completo !</div>
                    <div class="invalid-feedback">¡Dato incompleto !</div>
                  </div>

                  <div class="form-label-group">
                    <input type="texto" id="Precio" name="Precio" class="form-control" placeholder="Precio"  required >
                    <label for="Precio">Precio</label>
                    <div class="valid-feedback">!Dato completo !</div>
                    <div class="invalid-feedback">!Dato incompleto !</div>
                  </div>

                  <div class="form-label-group">
                    <input type="text" id="descripcion" class="form-control" placeholder="Descripcion" name="descripcion" required>
                    <label for="descripcion">Descripcion</label>
                    <div class="valid-feedback">¡Dato Completo!</div>
                    <div class="invalid-feedback">!Dato incompleto !</div>
                  </div>

                   <label for="dir">Estado del Producto: </label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="Estado_Prod" id="Estado_Prod1" value="Nuevo">
                    <label class="form-check-label" for="Estado_Prod1">
                      Nuevo
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="Estado_Prod" id="Estado_Prod2" value="Usado">
                    <label class="form-check-label" for="Estado_Prod2">
                      usado
                    </label>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                    <div class="invalid-feedback">!Dato incompleto !</div>
                  </div>
                  <br>

                   

                  <div class="form-group">

                  <select class="form-select" aria-label="Default select example" name="categoria" id="categoria"required>
                    <option value="0">Categoria</option>

                        <?php
                        $conexion=mysqli_connect("localhost","wendydb","my123","proyecto");
                        $consultaCon="SELECT idCategoria,nombreCategoria FROM categoria";
                        $resultadoCon=mysqli_query($conexion,$consultaCon);

                          while ($valores = mysqli_fetch_array($resultadoCon)) {
                            echo '<option value="'.$valores[idCategoria].'">'.$valores[nombreCategoria].'</option>';
                      }
                ?>
                    </select>
                    <div class="valid-feedback">¡Dato Completo!</div>
                     <div class="invalid-feedback">!Dato incompleto !</div>
                 </div>
                  <br>
                  <div class="form-group">
                  <select class="form-select" aria-label="Default select example" name="departamento" id="departamento"required>
                    <option value="0">Departamento</option>

                        <?php
                        $conexion=mysqli_connect("localhost","wendydb","my123","proyecto");
                        $consultaCon="SELECT idDepartamento,Departamento FROM departamento";
                        $resultadoCon=mysqli_query($conexion,$consultaCon);

                          while ($valores = mysqli_fetch_array($resultadoCon)) {
                            echo '<option value="'.$valores[idDepartamento].'">'.$valores[Departamento].'</option>';
                      }
                ?>
                    </select>
                    <div class="valid-feedback">¡Dato Completo!</div>
                     <div class="invalid-feedback">!Dato incompleto !</div>
                 </div>
                  <br>
                   <label for="imagen_Prod">Imagen</label>
                    <input type="file" id="imagen_Prod" name="imagen_Prod" >
                  <hr>


                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit" name="submit" >Guardar</button>
                             
          </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    <script src="../js/jquery-3.3.1.min.js"></script>   
     
     <script src="../js/bootstrap.min.js"></script> 
  	 	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

 	 
    <script src="../codigo.js"></script> 
    <script src="../js/validar.js"></script>
   
    
</body>
</html>