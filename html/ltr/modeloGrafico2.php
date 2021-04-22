<?php

function datosGrafico2(){
            $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
			$sql = "SELECT categoria.Tipocategoria,COUNT(producto.idProducto) as 'Total Productos' from producto inner join categoria where producto.Categoria_idCategoria=categoria.idCategoria group by Tipocategoria";	
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