<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contrasena</title>
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
                <h4 class="card-title text-center">Recuperar Contraseña</h4>
                <form  method="post" action="cambiarContrasena.php" class="needs-validation" novalidate>
               
                
                  <div class="form-label-group">
                    <input type="email" id="email"  name ="CorreoContra" class="form-control" placeholder="email" required>
                    <label for="email">Correo Electronico</label>
                  </div>
                  
                  <div class="form-label-group">
                    <input type="password" id="password" name ="ContraNueva" class="form-control"placeholder="Contraseña" required>
                    <label for="password">Nueva Contraseña</label>
                    <div class="valid-feedback">¡Contraseña valida!</div>
                    <div class="invalid-feedback">!contraseña invalida, al menos 4 digitos !</div>
                  </div>
                  
                  <div class="form-label-group">
                    <input type="password" id="conpass" name ="confirmar" class="form-control" placeholder="Contraseña" required>
                    <label for="conpass">Confirmar Nueva Contraseña</label>
                    <div class="valid-feedback" id ="passwordCompleto" >¡Contraseña Valida!</div>
                    <div class="invalid-feedback">!Contraseña invalida, no concuerda !</div>
                  </div>

                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit" onclick="cambiarContraseña()" >Confirmar Contraseña</button>
                  <br>
                  <a class="d-block text-center mt-2 small" href="login.php">Iniciar Sesion</a>
                  <hr class="my-4">
                 
                  
                </form>
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