<?php
	
	Eliminar($_GET['idProducto']);

	function Eliminar($idProducto)
	{
        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
		$consultaCon="DELETE FROM producto WHERE idProducto='".$idProducto."' ";
		$resultadoCon=mysqli_query($conexion,$consultaCon);
	}
?>

<script type="text/javascript">
	alert("Publicación eliminada exitosamente");
	window.location.href='../config/periodoServicios.php';
</script>