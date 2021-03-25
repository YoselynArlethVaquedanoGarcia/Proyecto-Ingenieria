<?php 
include('../layout/navbar.php')
?>

<?php if (isset($_SESSION['correo'])):?> 
 <div class="container">
    <div class="row">
      <div class="col-lg-6"><br>
      <h4 style="border-bottom: solid 2px gray;"><?php echo $nombre ?></h4><br>
      <h6 style="border-bottom: solid 2px gray; margin-left: 20px;">Información de Contacto</h6>
      <div>
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Correo electronico: <?php echo $email ?> </p> 
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Telefono: <?php echo $telefono ?> </p> 
        <p style="border-bottom: solid 2px gray; margin-left: 20px;"> Dirección: <?php echo $direccion ?> </p> 
      </div>
</div> 
<?php endif;?>
<?php if (!isset($_SESSION['correo'])):?> 
<h6 style="border-bottom: solid 2px gray; margin-left: 20px;">Información de Contacto</h6>
<?php endif;?>

