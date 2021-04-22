<?php
require('modeloGrafico4.php');
$consulta=datosGrafico4();
echo json_encode($consulta);
?>