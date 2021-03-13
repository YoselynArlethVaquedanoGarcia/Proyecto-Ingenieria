<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css1/bootstrap.min.css">
    <link rel="stylesheet" href="style1.css">
    
</head>
<body>
    <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">!Bienvenido a BestWay!</h3>
                    <form    class="needs-validation" novalidate>
                      <div class="form-label-group">
                        <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Email address" required autofocus >
                        <label for="inputEmail">Correo Electronico</label>
                        <div class="valid-feedback">¡Dato Correcto!</div>
                        <div class="invalid-feedback">!Dato incorrecto!</div>
                      </div>
      
                      <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        <label for="inputPassword">Contraseña</label>
                        <div class="valid-feedback">¡Campo completado!</div>
                        <div class="invalid-feedback">!Complete el campo!</div>   
                      </div>
      
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Recordar Contraseña</label>
                      </div>
                      <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Iniciar Sesion</button>
                      <div class="text-center">
                        <a class="small" href="contrasena.php">¿Olvidaste tu Contraseña?</a></div>
                    </form>
                </div>
                </div>
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