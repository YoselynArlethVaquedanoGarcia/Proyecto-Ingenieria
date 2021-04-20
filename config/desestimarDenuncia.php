<?php
	
	EliminarDenuncia($_GET['idDenuncia']);
echo $_GET['idDenuncia'];
	function EliminarDenuncia($idDenuncia)
	{
        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
		$consultaCon="DELETE FROM denuncias WHERE idDenuncia='".$idDenuncia."' ";
		$resultadoCon=mysqli_query($conexion,$consultaCon);
	}
?>

<script type="text/javascript">
	alert("Denuncia desestimada Exitosamente");
	window.location.href='../html/ltr/darDeBaja.php';
</script>