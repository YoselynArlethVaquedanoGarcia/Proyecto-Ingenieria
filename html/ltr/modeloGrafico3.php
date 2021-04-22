<?php

function datosGrafico3(){
            $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
			$sql = "SELECT departamento.Departamento,COUNT(producto.idProducto) as 'Total Productos' from producto inner join departamento where producto.Departamento_idDepartamento=departamento.idDepartamento group by Departamento";	
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