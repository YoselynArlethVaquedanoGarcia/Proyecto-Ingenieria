<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BestWay</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../css1/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/estilo.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.php">BestWay   
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.php">Iniciar Sesion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="registro.php">Registrarse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <div class="divVar">
            <h6 class="varh6">
            <?php 
            if(isset($_SESSION['correo'])){
              echo '<p class="variable">Hola <span> </span>'.$_SESSION['correo']."</p>";
            }
            ?></h6>
            </div>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="../config/salir.php">Cerrar Sesión   
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <?php 
    $corr=$_SESSION['correo'];
        //include 'validar_usuario.php';
        $conexion=mysqli_connect("localhost","Chris","zxcv","proyecto");

        //$sql="SELECT Correo, Nombre, telefono,direccion,imagen FROM usuario where Correo='$corr'";
        $sql="SELECT * from usuario";
        $response= mysqli_query($conexion,$sql);
        //$row = mysql_fetch_array($response);
    ?>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>correo</th>
                </tr>
            </thead>
            <tbody>
            <?php 
                while ($fila = mysqli_fetch_assoc($response)) {
                    echo $fila["idUsuario"];
                    echo $fila["Correo"];
                    echo $fila["Nombre"];
                    echo $fila["Telefono"];
                }
            ?>

            </tbody>
        </table>
    </div>


      <script src="../js/validar.js"></script>
</body>
</html>