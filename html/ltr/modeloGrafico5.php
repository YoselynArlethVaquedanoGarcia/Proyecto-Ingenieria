<?php

function datosGrafico5(){
            $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
			$sql = "SELECT TipoCategoria,sum(Precio) as Total from producto inner join categoria where producto.Categoria_idCategoria=categoria.idCategoria group by Tipocategoria ";	
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