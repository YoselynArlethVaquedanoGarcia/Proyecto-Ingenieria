<?php
    include("../clases/class-cat.php");
    switch($_GET["accion"]){
        case "listar1":
            echo Cat::listar(); //Esto lo envia al cliente
        break;}
        ?>