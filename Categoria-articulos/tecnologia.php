<?php 
    session_start();  
    if (!isset($_SESSION["busqueda"]))
        header("Location: no-autorizado.html");//Redireccion con PHP
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Computadoras, tablets y hardware de red | eBay</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="https://pages.ebay.com/favicon.ico">
		<link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/custom.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
		<title></title>
	  
 	  <!-- Google font -->
 	  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">
 	  <!-- Bootstrap -->
 		<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/>
 		<!-- Slick -->
 		<link type="text/css" rel="stylesheet" href="css/slick.css"/>
 		<link type="text/css" rel="stylesheet" href="css/slick-theme.css"/>
 		<!-- nouislider -->
 		<link type="text/css" rel="stylesheet" href="css/nouislider.min.css"/>
 		<!-- Font Awesome Icon -->
 		<link rel="stylesheet" href="css/font-awesome.min.css">
 		<!-- Custom stlylesheet -->
 		<link type="text/css" rel="stylesheet" href="css/style.css"/>
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	<style>
		@media only screen and (max-width: 992px) {
    .col-md-3{
        width:20%;
    }
}
	</style>	
	</head>
	<body style="background-color: #F5F5F5;">
	<?php
	include("encabezado.php");
	?>
		<!-- BREADCRUMB -->
		<div id="error"></div>
		<div id="breadcrumb" class="section" style="background-color: #F5F5F5;">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-12 col-xs-12">
						<ul class="breadcrumb-tree">
							<li><a href="#">eBay</a></li>
							<li class="active">Computadoras, tablets y hardware de red</li>
						</ul>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /BREADCRUMB -->
		<span ><h1 style="font-size: 1.75rem; color: #333; margin-left: 110px; position: absolute">Computadoras y Accesorios</h1></span>
		<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container" style="margin-left: 35px;">
				<!-- row -->
				<div class="row">
					<!-- ASIDE -->
					<div id="aside1" class="col-md-3 " style="border-bottom-style: inset; padding-right: 70px">
						<!-- aside Widget -->
						<div class="aside">
							<h2 class="aside-title">Comprar por categoria</h2>
							<div class="checkbox-filter form-group">
								<ul id="lista-categoria">
									<li>
									<div class="input-checkbox">
										<button type="button" id="btn-mostrar" onclick="mostrar()" ondblclick="ocultar()">
											<span>3D impresoras y suministros</span>
											<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
										</button>
									<ul id="lista-ul" style="display: none">
									
								</ul>
								</div>
									</li>
								<li>
										<div class="input-checkbox" >
											<button type="button" onclick="mostrar2()" ondblclick="ocultar2()">
												<span>Cables y conectores de Computadora</span>
												<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
											</button>
										</div>
										<ul id="lista-ul-2" style="display: none">
											
									</ul>
									</li>
									<li>
											<div class="input-checkbox">
												<button type="button" onclick="mostrar3()" ondblclick="ocultar3()">
													<span>Piezas y componentes de Computadora</span>
													<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
												</button>
											</div>
											<ul id="lista-ul-3" style="display: none">
												
										</ul>
										</li>
										<li>
												<div class="input-checkbox">
													<button type="button" onclick="mostrar4()" ondblclick="ocultar4()">
														<span>Unidades de disco, almacenamiento y Discos en Blanco</span>
														<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
													</button>
												</div>
												<ul id="lista-ul-4" style="display: none">
													
											</ul>
											</li>
										<li>
										<div class="input-checkbox">
											<button type="button" onclick="mostrar5()" ondblclick="ocultar5()">
													<span>Teclados, mouse y punteros de Computadora</span>
														<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
												</button>
										</div>
										<ul id="lista-ul-5" style="display: none">
											
									</ul>
										</li>
									<li>
								<div class="input-checkbox">
										<button type="button" onclick="mostrar6()" ondblclick="ocultar6()">
											<span>Monitores, proyectores y accesorios de Computadora</span>
												<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
												</button>
											</div>
											<ul id="lista-ul-6" style="display: none">
												
										</ul>
											</li>
													<li>
													<div class="input-checkbox">
													<button type="button" onclick="mostrar7()" ondblclick="ocultar7()">
											<span>Equipo de protección y distribución de energía de Computadora</span>
													<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
											</button> 
											</div>
											<ul id="lista-ul-7" style="display: none">
												
										</ul>
									</li>
											<li>
										<div class="input-checkbox">
											<button type="button" onclick="mostrar8()" ondblclick="ocultar8()">
													<span>Impresoras, escáneres y suministros de Computadora</span>
														<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
															</button>
											</div>
											<ul id="lista-ul-8" style="display: none">
												
										</ul>
													</li>
								<li>
										<div class="input-checkbox">
								<button type="button" onclick="mostrar9()" ondblclick="ocultar9()">
								<span>Software de computadora</span>
											<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
										</button>
													</div>
													<ul id="lista-ul-9" style="display: none">
														
				</ul>
											</li>
																<li>
										<div class="input-checkbox">
									<button type="button">
									<span>Manuales de computadoras, tablets y redes y recursos</span>
												</button>
										</div>
											</li>

											<li>
											<div class="input-checkbox">
												<button type="button" onclick="mostrar10()" ondblclick="ocultar10()">
													<span>Computadoras, tablets y redes Lotes al Por Mayor</span>
													<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
													</button>
														</div>
														<ul id="lista-ul-10" style="display: none">
															
													</ul>
														</li>
														<li>
														<div class="input-checkbox">
													<button type="button" onclick="mostrar11()" ondblclick="ocultar11()">
											<span>Computadoras de escritorio y computadoras Todo en Uno</span>
												<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
														</button>
														</div>
														<ul id="lista-ul-11" style="display: none">
															
													</ul>
														</li>	
															<li>
															<div class="input-checkbox">
														<button type="button" onclick="mostrar12()" ondblclick="ocultar12()">
													<span>Redes y servidores empresariales</span>
											<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
												</button>
								</div>
								<ul id="lista-ul-12" style="display: none">
									
							</ul>
									</li>	
											<li>
										<div class="input-checkbox">
								<button type="button" onclick="mostrar13()" ondblclick="ocultar13()">
											<span>Red doméstica y equipos de conectividad</span>
											<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
										</button>
										</div>
										<ul id="lista-ul-13" style="display: none">
											
									</ul>
										</li>	
								<li>
									<div class="input-checkbox">
									<button type="button" onclick="mostrar14()" ondblclick="ocultar14()">
										<span>Laptop & Desktop Accessories</span>
								<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
										</button>
									</div>
									<ul id="lista-ul-14" style="display: none">
										
								</ul>
									</li>
						<li>
					<div class="input-checkbox">
					<button type="button" onclick="mostrar15()" ondblclick="ocultar15()">
							<span>Las computadoras portátiles y netbooks</span>
							<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
									</button>
											</div>
											<ul id="lista-ul-15" style="display: none">
												
										</ul>
										</li>	
					<li>
							<div class="input-checkbox">
										<button type="button">
							<span>Otros ordenadores, tablets y equipos de red, piezas y accesorios</span>
					</button>
								</div>
										</li>
					<li>
								<div class="input-checkbox">
						<button type="button" onclick="mostrar16()" ondblclick="ocultar16()">
											<span>Lector de libros electrónicos y tablet Accesorios</span>
											<i class="fas fa-angle-down" style="color: #0956BB; float: right"></i>
												</button>
										</div>
										<ul id="lista-ul-16" style="display: none">
											
									</ul>
										</li>	
										<li>
												<div class="input-checkbox">
													<button type="button">
														<span>Lector de libros electrónicos y tablet piezas</span>
										</button>
										</div>
									</li>	
									<li>
											<div class="input-checkbox">
												<button type="button">
									<span>Tabletas y lectores electrónicos</span>
								</button>
							</div>
						</li>	
								<li>
										<div class="input-checkbox">
											<button type="button">
												<span style="color: #0654BA">MAS</span>
											<i class="fas fa-angle-down" style="color: #0654BA" ></i>
										</button>
									</div>
								</li>									
								</ul>
								</div>
							</div>
							<!-- /aside Widget -->
						</div>
						<!-- /ASIDE -->
					<!-- STORE -->
					<div id="store" class="col-md-9">
				<!-- store products -->
				<div id="cont-art" class="container" style="width: 962px;">
						<div class="row">
								<div class="col-md-12 col-xs-12">
										<div class="product">
												<section class="b-module b-promobanner clearfix _F4FABE157A40 d1img70">
													<div class="b-promobanner__info">
														<h2 class="b-promobanner__info-title">Para jugar y trabajar </h2>
														<div class="b-promobanner__info-sub">
															<div>Laptops y PCs</div><div></div></div></div>
															<div class="b-promobanner__right">
																<img alt="RIGHT" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/khYAAOSwhexcHWF1/s-l960.webp" width="960" height="467">
															</div></section>
										</div>
									</div>
	<div class="col-md-12 col-xs-12">
			<div class="product">
				<section class="b-module b-visualnav">
					<div class="b-visualnav__heading">
					</div>
					<div class="b-visualnav__grid">
						<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-2.php" role="text" >
							<div class="b-visualnav__img b-visualnav__img__default">
								<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/M~MAAOSwNXpcPilp/s-l225.webp" width="225" height="225">
							</div>
								<div class="b-visualnav__title">PC Laptops &amp; Netbooks</div>
									</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-2.php" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/ijQAAOSwusdcPilu/s-l225.webp" width="225" height="225">
			</div>
			<div class="b-visualnav__title">Apple </div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="#" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/nJ0AAOSwgZlcPil1/s-l225.webp" width="225" height="225">
			</div>
				<div class="b-visualnav__title">Tabletas Apple</div>
			</a>
			<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-3.php" role="text" >
				<div class="b-visualnav__img b-visualnav__img__default">
					<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/sqgAAOSw6CRcPipB/s-l225.webp" width="225" height="225">
				</div>
					<div class="b-visualnav__title">PC Desktops y todo en uno</div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/FuQAAOSwW4tcPipM/s-l225.webp" width="225" height="225">
			</div>
				<div class="b-visualnav__title">Computadoras Apple y todo en uno</div>
			</a>
			<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-3.php" role="text" >
				<div class="b-visualnav__img b-visualnav__img__default">
					<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/P6YAAOSwEUdcPipe/s-l225.webp" width="225" height="225">
				</div>
					<div class="b-visualnav__title">Accesorios para computadora</div>
					</a>
					<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-2.php" role="text" >
						<div class="b-visualnav__img b-visualnav__img__default">
							<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/Ul8AAOSwCgtcPipu/s-l225.webp" width="225" height="225">
						</div>
							<div class="b-visualnav__title">Accesorios para Tableta</div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-2.php3" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/rpIAAOSwjfBcPipy/s-l225.webp" width="225" height="225">
			</div>
				<div class="b-visualnav__title">Impresoras</div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/2OcAAOSwLX5cPip3/s-l225.webp" width="225" height="225">
			</div>
				<div class="b-visualnav__title">Componentes y partes de computadora</div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-2.php" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/DEkAAOSw~slcPip7/s-l225.webp" width="225" height="225">
			</div>
				<div class="b-visualnav__title">Monitores</div>
																	</a>
																</div>
															</section>
					</div>
				</div>
				<div class="col-md-12 col-xs-12">
						<div class="product">
<section class="b-module b-visualnav">
	<div class="b-visualnav__heading">
		<h2 class="b-title ">Gaming</h2>
		</div>
	<div class="b-visualnav__grid">
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-2.php" role="text" >
		<div class="b-visualnav__img b-visualnav__img__default">
			<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/2foAAOSwH~Rbu9Mk/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Alienware Laptops &amp; Netbooks</div>
			</a>
	<a class="b-visualnav__tile b-visualnav__tile__default" href="#" role="text" >
	<div class="b-visualnav__img b-visualnav__img__default">
	<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/w1UAAOSwa29bu9Mo/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Alienware PC Desktops </div>
			</a>
			<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-3.php" role="text" >
				<div class="b-visualnav__img b-visualnav__img__default">
					<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/VboAAOSwUlxbu9Mr/s-l225.webp" width="225" height="225">
				</div>
				<div class="b-visualnav__title">Monitores Widescreen </div>
	</a>
	<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-12.php" role="text" >
		<div class="b-visualnav__img b-visualnav__img__default">
			<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/za0AAOSwCnVbu9Mu/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Videojuegos</div>
	</a>
	<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-14.php" role="text" >
		<div class="b-visualnav__img b-visualnav__img__default">
			<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/ohoAAOSwQjxbu9Mz/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Tarjetas graficas</div>
	</a>
	<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text" >
		<div class="b-visualnav__img b-visualnav__img__default">
			<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/lOoAAOSwa9Bbu9M5/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Headsets PC</div>
	</a>
	<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text">
		<div class="b-visualnav__img b-visualnav__img__default">
			<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/iMgAAOSwAOxbu9M9/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Teclados Gaming</div>
	</a>
	<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text" >
		<div class="b-visualnav__img b-visualnav__img__default">
			<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/jSsAAOSwZl1bu9NB/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Ratones Gaming</div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/gnMAAOSwOuBbu9NG/s-l225.webp" width="225" height="225">
			</div>
			<div class="b-visualnav__title">Gaming Mouse Pads </div>
		</a>
		<a class="b-visualnav__tile b-visualnav__tile__default" href="Articulo-4.php" role="text" >
			<div class="b-visualnav__img b-visualnav__img__default">
				<img alt="" class="b-img" itemprop="image" role="presentation" src="https://i.ebayimg.com/thumbs/images/g/TuEAAOSwJtVbu9NN/s-l225.webp" width="225" height="225">
		</div>
		<div class="b-visualnav__title">Gaming Cases para computadora</div>
			</a>
			</div>
			</section>
		</div>
	</div>
	<div class="col-md-12 col-xs-12">
			<div class="product">
				<div class="product-img">
				<section class="b-module b-carousel b-deals b-display--portrait" id="w5" data-view="mi:4329|iid:1" data-hscroll-previous="{&quot;eventFamily&quot;:&quot;LST&quot;,&quot;eventAction&quot;:&quot;ACTN&quot;,&quot;actionKind&quot;:&quot;HSCROLL&quot;,&quot;operationId&quot;:&quot;2489527&quot;,&quot;flushImmediately&quot;:false,&quot;eventProperty&quot;:{&quot;moduledtl&quot;:&quot;mi:4329|iid:1|scen:topDeals_1&quot;,&quot;parentrq&quot;:&quot;69c7b6d91690add8d19c6220fff904a2&quot;,&quot;pageci&quot;:&quot;65c4c36e-c90d-40c7-8820-bc34f5089a54&quot;}}" data-hscroll-next="{&quot;eventFamily&quot;:&quot;LST&quot;,&quot;eventAction&quot;:&quot;ACTN&quot;,&quot;actionKind&quot;:&quot;HSCROLL&quot;,&quot;operationId&quot;:&quot;2489527&quot;,&quot;flushImmediately&quot;:false,&quot;eventProperty&quot;:{&quot;moduledtl&quot;:&quot;mi:4329|iid:1|scen:topDeals_1&quot;,&quot;parentrq&quot;:&quot;69c7b6d91690add8d19c6220fff904a2&quot;,&quot;pageci&quot;:&quot;65c4c36e-c90d-40c7-8820-bc34f5089a54&quot;}}" data-hscroll="{&quot;eventFamily&quot;:&quot;LST&quot;,&quot;eventAction&quot;:&quot;ACTN&quot;,&quot;actionKind&quot;:&quot;HSCROLL&quot;,&quot;operationId&quot;:&quot;2489527&quot;,&quot;flushImmediately&quot;:false,&quot;eventProperty&quot;:{&quot;moduledtl&quot;:&quot;mi:4329|iid:1|scen:topDeals_1&quot;,&quot;parentrq&quot;:&quot;69c7b6d91690add8d19c6220fff904a2&quot;,&quot;pageci&quot;:&quot;65c4c36e-c90d-40c7-8820-bc34f5089a54&quot;}}">
					<div class="b-carousel__header ">
						<div class="b-carousel__title">
							<h2 class="b-title ">Ofertas por tiempo limitado</h2></div>
		</div>
		<div id="w5-xCarousel" data-w-body="carousel slide">
			<div class="x-carousel noToggleShowBtn" id="w5-xCarousel-x-carousel">
				<p role="status" class="clipped" aria-live="polite" id="w5-xCarousel-x-carousel-status">Diapositiva 1 de 2 - Ofertas por tiempo limitado</p>
		<button class="x-carousel__prev-btn" aria-describedby="w5-xCarousel-x-carousel-status" aria-disabled="true" id="w5-xCarousel-previous" data-w-onclick="handlePrevious|w5-xCarousel">
	<i class="fas fa-angle-left">
					<use xlink:href="#svg-icon-chevron-light-left">
					</use></i>
	<!--svg aria-hidden="true" class="svg-icon" height="16" width="16">
			<use xlink:href="#svg-icon-chevron-light-left"></use></svg-->
			<span class="clipped">Ir a la diapositiva anterior - Ofertas por tiempo limitado</span></button>
	<div class="x-carousel__body no-scroll" id="w5-xCarousel-x-carousel-items">
		<ul class="">
		<li aria-hidden="false">
					<a class="b-tile" href="Articulo-1.php" _sp="p2489527.m4329.l8656">
				<div class="b-tile__imgwrap">
					<div class="b-tile__img">
			<img alt="Nuevo Samsung Galaxy Tab e Lite 7&quot; Quad Core 8GB Rom Wifi Bt Tablet Android Blanco" aria-hidden="true" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/EakAAOSwIApcPRYp/s-l225.webp" width="960" height="1500">
				</div>
			</div>
		<div class="b-info" style="width: inherit;">
		<div class="b-info__title ">Nuevo Samsung Galaxy Tab e Lite 7" Quad Core 8GB Rom Wifi Bt Tablet Android Blanco</div>
			<div class="b-info__price clearfix">
		<span class="default">L 2&nbsp;180.94</span></div>
		<div class="b-info__trenddeals-price">
	<span role="text"><span class="clipped">costaba</span>
			<span class="strikethrough">L 4&nbsp;900.75</span></span> | <strong class="bold">55 % DE DESCUENTO</strong>
				</div>
		</div>
		</a></li>
				<li aria-hidden="false">
			<a class="b-tile" href="Articulo-2.php" _sp="p2489527.m4329.l8656">
			<div class="b-tile__imgwrap">
			<div class="b-tile__img">
						<img alt="Nuevo Microsoft Surface ir con Cubierta Paquete Intel Pentium 128GB SSD Win 10" aria-hidden="true" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/ErwAAOSwgb1cHQUj/s-l225.webp" width="1600" height="1084"></div></div>
				<div class="b-info" style="width: inherit;">
						<div class="b-info__title ">Nuevo Microsoft Surface ir con Cubierta Paquete Intel Pentium 128GB SSD Win 10</div>
			<div class="b-info__price clearfix">
		<span class="default">L 10&nbsp;536.90</span></div>
		<div class="b-info__trenddeals-price">
					<span role="text"><span class="clipped">costaba</span>
			<span class="strikethrough">L 29&nbsp;405.75</span></span> | <strong class="bold">64 % DE DESCUENTO</strong></div>
			</div></a></li>
	<li aria-hidden="false">
	<a class="b-tile" href="Articulo-3.php"  _sp="p2489527.m4329.l8656">
	<div class="b-tile__imgwrap">
		<div class="b-tile__img">
		<img alt="Rosewill THOR V2-W Blanco Edition para juegos ATX caja de la computadora Torre Completa Blanco LED" aria-hidden="true" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/tbUAAOSwkWNZoFWi/s-l225.webp" width="500" height="500"></div>
			</div>
		<div class="b-info" style="width: inherit;">
	<div class="b-info__title ">Rosewill THOR V2-W Blanco Edition para juegos ATX caja de la computadora Torre Completa Blanco LED</div><div class="b-info__price clearfix"><span class="default">L 3&nbsp;896.29</span></div><div class="b-info__trenddeals-price">
		<span role="text">
				<span class="clipped">costaba</span>
	<span class="strikethrough">L 8&nbsp;576.50</span></span> | <strong class="bold">54 % DE DESCUENTO</strong></div>
			</div>
					</a></li>
			<li aria-hidden="false">
			<a class="b-tile" href="Articulo-4.php" _sp="p2489527.m4329.l8656">
		<div class="b-tile__imgwrap">
					<div class="b-tile__img">
					<img alt="Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W" aria-hidden="true" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/E-IAAOSwEupZgkk-/s-l225.webp" width="1600" height="1200"></div>
</div>
		<div class="b-info" style="width: inherit;">
		<div class="b-info__title ">Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W</div>
		<div class="b-info__price clearfix">
		<span class="default">L 2&nbsp;450.25</span></div>
		<div class="b-info__trenddeals-price">
		<span role="text">
			<span class="clipped">costaba</span>
	<span class="strikethrough">L 4&nbsp;165.60</span></span> | <strong class="bold">41 % DE DESCUENTO</strong></div>
			</div>
	</a></li>
		<li aria-hidden="true">
		<a class="b-tile" href="4" _sp="p2489527.m4329.l8656" tabindex="-1">
		<div class="b-tile__imgwrap">
			<div class="b-tile__img">
	<img alt="Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W" aria-hidden="true" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/hH0AAOSwdU1cZEMv/s-l225.webp" width="1600" height="1200"></div>
	</div>
	<div class="b-info" style="width: inherit;">
			<div class="b-info__title ">Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W</div>
		<div class="b-info__price clearfix">
		<span class="default">L 710.40</span></div>
			<div class="b-info__trenddeals-price"><span role="text">
				<span class="clipped">costaba</span>
					<span class="strikethrough">L 1&nbsp;470.05</span></span> | <strong class="bold">51 % DE DESCUENTO</strong>
				</div>
			</div>
		</a>
		</li>
			<li aria-hidden="true">
				<a class="b-tile" href="Articulo-3.php" _sp="p2489527.m4329.l8656" tabindex="-1">
					<div class="b-tile__imgwrap">
						<div class="b-tile__img">
				<img alt="Nueva Dell Latitude 7389 13.3&quot; computadora portátil de 2 en 1 Core i7-7600U 16GB Ram 512GB SSD" aria-hidden="true" class="b-img" itemprop="image" src="https://i.ebayimg.com/thumbs/images/g/GzEAAOSwJ7RcD~AH/s-l225.webp" width="1600" height="1200"></div>
		</div>
			<div class="b-info" style="width: inherit;">
				<div class="b-info__title ">Nueva Dell Latitude 7389 13.3" computadora portátil de 2 en 1 Core i7-7600U 16GB Ram 512GB SSD</div>
		<div class="b-info__price clearfix">
		<span class="default">L 22&nbsp;054.25</span>
		</div>
		<div class="b-info__trenddeals-price">
			<span role="text"><span class="clipped">costaba</span>
		<span class="strikethrough">L 29&nbsp;405.75</span></span> | <strong class="bold">25 % DE DESCUENTO</strong></div></div></a></li><li aria-hidden="true">
			<a class="b-tile" href="Articulo-4.php" _sp="p2489527.m4329.l8656" tabindex="-1">
			<div class="b-tile__imgwrap">
			<div class="b-tile__img">
		<img alt="Fujifilm Instax Share Smartphone Impresora SP-2 +80 películas + batería Extra valor superior" aria-hidden="true" class="b-img" itemprop="image" data-src="#" src="https://i.ebayimg.com/thumbs/images/g/iv0AAOSw0LhcP9H5/s-l225.webp" width="500" height="500"></div>
				</div>
		<div class="b-info" style="width: inherit;">
		<div class="b-info__title ">Fujifilm Instax Share Smartphone Impresora SP-2 +80 películas + batería Extra valor superior</div>
		<div class="b-info__price clearfix"><span class="default">L 4&nbsp;654.72</span></div>
	<div class="b-info__trenddeals-price">
	<span role="text"><span class="clipped">costaba</span>
					<span class="strikethrough">L 6&nbsp;615.12</span></span> | <strong class="bold">29 % DE DESCUENTO</strong></div>
			</div></a>
			</li></ul>
				</div>
			<button class="x-carousel__next-btn" aria-describedby="w5-xCarousel-x-carousel-status" aria-disabled="false" id="w5-xCarousel-next" data-w-onclick="handleNext|w5-xCarousel"><span class="clipped">Ir a la diapositiva siguiente - Ofertas por tiempo limitado</span>
			<i class="fas fa-angle-right"><use xlink:href="#svg-icon-chevron-light-right"></use></i>
	</button>
						</div>
					</div>
									</section>
			</div>
		</div>
	</div>
	<div class="col-md-12 col-xs-12">
			<div class="product">
				<section class="b-module b-carousel b-guidance--text b-display--landscape" id="w6"  >
					<div class="b-carousel__header ">
						<div class="b-carousel__title">
							<h2 class="b-title ">Buscar por Categoría</h2>
						</div>
					</div>
					<div id="w6-xCarousel" data-w-body="x-carousel-items">
						<div class="x-carousel carousel-toggle" id="w6-xCarousel-x-carousel">
							<p role="status" class="clipped" aria-live="polite" id="w6-xCarousel-x-carousel-status">Diapositiva 1 de 3 - Buscar por Categoría</p>
							<button style="margin-top: -13px" class="x-carousel__prev-btn" aria-describedby="w5-xCarousel-x-carousel-status" aria-disabled="true" id="w5-xCarousel-previous" data-w-onclick="handlePrevious|w5-xCarousel">
									<i class="fas fa-angle-left">
													<use xlink:href="#svg-icon-chevron-light-left">
													</use></i>
								<span class="clipped">Ir a la diapositiva anterior - Buscar por Categoría</span>
							</button>
							<div class="x-carousel__body no-scroll" id="w6-xCarousel-x-carousel-items">
								<ul>
									<li aria-hidden="false">
										<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php"  _sp="p2489527.m4549.l8401.c1">
											<p class="b-guidancecard__title">Partes y componentes de computadora</p>
										</a>
									</li>
									<li aria-hidden="false"><a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-2.php"  _sp="p2489527.m4549.l8401.c1">
										<p class="b-guidancecard__title">Laptops y netbooks</p>
									</a>
								</li>
								<li aria-hidden="false">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-2.php"  _sp="p2489527.m4549.l8401.c1">
										<p class="b-guidancecard__title">Accesorios para laptops y computadoras</p>
									</a>
								</li>
								<li aria-hidden="false">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-2.php"  _sp="p2489527.m4549.l8401.c1">
										<p class="b-guidancecard__title">Accesorios para tablets y lectores electrónicos</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-2.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Tablets y lectores electrónicos</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-2.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Tablets y lectores electrónicos</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-4.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Unidades de disco, almacenamiento y discos en blanco</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-4.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Impresoras, escáneres y suministros</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Computadoras y todo en uno</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-4.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Teclados, mouse y punteros</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-4.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Redes y servidores empresariales</p>
									</a>
								</li>
								<li aria-hidden="true">
									<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-10.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
										<p class="b-guidancecard__title">Red y conectividad para residencias</p>
									</a>
								</li>
							</ul>
						</div>
						<button style="margin-top: -13px" class="x-carousel__next-btn" aria-describedby="w6-xCarousel-x-carousel-status" aria-disabled="false" id="xCarousel-next" data-w-onclick="handleNext|w6-xCarousel">
							<span class="clipped">Ir a la diapositiva siguiente - Buscar por Categoría</span>
							<i class="fas fa-angle-right"><use xlink:href="#svg-icon-chevron-light-right"></use></i>
							</svg>
						</button>
					</div>
				</div>
			</section>
			</div>
		</div>
		<div class="col-md-12 col-xs-12">
				<div class="product">
						<section class="b-module b-carousel b-guidance--text b-display--landscape" id="w6"  >
								<div class="b-carousel__header ">
									<div class="b-carousel__title">
										<h2 class="b-title ">Buscar por Band</h2>
									</div>
								</div>
								<div id="w6-xCarousel" data-w-body="x-carousel-items">
									<div class="x-carousel carousel-toggle" id="w6-xCarousel-x-carousel">
										<p role="status" class="clipped" aria-live="polite" id="w6-xCarousel-x-carousel-status">Diapositiva 1 de 3 - Buscar por Categoría</p>
										<button style="margin-top: -13px" class="x-carousel__prev-btn" aria-describedby="w5-xCarousel-x-carousel-status" aria-disabled="true" id="w5-xCarousel-previous" data-w-onclick="handlePrevious|w5-xCarousel">
												<i class="fas fa-angle-left">
																<use xlink:href="#svg-icon-chevron-light-left">
																</use></i>
											<span class="clipped">Ir a la diapositiva anterior - Buscar por Categoría</span>
										</button>
										<div class="x-carousel__body no-scroll" id="w6-xCarousel-x-carousel-items">
											<ul>
												<li aria-hidden="false">
													<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-13.php"  _sp="p2489527.m4549.l8401.c1">
														<p class="b-guidancecard__title">Umbranded</p>
													</a>
												</li>
												<li aria-hidden="false"><a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-1.php"  _sp="p2489527.m4549.l8401.c1">
													<p class="b-guidancecard__title">Apple</p>
												</a>
											</li>
											<li aria-hidden="false">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php"  _sp="p2489527.m4549.l8401.c1">
													<p class="b-guidancecard__title">Dell</p>
												</a>
											</li>
											<li aria-hidden="false">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php"  _sp="p2489527.m4549.l8401.c1">
													<p class="b-guidancecard__title">HP</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">Lenovo</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">Asus</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">Samsung</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">Intel</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">Microsoft</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php"_sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">MSI</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">EVGA</p>
												</a>
											</li>
											<li aria-hidden="true">
												<a class="b-guidancecard__link b-guidancecard__link--noimg" href="Articulo-3.php" _sp="p2489527.m4549.l8401.c1" tabindex="-1">
													<p class="b-guidancecard__title">Cisco</p>
												</a>
											</li>
										</ul>
									</div>
									<button style="margin-top: -13px" class="x-carousel__next-btn" aria-describedby="w6-xCarousel-x-carousel-status" aria-disabled="false" id="w6-xCarousel-next" data-w-onclick="handleNext|w6-xCarousel">
										<span class="clipped">Ir a la diapositiva siguiente - Buscar por Categoría</span>
										<i class="fas fa-angle-right"><use xlink:href="#svg-icon-chevron-light-right"></use></i>
										</svg>
									</button>
								</div>
							</div>
						</section>
				</div>
					</div>
							</div>
						</div>
					</div>
						<!-- /store products -->
					</div>
					<!-- /STORE -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->
		<?php
		include("pie-de-pagina.php");
		?>
		<!-- jQuery Plugins -->
		<script src="js/jquery.min.js"></script>
		<script src="js/sub-categorias.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/slick.min.js"></script>
		<script src="js/nouislider.min.js"></script>
		<script src="js/jquery.zoom.min.js"></script>
		<script src="js/main.js"></script>
		<script src="js/controlador.js"></script>
		<script src="js/controlador2.js"></script>
		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/controlador4.js"></script>		
	</body>
</html>
