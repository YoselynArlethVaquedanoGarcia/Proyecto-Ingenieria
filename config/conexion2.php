<?php
$servername = "localhost";
$database = "proyecto";
$username = "Yoselyn";
$password = "Yoselyn123";

$conexion= mysqli_connect($servername,$username,$password, $database);


$id= rand();

$categoria=$_POST['categoria'];
$email='correopruebasoporte46@gmail.com';
        //Consulta para Insertar
        $sql = "INSERT INTO suscripcion(idSuscripcion, Categoria, Correo) VALUES ('$id', '$categoria', '$email')";
        //Ejecutar Consulta
        $resultado= mysqli_query($conexion,$sql);
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;
        require '../PHPMailer/Exception.php';
        require '../PHPMailer/PHPMailer.php';
        require '../PHPMailer/SMTP.php';
         //Instantiation and passing `true` enables exceptions
         $mail = new PHPMailer(true); 
         $sql1 = $conexion->query("SELECT Nombre_Prod,Precio,imagen_Prod,Moneda,Fecha_Registro from producto  inner join categoria inner join moneda where producto.idMoneda=moneda.idMoneda and producto.Categoria_idCategoria=categoria.idCategoria and  producto.Categoria_idCategoria=$categoria and Fecha_Registro > DATE_SUB(NOW(), INTERVAL 1 WEEK) ");
         $resultadoCon=mysqli_fetch_array($sql1,MYSQLI_ASSOC);
         
         
        if(!empty($resultadoCon)){
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
              $mail->addAddress($email, '');     //Add a recipient
              //Content
              $mail->isHTML(true);                                  //Set email format to HTML
              $mail->Subject = 'Best Way Shop';
              $mail->Body    = "<h1>Best Way</h1> ";
                $mail->Body    .=  "<style type='text/css'>
                body,
                html, 
                .body {
                  background: #f3f3f3 !important;
                }
              </style>
              
              
              <spacer size='16'></spacer>
              
              <container>
                <row>
                  <columns large='4'>
                    <center>
                    <img src=\"cid:logo\" width=400px height=350px/></p>
                    </center>
                  </columns>
                  
                </row>
              
                <spacer size='16'></spacer>
              
                <row><br/>";
                  $mail->Body    .= 
                    '<h1>Nuevas Publicaciones</h1>
                    <img src=\'cid:imagen\' width=400px height=300px/></p>
                    <h3 class="text-center">'.$resultadoCon['Nombre_Prod'].'</h3>
                    <p class="text-center">Precio: '.$resultadoCon['Precio'].''.$resultadoCon['Moneda'].'</p>
                    <p class="text-center">Fecha de Publicacion: '.$resultadoCon['Fecha_Registro'].'</p>
                  </columns>
                </row>
                <row>
                  
                  
                </row>
              
                <spacer size="16"></spacer>
              
                <row>
                  <columns>
                    <h3 class="text-center">Deseas Ver Mas? Inicia Sesion en Best Way.</h3>
                    
                    <spacer size="16"></spacer>
              
                    <button class="large expand" href="#">Iniciar Sesion</button>
                  </columns>
                </row>
              
                <row class="collapsed footer">
                  <columns>
                    <spacer size="16"></spacer>
                    <p class="text-center">bestway@example.com <br/><br/>
                    <a href="#">Todos los derechos Reservados</a> | <a href="#">Eliminar Suscripcion</a></p>
                    <center>
                    
                    </center>
                  </columns>
                </row>
              
                <spacer size="16"></spacer>
              
              </container>';
              $mail->AddEmbeddedImage('../imagenes/'.$resultadoCon['imagen_Prod'].'','imagen');
              $mail->AddEmbeddedImage('../imagenes/logo.png','logo');
              $mail->send();
              //echo 'Message has been sent';
          } catch (Exception $e) {
              //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
          }
        }else{

        }
        
    mysqli_close($conexion);
  

    header("Location: ../containers/suscripciones.php"); 
   


?>
