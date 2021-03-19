<?php 
include('../layout/navbar.php')
?>  
  <div class="container">
    <div class="row">
    <div class="col-lg-6">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>  
                <td>ID</td>
                 <td><?php echo $id?></td>
                </tr>
                  <tr>
                    <td>Correo</td>
                    <td><?php echo $email?></td>
                  </tr>
                  <tr>
                    <td>Nombre</td>
                    <td><?php echo $nombre?></td>
                  </tr>
                  <tr>
                    <td>Telefono</td>
                    <td><?php echo $telefono?></td>
                  </tr>
                  <tr>
                    <td>Dirección</td>
                    <td><?php echo $direccion?>
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="col-lg-6" >
          nuevo div <?php echo $id ?>
          <?php 
            if(isset($_SESSION['idUsuario'])){
              echo '<p class="variable">Hola <span> </span>'.$_SESSION['idUusuario']."</p>";
            }
            ?>
      </div>
    </div>
    </div>
  