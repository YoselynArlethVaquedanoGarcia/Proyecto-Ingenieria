<?php
    include("../clases/class-categorias.php");
    switch($_GET["accion"]){
        case "listar1":
            echo Categorias::listar(); //Esto lo envia al cliente
        break;}
        ?>