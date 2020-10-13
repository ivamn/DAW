<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Desarrollo web en entorno servidor</title>
    <meta name="description" content="PHP, PHPStorm">
    <meta name="author" content="Iván Daniel Gallego Torres">
</head>
<body>
<div>
<?php
require "Agenda.inc.php";
require "Contacto.php";

$c1 = new Contacto(1, "Iván", "123456789", new DateTime(), "1.jpg");
$c2 = new Contacto(2, "Daniel", "123456789", new DateTime(), "1.jpg");
$c3 = new Contacto(3, "Gallego", "123456789", new DateTime(), "1.jpg");

$agenda = new Agenda();
Agenda::addContacto($c1);
Agenda::addContacto($c2);
Agenda::addContacto($c3);
echo $agenda;

echo "<br/>";

Agenda::deleteContacto($c1);
$c4 = clone $c2;
Agenda::addContacto($c4);

echo $agenda;
?>
</div>
</body>
</html>
