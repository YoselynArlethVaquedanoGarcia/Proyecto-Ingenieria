<?php

function datosGrafico1(){
            $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
			$sql = "SELECT MONTHNAME(Fecha_Registro) as 'Mes' ,COUNT(idProducto) as 'Total Productos' from producto group by Mes";	
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