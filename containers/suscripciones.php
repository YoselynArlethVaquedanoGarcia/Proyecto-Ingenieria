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
              <h1 class="card-title text-center"> Suscribete! </h1>
                <form  method="post" action="../config/conexion.php" class="needs-validation" novalidate>
                <h5>Seleccione una Categoria:</h5>
                  
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
    <div  class="valid-feedback">!Dato completo !</div>
                    <div class="invalid-feedback">¡Dato incompleto !</div>   
                <br>
                 <br>
                  <button class="btn btn-lg btn-primary btn-block " type="submit" name="submit" onclick="iniciarSeccion()">Suscribirse</button>
                             
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
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
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