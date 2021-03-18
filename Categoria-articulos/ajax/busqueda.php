<?php
    session_start(); //Tiene que ser la primera funcion.
    $archivo = fopen("../data/busqueda.json","r");
    while(($linea=fgets($archivo))){
        $registro = json_decode($linea,true);
        if (
            $_POST["busqueda"]==$registro["busqueda"]
           
        ){
            $registro["estatus"] = "1"; //Acceso exitoso
            $registro["mensaje"] = "Acceso autorizado";
            $_SESSION["busqueda"] = $_POST["busqueda"];
            $_SESSION["articulo"] = $registro["articulo"];

            echo json_encode($registro);
            exit;
        }
    }
    //No encontro el registro
    $registro = array();
    $registro["estatus"] = "0"; //Acceso no autorizado
    $registro["mensaje"] = "Acceso no autorizado";
    echo json_encode($registro);
?>