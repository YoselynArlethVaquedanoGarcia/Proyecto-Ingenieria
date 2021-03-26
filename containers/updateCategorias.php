<?php 
include('../layout/navbar.php')
?> 

<div class="container">
    <div class="row">
      <div class="col-lg-6"><br>
      <h2>MY BESTWAY</h2><br>
      <h4 style="border-bottom: solid 2px gray;"><?php echo $nombre ?></h4><br>
      <h6 style="border-bottom: solid 2px gray; margin-left: 20px;">Información de Contacto</h6>
      <div>
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Correo electronico: <?php echo $email ?> </p> 
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Telefono: <?php echo $telefono ?> </p> 
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Dirección: <?php echo $direccion ?> </p> 
      </div>
      
      
      </div>
      <div class="col-lg-6" ><br>
          Editar  <?php $id ?>
          <form method="post" action="updateUser.php" class="needs-validation" novalidate>
            <input type="hidden" name="idp" id="" value="<?php echo $id ?>">
            
            <label for="">Correo</label>
            <input type="text" class="form-control" name="txtemail" id="txtemail" value="<?php echo $email ?>">
            <label for="">Nombre</label>
            <input type="text" class="form-control" name="txtnombre" id="txtnombre" value="<?php echo $nombre ?>">
            <div >
              <label for="tel">Telefono</label>
              <input type="number" id="tel" class="form-control" value="<?php echo $telefono ?>" placeholder="telefono" name="txttelefono" required >
              <div class="valid-feedback">! El telefonico Contiene 8 digitos !</div>
              <div class="invalid-feedback">!Dato incompleto !</div>
            </div>
            <div >
              <label for="dir">Dirección</label>
              <input type="text" id="dir" class="form-control" value="<?php echo $direccion ?>" placeholder="direccion" name="txtdireccion" required>
              <div class="valid-feedback">¡Direccion contiene letras y numeros.!</div>
              <div class="invalid-feedback">!Dato incompleto !</div>
            </div><br>
            
            <input class="btn btn-primary" type="submit" name="" id="" value="Actualizar">
          </form>
          <?php 
          error_reporting(0);
          $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
            $idp=$_POST['idp'];
            $em=$_POST['txtemail'];
            $user=$_POST['txtnombre'];
            $tel=$_POST['txttelefono'];
            $dir=$_POST['txtdireccion'];
            //UPDATE usuario SET nombre='Cristiano' WHERE idUsuario='742246112';
            if($em!=null||$user!=null||$tel!=null||$dir!=null){
              $sql2="UPDATE usuario SET Correo='$em', Nombre='$user', Telefono='$tel', Direccion='$dir' where idUsuario='$idp' ";
              mysqli_query($conexion, $sql2);
              if($user=1){
                header("location: updateUser.php");
              }
            }
            
          ?>
         
      </div>
    </div>
    </div>
     <script src="../codigo.js"></script> 
    <script src="../js/validar.js"></script>
  