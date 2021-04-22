<?php

function datosGrafico4(){
            $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
			$sql = "SELECT estado.Estado,COUNT(producto.idProducto) as 'Total Productos' from producto inner join estado where producto.Estado_idEstado=estado.idEstado group by Estado";	
			$arreglo = array();
			if ($consulta =$conexion->query($sql)) {

				while ($consulta_VU = mysqli_fetch_array($consulta)) {
					$arreglo[] = $consulta_VU;
				}
				return $arreglo;
			$conexion->cerrar();	
			}
		}
	
?>