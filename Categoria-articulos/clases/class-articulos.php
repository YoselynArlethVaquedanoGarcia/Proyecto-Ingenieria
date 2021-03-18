<?php
class Articulos{
	private $nombre;
	private $estado;
	private $cantidad;
	private $precio;
	private $precioactual;

	public function __construct(
		$nombre,
		$estado,
		$cantidad,
		$precio,
		$precioactual
	){
		$this->nombre = $nombre;
		$this->estado = $estado;
		$this->cantidad = $cantidad;
		$this->precio = $precio;
		$this->precioactual = $precioactual;
	}

	public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
	}
	public function getEstado(){
		return $this->estado;
	}

	public function setEstado($estado){
		$this->estado = $estado;
	}
	public function getCantidad(){
		return $this->cantidad;
	}

	public function setCantidad($cantidad){
		$this->cantidad = $cantidad;
	}
	public function getPrecio(){
		return $this->precio;
	}

	public function setPrecio($precio){
		$this->precio = $precio;
	}
	public function getPrecioactual(){
		return $this->precioactual;
	}

	public function setPrecioactual($precioactual){
		$this->precioactual = $precioactual;
	}
	public static function obtenerArticulos(){
		return file_get_contents("../data/articulos.json");
	}

}


?>