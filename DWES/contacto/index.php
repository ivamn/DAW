<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Desarrollo web en entorno servidor</title>
    <meta name="description" content="PHP, PHPStorm">
    <meta name="author" content="Iván Daniel Gallego Torres">
</head>
<body>
<?php
require "Contacto.php";
$contacto = new Contacto(7, "Iván Daniel Gallego Torres", "648987515", new DateTime(), "foto.jpg");
echo $contacto->__toString();
?>
</body>
</html>
