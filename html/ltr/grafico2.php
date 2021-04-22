<?php
require('modeloGrafico2.php');
$consulta=datosGrafico2();
echo json_encode($consulta);
?>