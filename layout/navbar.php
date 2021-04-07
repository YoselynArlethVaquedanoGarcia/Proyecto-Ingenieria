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

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top menu">
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
                <a class="nav-link" href="../containers/categorias.php">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
       
            <div class="divVar">
            <div class="dropdown show">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <?php 
            if(isset($_SESSION['correo'])){
              echo '<p class="variable"><span> </span>'.$nombre. "</p>";
            }
            ?>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="../containers/updateUser.php" style="text-decoration:none ; color:gray">&nbsp; Contacto</a>
          <a class="dropdown-item"  style="text-decoration:none ; color:gray">
            <?php if(isset($_SESSION['correo'])){ 
                  echo '<a class="nav-link" href="../containers/updateUser.php" style="text-decoration:none ; color:gray">Editar Usuario'; 
                  echo '<a class="nav-link" href="../containers/registroProducto.php" style="text-decoration:none ; color:gray">Registro Producto'; 
                  echo '<a class="nav-link" href="../containers/mi_Productos.php" style="text-decoration:none ; color:gray">Mis Productos'; 
                  echo '<a class="nav-link" href="../config/salir.php" style="text-decoration:none ; color:gray">Cerrar Sesión'; 
                  
                }?>  </a>
          </div>
        </div>
            </div>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <?php if(isset($_SESSION['correo'])){ echo '<a class="nav-link" href="../config/salir.php">'; }  ?>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
              
          
      
      <script src="../js/validar.js"></script>
    </body>
</html>