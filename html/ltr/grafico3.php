<?php
require('modeloGrafico3.php');
$consulta=datosGrafico3();
echo json_encode($consulta);
?>