<?php
	
	suscripcion($_GET['idCategoria']);
echo $_GET['idCategoria'];
	function suscripcion($idCategoria)
	{
        $conexion=mysqli_connect("localhost","Chris","zxcv","proyecto");
        $consultaCon="SELECT idUsuario, idSuscripcion FROM suscripcion WHERE idCategoria='".$idCategoria."' ";
		//$consultaCon="SELECT FROM denuncias WHERE idCategoria='".$idCategoria."' ";
		$resultadoCon=mysqli_query($conexion,$consultaCon);
	}
?>

<script type="text/javascript">
	alert("Suscripcion procesada Exitosamente");
	window.location.href='../suscrip.php';
</script>