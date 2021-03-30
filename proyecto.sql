-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `Tipocategoria` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Hogar'),(2,'Electronica'),(3,'Futuros Padres'),(4,'Vehiculos'),(5,'Negocios'),(6,'Servicios'),(7,'Inmuebles'),(8,'Empleo'),(9,'Moda');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `idDepartamento` int NOT NULL AUTO_INCREMENT,
  `Departamento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'Francisco Morazan'),(2,'Comayagua'),(3,'Choluteca'),(4,'El Paraiso'),(5,'Lempira'),(6,'Olancho'),(8,'Valle'),(9,'Gracias a Dios'),(10,'Colon'),(11,'Atlantida'),(12,'Santa Barbara'),(13,'Cortes'),(14,'Yoro'),(15,'Islas de la Bahia'),(16,'Intibuca'),(17,'Copan'),(18,'Ocotepeque');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado` (
  `idEstado` int NOT NULL AUTO_INCREMENT,
  `Estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEstado`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'Nuevo'),(2,'Usado'),(3,'No Aplica');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagen` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Imagen` longblob,
  `Producto_idProducto` int NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `fk_Imagen_Producto1_idx` (`Producto_idProducto`),
  CONSTRAINT `fk_Imagen_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipio`
--

DROP TABLE IF EXISTS `municipio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipio` (
  `idMunicipio` int NOT NULL AUTO_INCREMENT,
  `municipio` varchar(45) DEFAULT NULL,
  `Departamento_idDepartamento` int NOT NULL,
  PRIMARY KEY (`idMunicipio`),
  KEY `fk_Municipio_Departamento1_idx` (`Departamento_idDepartamento`),
  CONSTRAINT `fk_Municipio_Departamento1` FOREIGN KEY (`Departamento_idDepartamento`) REFERENCES `departamento` (`idDepartamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipio`
--

LOCK TABLES `municipio` WRITE;
/*!40000 ALTER TABLE `municipio` DISABLE KEYS */;
/*!40000 ALTER TABLE `municipio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `Nombre_Prod` varchar(100) DEFAULT NULL,
  `Precio` int DEFAULT NULL,
  `Descripcion` varchar(1000) DEFAULT NULL,
  `imagen_Prod` varchar(45) DEFAULT NULL,
  `Estado_idEstado` varchar(45) NOT NULL,
  `Categoria_idCategoria` int NOT NULL,
  `Departamento_idDepartamento` int NOT NULL,
  `imagen_Prod1` blob,
  `imagen_Prod2` blob,
  `imagen_Prod3` blob,
  PRIMARY KEY (`idProducto`),
  KEY `fk_Producto_Estado1_idx` (`Estado_idEstado`),
  KEY `fk_Producto_Categoria1_idx` (`Categoria_idCategoria`),
  KEY `fk_Producto_Departamento1_idx` (`Departamento_idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2100177587 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (29376364,'Pantalón jegging high waist',445,'Talla del modelo: 36  Altura del modelo: 171 cm  Color: Blanco','pantalon3.jpg','1',9,1,'','',''),(47366213,'Camisa manga corta rayas',345,'Talla del modelo: L  Altura del modelo: 186 cm  Color: Marino  Care for fiber: 100% ECOVERO™ Viscose. Esta viscosa se obtiene a partir de madera de bosques gestionados de forma más sostenible donde los árboles se cultivan de forma controlada y con programas que garantizan su reforestación. Además, está certificada por la EU Ecolabel por cumplir exigentes estándares medioambientales en su proceso productivo.','camisahombre3.jpg','2',9,9,'','',''),(56278571,'Casas Res San Ignacio',13849410,'La vivienda tiene las siguientes características fisicas: Paredes de ladrillo rafon, repelladas, pulidas y pintadas, techo de viga vista con cubierta de lamina y teja decorativa , losa de entrepio solida acabado artesanal antiguo, piso de ceramica rustica, mueble de cocina superior e inferior de madera de color, paredes interiores de madera de color, paredes exteriores de madera de color con decoraciones metálicas , ventanas de vidrio con marcos de madera , detalles en algunas ventanas de vitral decorativo , pasamanos metalicos , Instalaciones electricas completas bajo repello, e instalaciones Hidrosanitarias completas.','casa24.jpg','1',7,1,'','',''),(399774425,'Suzuki Ciaz',299305,'Sobre la base mecánica del anterior Swift, se construye este sedán impulsado por el conocido cuatro cilindros de 1.5 litros, el cual se acopla a una caja automática de cuatro velocidades o manual de cinco relaciones. Con 4,490 mm de largo, anuncia una capacidad de cajuela de 496 Litros. Rivaliza en el segmento de los sedanes subcompactos.','suzukiCiaz.jpg','2',4,4,NULL,NULL,NULL),(542183993,'Mercedes Clase GLC',890000,'En el pasado, esta SUV fue conocida bajo la denominación GLK, pero con el cambio generacional adquiere la actual denominación GLC, que evidencia su parentesco con el Clase C. Bajo el cofre se encuentra el difundido cuatro cilindros turbo de 2.0 Litros, así como un V6 Biturbo de 3.0 Litros que da vida a la AMG 43. La caja es automática de 9 velocidades. Debido a que también se dispone de una versión Coupé, encuentra en las BMW X3 y X4 a sus principales y frontales antagonistas, con quienes libra una lucha a muerte.','glc.jpg','2',4,13,NULL,NULL,NULL),(608629547,'Samsung Galaxy A31 Azul RAM 4GB',4500,'Con cuatro cámaras traseras y una pantalla enorme, el teléfono inteligente Galaxy A31 A315G Dual-SIM GB de Samsung le brinda opciones de entretenimiento versátiles y de alta calidad','samsungA31.jpg','2',2,14,NULL,NULL,NULL),(830697971,'Sudadera print',425,'Color: Gris  Care for fiber: al menos 15% algodón reciclado. La producción de esta fibra recupera residuo de algodón, principalmente de la producción de otras prendas de algodón, reduciendo así la producción de materia prima virgen y el consumo de agua, energía y recursos naturales.','sudadera3.jpg','2',9,11,'','',''),(877553375,'Escalera 3 Niveles',999,'Organiza muchos productos en tu hogar, haciendo uso de esta práctica y útil escalera.','escalera.jpg','2',1,2,NULL,NULL,NULL),(905604893,'Camisa popelín oversize',345,'Talla del modelo: S .Altura del modelo: 169 cm .Color: Azul oscuro.Care for fiber: 100% algodón orgánico. Algodón cultivado utilizando fertilizantes y pesticidas naturales. Además, en su cultivo no se utilizan semillas modificadas genéticamente, lo que ayuda a conservar la biodiversidad de las semillas y la fertilidad del suelo.','camisa3.jpg','2',9,2,'','',''),(917699416,'AUDI A4 Sline 2007',565726,'La quinta generación del A4 pudiera lucir muy similar a su antecesora, pero en realidad es un producto completamente diferente. Archirrival de Mercedes-Benz Clase C y BMW Serie 3, este sedán de 4,726 mm de largo, con 480 L de capacidad de cajuela, cuenta con un motor de cuatro cilindros de 2.0 Litros TFSI con tecnología de hibridación ligera que se combina con una caja automática S-Tronic de 7 velocidades, mientras la tracción es frontal o quattro (integral).','audiA4.jpg','2',4,1,NULL,NULL,NULL),(928110483,'Smart TV RCA LED 43\"',8995,'Resolución Pantalla (Pixeles) - 1366 x 768 pixeles','tv.jpg','1',2,1,NULL,NULL,NULL),(1028673900,'Smartwatch Huawei Watch Fit Negro',2000,'Con una magnífica pantalla AMOLED rectangular de 1,64 pulgadas y una resolución HD de 280 x 456, 2 HUAWEI WATCH FIT ofrece una experiencia de visualización amplia y ultra clara. El ajuste de brillo automático ofrece una mejor visualización a la luz del sol, mientras que las seis esferas del reloj Always-On3 le permiten expresar su estilo y estado de ánimo personal en un día determinado','smartwatch.jpg','2',2,18,NULL,NULL,NULL),(1077648577,'Volkswagen T-Cross',444610,'Importada desde Brasil, la T-Cross se monta sobre la arquitectura MQB A0, que es compartida con Virtus. Uno de sus puntos fuertes es su gran habitabilidad y una generosa zona de carga de 420 litros. Bajo el cofre se encuentra el conocido 1.6 L MSI que puede hacer mancuerna con una caja manual o automática Tiptronic. En las pruebas de impacto de Latin-NCAP obtuvo una calificación de cinco estrellas.','T-Cross.jpg','1',4,4,NULL,NULL,NULL),(1095439284,'Casa Res.Gualiqueme',8701200,'asa de 4 habitaciones ubicada frente a carretera panamericana ubicada dentro de increíble terreno de mas de 8000v2.  Área de terreno: 8,000v2 Área de construcción: 266.50 m2  Es de un nivel con fácil acceso a la vías de circulación que van al centro y fuera de la ciudad, Con los servicios públicos de energía, agua de pozo, alumbrado publico, tren de aseo, fosa séptica.  Caseta de vigilancia, acceso vehicular empedrado, porch techado, acceso techado, estacionamiento techado, lavanderia techada, dormitorio de servicio con su baño completo, bodega, terraza techada, pasillos de circulación abierto, sala de estar, comedor, cocina, desayunador, dormitorio de visitas con su baño completo, dos (2) dormitorios con su baño completo, dormitorio principal con su baño completo y walking closet, bodega aislada con un (l) medio baño.','casa12.jpg','1',7,3,'','',''),(1127614873,'Ford Edge',789900,'Respuesta directa a modelos como Nissan Murano, Hyundai Santa Fe y Jeep Cherokee, la Edge se presenta como una SUV/Crossover mediana con un perfil no del todo familiar, ya que solo cuenta con una capacidad de cinco pasajeros. De hecho, su vocación deportiva queda claro con la variante Sport que es impulsada por un V6 de 2.7L Turbo EcoBoost con 315 caballos. Las versiones más comunes, recurren a un más eficiente cuatro cilindros de 2.0 Litros turbocargado con 245 caballos de fuerza. Como sea, la transmisión siempre es una automática de seis velocidades con paletas de cambio al volante.','edge.jpg','1',4,15,NULL,NULL,NULL),(1162658036,'Casa en Condominio,Lomas del Guijarro',7371850,'Circuito Cerrado de 8 townhouses y área de juegos común • 3 niveles, 3 habitaciones, 2.5 baños, sala de tv • Habitacion principal con walk-in closet y baño propio. • Sala Comedor, cocina abierta con isla y top de cuarzo, • Guest/Game Room con baño completo apto para home office • Terraza amplia con área para barbacoa con medio baño • Cuarto de empleada, bodega y lavanderia • 2 estacionamientos • Todos los baños con griferia de lujo, • Excelente iluminación y ventilación natural en toda la casa.','casa4.jpg','1',7,0,'','',''),(1206762452,'Casa Vacacional La Ensenada',8942900,'Linda casa vacacional con vista hacia la playa. Ubicada en La Ensenada en Tela.  La casa consta de dos pisos. En su primera planta tiene comedor, cocina, 2 salas, porsche, cuarto de empleada y estacionamiento. En el segundo nivel consta de 4 habitaciones, 3 baños completos, sala familiar y terraza','casa20.jpg','2',7,11,'','',''),(1209257036,'Audifonos de Diadema On Ear Sony',395,'Los controladores de neodimio dinámicos proporcionan un sonido preciso  Gracias a las ligeras unidades de diafragma de neodimio dinámico de 30 mm, los auriculares ofrecen una respuesta potente y rítmica incluso con las pistas más exigentes. Combínalas con  El diseño plegable giratorio te permite viajar con facilidad  Llévate estos auriculares contigo donde vayas. El diseño giratorio de los auriculares te permite guardarlos de manera correcta.','audifonos.jpg','1',2,8,NULL,NULL,NULL),(1298391439,'Casa Col. La Campaña',2417000,'Amplia casa ubicada en Circuito Cerrado Consta de 2 niveles 2ndo nivel: habitación principal, con su baño privado, su sala pequeña y terraza, además acceso independiente. Habitaciones secundarias amplias que comparten baño. Otra secundaria con pequeña terraza y closet, tiene su baño afuera de la habitación. 1er nivel: sala, comedor, cocina, estudio, cuarto de empleada, área social y jardín. Estacionamiento para 1 vehículo y bodega pequeña La casa esta en circuito cerrado por lo cual pueden dejar vehículos afuera.','casa8.jpg','2',7,1,'','',''),(1531951138,'Laptop Dell Inspiron 15\" Intel Core i3',16500,'Laptop de 15 pulgadas que ofrece un rendimiento con capacidad de respuesta en un diseño elegante con bordes angostos de dos lados, ExpressCharge, y procesadores Intel Core.Cap. Disco Duro (5400 RPM) GB - 1 TB','LaptopDell.jpg','1',2,15,NULL,NULL,NULL),(1607775862,'Vestido denim cut out',1095,'Color: Azul claro  Care for fiber: al menos 15% algodón reciclado. La producción de esta fibra recupera residuo de algodón, principalmente de la producción de otras prendas de algodón, reduciendo así la producción de materia prima virgen y el consumo de agua, energía y recursos naturales.','vestido3.jpg','1',9,3,'','',''),(1680274885,'Jeans patchwork pastel two-tone',1095,'Talla del modelo: 40  Altura del modelo: 185 cm  Color: Beige  Care for fiber: al menos 50% algodón orgánico. Algodón cultivado utilizando fertilizantes y pesticidas naturales. Además, en su cultivo no se utilizan semillas modificadas genéticamente, lo que ayuda a conservar la biodiversidad de las semillas y la fertilidad del suelo.','jean3.jpg','1',9,5,'','',''),(1698709347,'Bermuda jogger felpa multicargo',845,'Talla del modelo: L  Altura del modelo: 186 cm  Color: Negro','bermuda3.jpg','1',9,16,'','',''),(1713603207,'Falda mini denim contraste',245,'Talla del modelo: 36 .Altura del modelo: 180 cm.Color: Azul claro  Care for fiber: al menos 50% algodón orgánico. Algodón cultivado utilizando fertilizantes y pesticidas naturales. Además, en su cultivo no se utilizan semillas modificadas genéticamente, lo que ayuda a conservar la biodiversidad de las semillas y la fertilidad del suelo.','falda3.jpg','2',9,4,'','',''),(1745896938,'Parlante Portatil JBL Charge 4 ',2500,'Sincroniza de forma inalámbrica hasta 2 celulares o tabletas a la bocina bluetooth JBL Charge 4. Lleva la bocina Charge 4 a fiestas en piscina o la playa y no te preocupes por salpicaduras, su certificación IPX7 la hace incluso sumergible.','parlante.jpg','2',2,5,NULL,NULL,NULL),(1842202489,'Impresora HP DeskJet ',600,'Facilite su impresión, escaneado y copiado cotidiano con una impresora todo-en-uno HP DeskJet que simplemente funciona de inmediato. Ahorre dinero con los cartuchos de tinta más económicos de HP. Además, ahorre espacio con una impresora todo-en-uno.','impresoraHP.jpg','2',2,6,NULL,NULL,NULL),(1961978699,'Casa Res. Manantial',7251000,'Casa de Esquina de dos plantas, construida en niveles con piso de cerámica de buena calidad, paredes de bloque, de ladrillo y de piedra, algunas paredes con acabados y enchapes de piedra. El techo es de teja colonial con estructura de canaleta metálica e lámina de panelit, entrepiso de canaleta, concreto y lámina de aluzinc; ventanas y puertas de vidrio, madera y alumínio; toda la construcción presente detalles y acabados de buena calidad. Tiene una sala grande, cocina, comedor, sala de juegos, garaje, bodega, 5 habitaciones tipo “Suite” con sus respectivos baños, habitación principal con baño amplio e jacuzzi, un medio baño para visitas, chimenea, corredores y terrazas, candelabros todos de la misma familia importados (Home Depot), calentador de agua central.','casa16.jpg','2',7,2,'','',''),(2014043122,'Servicios de Reparacion',500,'Reparacion de Celulares.No incluye Costos adicionales.','reparacion.jpg','3',6,4,NULL,NULL,NULL),(2059976625,'Honda City',359091,'La quinta generación del Honda City ahora nos llega de la India (no de China), posee una apariencia distinta, con mejor equipamiento de confort y de seguridad. Ofrece un nuevo diseño bastante conservador, pero que no deja de ser atractivo, pues luce como si fuera un pequeño Civic Por el diseño es igual de conservador que el del exterior, pero conserva la calidad de la marca. Bajo el cofre no hay novedades, emplea el mismo bloque del modelo anterior.','hondaCity.jpg','1',4,2,NULL,NULL,NULL),(2084625924,'Volkswagen T-Cross',444610,'Importada desde Brasil, la T-Cross se monta sobre la arquitectura MQB A0, que es compartida con Virtus. Uno de sus puntos fuertes es su gran habitabilidad y una generosa zona de carga de 420 litros. Bajo el cofre se encuentra el conocido 1.6 L MSI que puede hacer mancuerna con una caja manual o automática Tiptronic. En las pruebas de impacto de Latin-NCAP obtuvo una calificación de cinco estrellas.','','1',4,4,NULL,NULL,NULL),(2091193867,'Pantalón jegging high waist',445,'Talla del modelo: 36 .Altura del modelo: 171 cm .Color: Blanco','pantalon3.jpg','1',9,1,NULL,NULL,NULL),(2092270687,'Samsung Galaxy Tab A8 Negra',3500,'Una Tablet que va a dónde vayas gracias a su tamaño y diseño compacto, con 8\" tendrás un tamaño ideal para tu día a día. Además tienes más espacio, gracias a la eliminación de la tecla frontal para tener más espacio y mayor oportunidad de trabajar más sobre la pantalla de esta Tablet.','Tablet.jpg','2',2,12,NULL,NULL,NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexo` (
  `idSexo` int NOT NULL,
  `Sexo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idSexo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suscripcion`
--

DROP TABLE IF EXISTS `suscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suscripcion` (
  `idSuscripcion` int NOT NULL AUTO_INCREMENT,
  `Suscripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idSuscripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suscripcion`
--

LOCK TABLES `suscripcion` WRITE;
/*!40000 ALTER TABLE `suscripcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `suscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Correo` varchar(45) NOT NULL,
  `Telefono` varchar(45) NOT NULL,
  `Direccion` tinytext NOT NULL,
  `Genero` varchar(45) NOT NULL,
  `Contraseña` varchar(45) NOT NULL,
  `Imagen` longblob,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1901400233 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (698550699,'Melisa Alvarado','melialvarado@outlook.com','98654321','Col Carrizal','femenino','meli2021',''),(1226886693,'Maria','maria22@gmail.com','90234576','Villanueva','femenino','mar78',_binary 'garden-19830_1920.jpg'),(1283205551,'Marta Lopez','lopezma@gmail.com','91234576','Col Nueva Suyapa','femenino','maria2021',_binary 'garden-19830_1920.jpg'),(1881926058,'Maria','maria22@gmail.com','90234576','Villanueva','femenino','mar78',_binary 'garden-19830_1920.jpg'),(1901400232,'Pablo','pablo23@yahoo.com','98765432','Col Villanueva','masculino','pablo21',_binary 'beautiful-flowers-1853562_1280.jpg');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_producto`
--

DROP TABLE IF EXISTS `usuario_has_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_has_producto` (
  `Usuario_idUsuario` int NOT NULL,
  `Producto_idProducto` int NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`,`Producto_idProducto`),
  KEY `fk_Usuario_has_Producto_Producto1_idx` (`Producto_idProducto`),
  KEY `fk_Usuario_has_Producto_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Usuario_has_Producto_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `fk_Usuario_has_Producto_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_producto`
--

LOCK TABLES `usuario_has_producto` WRITE;
/*!40000 ALTER TABLE `usuario_has_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_has_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_suscripcion`
--

DROP TABLE IF EXISTS `usuario_has_suscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_has_suscripcion` (
  `Usuario_idUsuario` int NOT NULL,
  `Suscripcion_idSuscripcion` int NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`,`Suscripcion_idSuscripcion`),
  KEY `fk_Usuario_has_Suscripcion_Suscripcion1_idx` (`Suscripcion_idSuscripcion`),
  KEY `fk_Usuario_has_Suscripcion_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_Usuario_has_Suscripcion_Suscripcion1` FOREIGN KEY (`Suscripcion_idSuscripcion`) REFERENCES `suscripcion` (`idSuscripcion`),
  CONSTRAINT `fk_Usuario_has_Suscripcion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_suscripcion`
--

LOCK TABLES `usuario_has_suscripcion` WRITE;
/*!40000 ALTER TABLE `usuario_has_suscripcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_has_suscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendedor_has_producto`
--

DROP TABLE IF EXISTS `vendedor_has_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendedor_has_producto` (
  `Vendedor_idVendedor` int NOT NULL,
  `Producto_idProducto` int NOT NULL,
  PRIMARY KEY (`Vendedor_idVendedor`,`Producto_idProducto`),
  KEY `fk_Vendedor_has_Producto_Producto1_idx` (`Producto_idProducto`),
  KEY `fk_Vendedor_has_Producto_Vendedor_idx` (`Vendedor_idVendedor`),
  CONSTRAINT `fk_Vendedor_has_Producto_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `fk_Vendedor_has_Producto_Vendedor` FOREIGN KEY (`Vendedor_idVendedor`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendedor_has_producto`
--

LOCK TABLES `vendedor_has_producto` WRITE;
/*!40000 ALTER TABLE `vendedor_has_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendedor_has_producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-30 17:52:16
