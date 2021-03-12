<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="css1/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" type="text/css" href="css/estilo.css">
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
                <h4 class="card-title text-center">Registro</h4>
                <form class="needs-validation" novalidate>

                  <div class="form-label-group">
                    <input type="text" id="nombre" class="form-control" placeholder="Nombre Completo" required autofocus onkeyup="validarNombre(this)">
                    <label for="nombre">Nombre</label>
                    <div class="valid-feedback">¡Dato completado!</div>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>

                  <div class="form-label-group">
                    <input type="tel" id="tel" class="form-control" placeholder="telefono" required onkeyup="validarTel(this)">
                    <label for="tel">Telefono</label>
                    <div class="valid-feedback">¡Dato completado!</div>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>

                  <div class="form-label-group">
                    <input type="text" id="dir" class="form-control" placeholder="direccion" required onkeyup="validarDire(this)">
                    <label for="dir">Dirección</label>
                    <div class="valid-feedback">¡Dato completado!</div>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>

                  
                    <label for="dir">Género: </label>
                 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="genero1">
                    <label class="form-check-label" for="genero1">
                      Masculino
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="genero2" >
                    <label class="form-check-label" for="genero2">
                      Femenino
                    </label>
                   
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>
                  <br>
                  
                    <label for="imagen">Imagen</label>
                    <input type="file" id="imagen">
                  
                  
                  <hr>

                  <div class="form-label-group">
                    <input type="email" id="email" class="form-control" placeholder="email" required>
                    <label for="email">Correo Electronico</label>
                    <div class="valid-feedback">¡Dato Correcto!</div>
                    <div class="invalid-feedback">!Dato incorrecto!</div>
                  </div>
                  
                  <div class="form-label-group">
                    <input type="password" id="password"class="form-control"placeholder="Contraseña" required onkeyup="validarPassword(this)">
                    <label for="password">Contraseña</label>
                    <div class="valid-feedback">¡Dato completado!</div>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>
                  
                  <div class="form-label-group">
                    <input type="password" id="conpass" class="form-control" placeholder="Contraseña" required  >
                    <label for="conpass">Confirmar Contraseña</label>
                    <div class="valid-feedback" id ="passwordCompleto" >¡Dato completado!</div>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>

                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required >
                  <label class="form-check-label" for="invalidCheck2">
                    He leído y acepto los términos y condiciones
                  </label>
                  <div class="valid-feedback">¡Casilla Marcada!</div>
                    <div class="invalid-feedback">!Marque la casilla!</div>
                </div>
                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit"  onclick="iniciarSeccion()">Registrar</button>
                  <a class="d-block text-center mt-2 small" href="login.php">Iniciar Sesion</a>
                  <hr class="my-4">
                 
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <script src="jquery/jquery-3.3.1.min.js"></script>	 	
    <script src="popper/popper.min.js"></script>	 	 	
    <script src="bootstrap4/js/bootstrap.min.js"></script>   	
    <script src="codigo.js"></script> 
    <script src="js/validar.js"></script>
</body>
</html>