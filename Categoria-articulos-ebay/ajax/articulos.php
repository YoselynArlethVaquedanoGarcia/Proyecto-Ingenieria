<?php
 include("../clases/class-articulos.php");
 switch($_GET["accion"]){
     case "listar":
     echo Articulos::obtenerArticulos();
     break;
 }
?>