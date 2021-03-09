<?php
    include("../class/class-informacion.php");
    switch($_GET["accion"]){
        case "guardar":             
                $p = new Informacion(
                        $_POST['pais'],
                        $_POST['direccion'],
                        $_POST['adicional'],
                        $_POST['ciudad'],
                        $_POST['estado'],
                        $_POST['codigo'],
                        $_POST['email'],
                        $_POST['celular']
                );
                
                echo $p->guardar(); //Esto es lo que se le envia al cliente
            break;
        case "listar":
                echo Informacion::listar(); //Esto lo envia al cliente
            break;
        case "eliminar":
                break;
        case "actualizar":
                break;
        default:
                echo '{"mensaje":"Acción inválida"}';
                break;
    }
?>