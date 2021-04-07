<?php
$conexion=mysqli_connect('localhost','Yoselyn','Yoselyn123','proyecto');
$departamento=$_POST['departamento'];

$sql="SELECT idMunicipio,municipio,Departamento_idDepartamento from municipio where Departamento_idDepartamento=$departamento";

$result=mysqli_query($conexion,$sql);

$cadena='<label for="s_sm" class="d-flex">
<form action="../containers/filtroDepartamento.php" method="post">
<select class="form-select" aria-label="Default select example" name="municipio" id="municipio" required>';

while($ver=mysqli_fetch_row($result)){
    $cadena=$cadena.'<option value='.$ver[0].'>'.utf8_decode($ver[1]).'</option>';
}
echo $cadena."</select> </fom>";
?>