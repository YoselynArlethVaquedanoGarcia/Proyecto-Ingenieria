<?php 
include('../layout/navbar.php')
?>

<?php
$conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
$resultados=$conexion->query("SELECT Calificacion,Comentario FROM calificaciones inner join usuario where calificaciones.idUsuario=usuario.idUsuario and usuario.idUsuario=$id");

while ($resultado=mysqli_fetch_array($resultados,MYSQLI_ASSOC)){
    ?>
  
<div class="card" >
  <div class="card-header">
    Comentario
  </div>
  <div class="card-body" width=80%>
    <blockquote class="blockquote mb-0">
      <p><?php echo $resultado["Comentario"]; ?></p>
      <footer class="blockquote-footer">Calificaci&oacute;n: &nbsp;<?php echo $resultado["Calificacion"]; ?></footer>
    </blockquote>
  </div>
</div>

<?php   } ?>