<?php
    include("../clases/class-subcategorias.php");
    switch($_GET["accion"]){
        case "listar1":
            echo SubCategorias::listar1(); //Esto lo envia al cliente
        break;
        case "listar2":
            echo SubCategorias::listar2(); 
        break;
        case "listar3":
            echo SubCategorias::listar3(); 
        break;
        case "listar4":
            echo SubCategorias::listar4(); 
        break;
        case "listar5":
            echo SubCategorias::listar5(); 
        break;
        case "listar6":
            echo SubCategorias::listar6(); 
        break;
        case "listar7":
            echo SubCategorias::listar7(); 
        break;
        case "listar8":
            echo SubCategorias::listar8(); 
        break;
        case "listar9":
            echo SubCategorias::listar9(); 
        break;
        case "listar10":
            echo SubCategorias::listar10(); 
        break;
        case "listar11":
            echo SubCategorias::listar11(); 
        break;
        case "listar12":
            echo SubCategorias::listar12(); 
        break;
        case "listar13":
            echo SubCategorias::listar13(); 
        break;
        case "listar14":
            echo SubCategorias::listar14(); 
        break;
        case "listar15":
            echo SubCategorias::listar15(); 
        break;
        case "listar16":
            echo SubCategorias::listar16(); 
        break;
    
    }

?>