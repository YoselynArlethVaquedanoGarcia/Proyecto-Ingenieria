

<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Categorias</title>
<link rel="stylesheet" href="css1/bootstrap.min.css">
<link rel="stylesheet" href="style1.css">
  
</head>
<body>
<div class="todo">

<div class="container-fluid"> 
        <div class="row">
                <div class="col-sm-12 d-flex justify-content-center">
                    <h1 class="text-center">Categorias </h1>.
            </div>
        </div>

    </div>
    <br>
  <div id="contenido">
  	<table style="margin: auto; width: 800px; border-collapse: separate; border-spacing: 10px 5px;">
  		<thead>
  			<th>IdCategoria</th>
  			<th>Tipocategoria</th>
  			
  		</thead>
  		
  		
  		<?php
  
     $conexion=mysqli_connect("localhost","root","","proyecto");
     $consultaCon="SELECT idCategoria,Tipocategoria FROM categoria";
     $resultadoCon=mysqli_query($conexion,$consultaCon);

     
      while($valores = mysqli_fetch_array($resultadoCon,MYSQLI_ASSOC))
      {
        echo "<tr>";
          echo "<td>"; echo $valores['idCategoria']; echo "</td>";
          echo "<td>"; echo $valores['Tipocategoria']; echo "</td>";
          echo "<td>  <a href='config/suscripciones.php?idCategoria=".$valores['idCategoria']."'> <button type='button' class='btn btn-success'>Suscribirse</button> </a> </td>";
          
        echo "</tr>";
      }

      ?>
  	</table>
  </div>
  
</div>


</body>

