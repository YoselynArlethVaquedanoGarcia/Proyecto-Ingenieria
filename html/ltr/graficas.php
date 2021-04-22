<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords"
        content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Matrix lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Matrix admin lite design, Matrix admin lite dashboard bootstrap 5 dashboard template">
    <meta name="description"
        content="Matrix Admin Lite Free Version is powerful and clean admin dashboard template, inpired from Bootstrap Framework">
    <meta name="robots" content="noindex,nofollow">
    <title>Graficas | BestWay</title>
   
    <link rel="icon" type="image/png" sizes="16x16" href="../../assets/images/favicon.png">
    <script src="../../assets/libs/jquery/dist/jquery.min.js"></script>
    <link href="../../dist/css/style.min.css" rel="stylesheet">
    <link href="../../assets/libs/flot/css/float-chart.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/dist/chart.min.js"></script>
   
</head>

<body>
   
<div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
   
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
        data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
    
        <header class="topbar" data-navbarbg="skin5">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin5">
                    
                   
                    <a class="navbar-brand" href="../../html/ltr/dashboard.php">
                      
                        <b class="logo-icon ps-2">
                           
                           <h1>BestWay</h1>

                        </b>
                        
                        <span class="logo-text">
                            
                            <img src="../../assets/images/logo-text.png" alt="homepage" class="light-logo" />

                        </span>
                      
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                            class="ti-menu ti-close"></i></a>
                </div>
                
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    
                    <ul class="navbar-nav float-start me-auto">
                        <li class="nav-item d-none d-lg-block"><a
                                class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)"
                                data-sidebartype="mini-sidebar"><i class="mdi mdi-menu font-24"></i></a></li>
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="d-none d-md-block">BestWay <i class="fa fa-angle-down"></i></span>
                                <span class="d-block d-md-none"><i class="fa fa-plus"></i></span>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#"></a></li>
                                <li><a class="dropdown-item" href="#"></a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#"></a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark"
                                href="javascript:void(0)"><i class="ti-search"></i></a>
                            <form class="app-search position-absolute">
                                <input type="text" class="form-control" placeholder="Search &amp; enter"> <a
                                    class="srh-btn"><i class="ti-close"></i></a>
                            </form>
                        </li>
                    </ul>
                    
                    <ul class="navbar-nav float-end">
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="mdi mdi-bell font-24"></i>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#"></a></li>
                                <li><a class="dropdown-item" href="#"></a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#"></a></li>
                            </ul>
                        </li>
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="#" id="2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i class="font-24 mdi mdi-comment-processing"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end mailbox animated bounceInDown" aria-labelledby="2">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="">
                                          
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-success btn-circle"><i
                                                            class="ti-calendar"></i></span>
                                                    <div class="ms-2">
                                                        <h5 class="mb-0"></h5>
                                                        <span class="mail-desc"></span>
                                                    </div>
                                                </div>
                                            </a>
                                          
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-info btn-circle"><i
                                                            class="ti-settings"></i></span>
                                                    <div class="ms-2">
                                                        <h5 class="mb-0"></h5>
                                                        <span class="mail-desc"></span>
                                                    </div>
                                                </div>
                                            </a>
                                            
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-primary btn-circle"><i
                                                            class="ti-user"></i></span>
                                                    <div class="ms-2">
                                                        <h5 class="mb-0"></h5>
                                                        <span class="mail-desc"><span>
                                                    </div>
                                                </div>
                                            </a>
                                          
                                            <a href="javascript:void(0)" class="link border-top">
                                                <div class="d-flex no-block align-items-center p-10">
                                                    <span class="btn btn-danger btn-circle"><i
                                                            class="fa fa-link"></i></span>
                                                    <div class="ms-2">
                                                        <h5 class="mb-0"></h5>
                                                        <span class="mail-desc"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                       
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31">
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user me-1 ms-1"></i>
                                    Mi Perfil</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet me-1 ms-1"></i>
                                  </a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email me-1 ms-1"></i>
                                   </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i
                                        class="ti-settings me-1 ms-1"></i> </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i
                                        class="fa fa-power-off me-1 ms-1"></i> </a>
                                <div class="dropdown-divider"></div>
                                <div class="ps-4 p-10"><a href="javascript:void(0)"
                                        class="btn btn-sm btn-success btn-rounded text-white"></a></div>
                            </ul>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </header>
      
        <aside class="left-sidebar" data-sidebarbg="skin5">
        
            <div class="scroll-sidebar">
              
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="pt-4">

                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="../../html/ltr/dashboard.php" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Dashboard</span></a></li>

                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="graficas.php" aria-expanded="false"><i class="mdi mdi-chart-bar"></i><span class="hide-menu">Graficas</span></a></li>

                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="widgets.html" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Suscripciones</span></a></li>

                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="../../containers/RegistroCategorias.php" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu"> Gestionar Categorias</span></a>
                        
                    </li>

                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="../../containers/categorias.php" aria-expanded="false"><i class="mdi mdi-blur-linear"></i><span class="hide-menu">Filtros</span></a> </li>

                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"  href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Formularios </span></a><ul aria-expanded="false" class="collapse  first-level"><li class="sidebar-item"><a href="../../containers/registro.php" class="sidebar-link"><i class="mdi mdi-note-outline"></i><span class="hide-menu"> Formulario Registro
                                        </span></a></li>
                        <li class="sidebar-item"><a href="../../containers/registroProducto.php" class="sidebar-link"><i
                        class="mdi mdi-note-plus"></i><span class="hide-menu"> Formulario Producto</span></a></li>
                        <li class="sidebar-item"><a href="../../config/agregarCategoria.php" class="sidebar-link"><i
                        class="mdi mdi-note-plus"></i><span class="hide-menu"> Formulario Agregar Categoria</span></a></li>
                      
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="../../html/ltr/darDeBaja.php" aria-expanded="false"><i
                                    class="mdi mdi-relative-scale"></i><span class="hide-menu">Denuncias</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"
                                href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-face"></i><span
                                    class="hide-menu">Usuarios </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="usuario.php" class="sidebar-link"><i
                                            class="mdi mdi-emoticon"></i><span class="hide-menu"> 
                                        </span>Dar de Baja</a></li>
                                
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link"
                                href="pages-elements.html" aria-expanded="false"><i class="mdi mdi-pencil"></i><span
                                    class="hide-menu">Elementos</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"
                                href="javascript:void(0)" aria-expanded="false"><i
                                    class="mdi mdi-move-resize-variant"></i><span class="hide-menu">Configuraciones </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="galeria.php" class="sidebar-link"><i
                                            class="mdi mdi-view-dashboard"></i><span class="hide-menu">
                                            Galeria
                                        </span></a></li>
                                <li class="sidebar-item"><a href="../../config/periodoServicios.php" class="sidebar-link"><i
                                            class="mdi mdi-multiplication-box"></i><span class="hide-menu"> Servicios
                                        </span></a></li>
                                <li class="sidebar-item"><a href="pages-calendar.html" class="sidebar-link"><i
                                            class="mdi mdi-calendar-check"></i><span class="hide-menu">Calendario
                                        </span></a></li>
                                <li class="sidebar-item"><a href="../../config/periodoProductos.php" class="sidebar-link"><i
                                            class="mdi mdi-bulletin-board"></i><span class="hide-menu">
                                            Productos
                                        </span></a></li>
                               
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark"
                                href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-account-key"></i><span
                                    class="hide-menu">Autenticación </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="../../containers/login.php"  class="sidebar-link"><i
                                            class="mdi mdi-all-inclusive"></i><span class="hide-menu"> Login </span></a>
                                </li>
                                <li class="sidebar-item"><a href="../../containers/registro.php" class="sidebar-link"><i
                                            class="mdi mdi-all-inclusive"></i><span class="hide-menu"> Registro
                                        </span></a></li>
                            </ul>
                        </li>
                       
                    </ul>
                </nav>
                
            </div>
           
        </aside>
       
        <div class="page-wrapper">
         
            <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-12 d-flex no-block align-items-center">
                        <h4 class="page-title">Graficas</h4>
                        <div class="ms-auto text-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">BestWay</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="container-fluid">
              
                <div class="row">
                    <div class="col-md-12">
                        <div class="card" >
                            <div class="card-body" >
                                <h5 class="card-title">Grafica de Barras &nbsp; <button type="button" class="btn btn-primary" onclick='graficoLineal()'>Ver</button></h5>
                                <h5 class="card-subtitle">Productos por Categoria </h5>
                                <canvas id="lineal" width="400" style="height:200px;" ></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    function graficoLineal() {
                $.ajax({
                    url:'grafico2.php',
                    type:'POST'
                }).done(function(resp) {
                    var titulo=[];
                    var cantidad=[];
                    var data= JSON.parse(resp);
                
                    for(var i=0;i<data.length;i++){
                    titulo.push(data[i][0]);
                    cantidad.push(data[i][1]);
            
                    }
                var ctx = document.getElementById('lineal');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {labels: titulo,
            datasets: [{
                label: 'Productos',
                data: cantidad,
                fill: false,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(52, 73, 94)',
                    'rgb(46, 204, 113 )',
                    'rgb(231, 76, 60)',
                    'rgb(220, 20, 60)'],
                borderColor: 'rgb(75, 192, 192)',
                 tension: 0.1
            }]
        }
    });
    })
}

                </script>
               
                <div class="row" >
                    <div class="col-md-12">
                        <div class="card" >
                            <div class="card-body" >
                                <h5 class="card-title">Grafico Circular &nbsp; <button type="button" class="btn btn-primary" onclick='graficoCircular()'>Ver</button></h5>
                                <h5 class="card-subtitle">Productos por Departamento</h5>
                              
                                <canvas class="flot-chart-content" id="circular" width="400" style="height:200px"></canvas>
                           
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    function graficoCircular() {
                $.ajax({
                    url:'grafico3.php',
                    type:'POST'
                }).done(function(resp) {
                    var titulo=[];
                    var cantidad=[];
                    var data= JSON.parse(resp);
                
                    for(var i=0;i<data.length;i++){
                    titulo.push(data[i][0]);
                    cantidad.push(data[i][1]);
            
                    }
                var ctx = document.getElementById('circular');
                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                    labels: titulo,
                    datasets: [{
                        label: 'Productos',
                        data: cantidad,
                        backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(52, 73, 94)',
                    'rgb(46, 204, 113 )',
                    'rgb(231, 76, 60)',
                    'rgb(220, 20, 60)',
                    'rgb(160, 82, 45)',
                    'rgb(0, 128, 128)',
                    'rgb(255,140,0)',
                    'rgb(0,255,127)',
                    'rgb(139,0,139)',
                    'rgb(0,206,209)'
                    ],
                    hoverOffset: 4
                    }]
                }
            });
                })
            }
                </script>
                <div class="row">
                   
                    <div class="col-md-3">
                        <div class="card mt-0">
                            <div class="row">
                                <div class="col-md-6">
                                    
                                </div>
                             
                            </div>
                        </div>
                    </div>
                   
               
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Grafico Polar &nbsp; <button type="button" class="btn btn-primary" onclick='graficoPolar()'>Ver</button></h5>
                                <h5 class="card-subtitle">Productos por Estado </h5>
                                <canvas class="flot-chart-content" id="polar" height='200px' ></canvas>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    function graficoPolar() {
                $.ajax({
                    url:'grafico4.php',
                    type:'POST'
                }).done(function(resp) {
                    var titulo=[];
                    var cantidad=[];
                   
                    var data= JSON.parse(resp);
                   
                    for(var i=0;i<data.length;i++){
                    titulo.push(data[i][0]);
                    cantidad.push(data[i][1]);
                
                }
                var ctx = document.getElementById('polar');
                var myChart = new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                    labels: titulo,
                    datasets: [{
                        label: 'Productos',
                        data: cantidad,
                        backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    ],
                    hoverOffset: 4
                }]
                }
            });
                })
            }  
            </script>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Pie Chart</h5>
                                <div class="pie" style="height: 400px;"></div>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Line Chart  </h5>
                                <div class="bars" style="height: 400px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          
            <footer class="footer text-center">
                All Rights Reserved by Matrix-admin. Designed and Developed by <a
                    href="https://www.wrappixel.com">WrapPixel</a>.
            </footer>
           
        </div>
        
    </div>
    
    <script src="../../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  
    <script src="../../assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
   
    <script src="../../dist/js/waves.js"></script>
    
    <script src="../../dist/js/sidebarmenu.js"></script>
  
    <script src="../../dist/js/custom.min.js"></script>
  
   
   
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/adapters.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/animation.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/basic.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/color.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/element.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/geometric.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/index.esm.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/layout.d.ts"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.1.1/types/utils.d.ts"></script>
</body>

</html>