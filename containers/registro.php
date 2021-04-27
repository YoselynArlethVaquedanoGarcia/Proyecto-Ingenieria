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


  <form method="post"   id=" formulario" class="needs-validation "  novalidate> 
    <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              <div class="card-img-left d-none d-md-flex">
                 <!-- Background image for card set in CSS! -->
              </div>
              <div class="card-body">
                <h4 class="card-title text-center">Registro</h4>
                <form  method="post" action="../config/conexion.php" class="needs-validation" novalidate>

                  <div class="form-label-group" id=" divNombre" >
                    <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre Completo" required autofocus >
                    <label for="nombre">Nombre</label>
                    <div  class="valid-feedback">!Dato completo !</div>
                    <div class="invalid-feedback">¡Dato incompleto !</div>
                  </div>

                  <div class="form-label-group">
                    <input type="tel" id="tel" class="form-control" placeholder="telefono" name="telefono" required >
                    <label for="tel">Telefono</label>
                    <div class="valid-feedback">! El telefonico Contiene 8 digitos !</div>
                    <div class="invalid-feedback">!Dato incompleto !</div>
                  </div>

                  <div class="form-label-group">
                    <input type="text" id="dir" class="form-control" placeholder="direccion" name="direccion" required>
                    <label for="dir">Dirección</label>
                    <div class="valid-feedback">¡Direccion contiene letras y numeros.!</div>
                    <div class="invalid-feedback">!Dato incompleto !</div>
                  </div>

                 
                  <label for="dir">Género: </label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="genero" id="genero1" value="masculino">
                    <label class="form-check-label" for="genero1">
                      Masculino
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="genero" id="genero2" value="femenino">
                    <label class="form-check-label" for="genero2">
                      Femenino
                    </label>
                    <div class="invalid-feedback">!Complete el Dato!</div>
                  </div>
                  <br>
                    <label for="imagen">Imagen</label>
                    <input type="file" id="imagen" name="imagen">
                  <hr>

                  <div class="form-label-group">
                    <input type="email" id="email" name="email" class="form-control" placeholder="email" required>
                    <label for="email">Correo Electronico</label>
                    <div class="valid-feedback">¡Dato Correcto!</div>
                    <div class="invalid-feedback">!Dato incorrecto!</div>
                  </div>
                  
                  <div class="form-label-group">
                    <input type="password" id="password" name="password" class="form-control"placeholder="Contraseña" required >
                    <label for="password">Contraseña</label>
                    <div class="valid-feedback">¡Contraseña valida!</div>
                    <div class="invalid-feedback">!Contraseña invalida, debe tener al menos 4 digitos !</div>
                  </div>
                  
                  <div class="form-label-group">
                    <input type="password" id="conpass" name="conpass" class="form-control" placeholder="Contraseña" required  >
                    <label for="conpass">Confirmar Contraseña</label>
                  </div>

                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required >
                  <label class="form-check-label" for="invalidCheck2">He leído y acepto los  
                  <a href="terminos.html"> Terminos y condiciones</a>
                  </label>
                  <div class="valid-feedback">¡Casilla Marcada!</div>
                    <div class="invalid-feedback">!Marque la casilla!</div>
                </div>
                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit" name="submit" onclick="iniciarSeccion()">Registrar</button>
                  <a class="d-block text-center mt-2 small" href="login.php">Iniciar Sesion</a>
                  <hr class="my-4">             
          </form>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <?php
      use PHPMailer\PHPMailer\PHPMailer;
      use PHPMailer\PHPMailer\Exception;
      require '../PHPMailer/Exception.php';
      require '../PHPMailer/PHPMailer.php';
      require '../PHPMailer/SMTP.php';
       //Instantiation and passing `true` enables exceptions
       $mail = new PHPMailer(true); 

			if (isset($_POST['submit'])){
      
        try {
            //Server settings
            $mail->SMTPDebug = 0;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'correopruebasoporte46@gmail.com';                     //SMTP username
            $mail->Password   = 'correo46';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
            //Recipients
            $mail->setFrom('correopruebasoporte46@gmail.com', 'Best Way Shop');
            $mail->addAddress($_POST["email"], '');     //Add a recipient
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Best Way Shop';
            $mail->Body    = '<b>Bienvenido a Best Way!</b><br><br>Best Way la mejor manera de comprar y vender.<br><br> Gracias por registrarte' ; 
            $mail->send();
            //echo 'Message has been sent';
        } catch (Exception $e) {
            //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
      }
		?>
    <script src="../jquery/jquery-3.3.1.min.js"></script>	 	
    <script src="../popper/popper.min.js"></script>	 	 	
    <script src="../bootstrap4/js/bootstrap.min.js"></script>   	
    <script src="../codigo.js"></script> 
    <script src="../js/validar.js"></script>
  
</body>
</html>