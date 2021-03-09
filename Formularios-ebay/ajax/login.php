<?php
session_start();
    $archivo = fopen("../data/usuarios.json","r");
    while(($linea=fgets($archivo))){
        $registro=json_decode($linea,true);
        if(
            $_POST["email"]==$registro["email"]&&
            $_POST["password"]==$registro["password"]
        ){
            $registro["estatus"]="1";
            $registro["mensaje"]="Acceso autorizado";
            $_SESSION["email"]=$_POST["email"];
            echo json_encode($registro);
            exit;
        }
    }
    $registro = array();
    $registro["estatus"] = "0";
    $registro["mensaje"] = "Credendiales Invalidas, Por Favor asegurese de que esten Correctas";
    echo json_encode($registro);
?>