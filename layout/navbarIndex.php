<?php 
session_start();
if(!isset($_SESSION['correo'])){
  error_reporting(0);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BestWay</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../css1/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/estilo.css">
</head>
<body>
<?php 
  
    $corr=$_SESSION['correo'];
    if(!empty($corr)){
        //include 'validar_usuario.php';
        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
        //$sql="SELECT Correo, Nombre, telefono,direccion,imagen FROM usuario where Correo='$corr'";
        $sql="SELECT idUsuario, Correo,Nombre,Telefono,Direccion,Imagen FROM `usuario` WHERE Correo='$corr'";
        $response= mysqli_query($conexion,$sql);
        while ($fila = mysqli_fetch_assoc($response)) {
           $id=$fila["idUsuario"];
           $email= $fila["Correo"];
           $nombre= $fila["Nombre"];
           $telefono= $fila["Telefono"];
           $direccion=$fila["Direccion"];
           $imagen=$fila["Imagen"];
         }

        }
    ?>

  
          
  
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">BestWay </a></h1>
      

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="index.php">Home</a></li>
          <li><a class="nav-link scrollto" href="login.php">Iniciar Sesion</a></li>
          <li><a class="nav-link scrollto" href="registro.php">Registrarse</a></li>
          <li><a class="nav-link scrollto " href="categorias.php">Productos</a></li>
          <?php   if(isset($_SESSION['correo'])){ 
            echo '<li class="dropdown"><a href="#"><span>'.$nombre.'</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              
              <li class="dropdown"><a href="#"><span>Mi Perfil</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="../containers/updateUser.php">Editar Perfil</a></li>
                  <li><a href="../containers/mi_Productos.php">Mis Productos</a></li>
                  <li><a href="../containers/registroProducto.php">Registro de Productos</a></li>
                  <li><a href="../containers/comentarios.php">Ver Comentarios</a></li>
                </ul>
              </li>';
            };?>
            <li><a href="../containers/suscripciones.php">Suscripciones</a></li>
              <li><a href="../config/salir.php">Cerrar Sesión</a></li>
              
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contacto</a></li>
         
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
    
          
      
      <script src="../js/validar.js"></script>
    </body>
</html>