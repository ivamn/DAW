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
// Muestra la fecha y hora actuales con el formato dd/mm/yyyy hh:mm:ss
echo date("d/m/yy h:m:s");

echo "<br>";

// Muestra el nombre de la zona horaria que se utiliza por defecto.

echo date_default_timezone_get();

echo "<br>";

// Muestra la fecha de dentro de 45 días.

$fechaActual = new DateTime();
$fechaActual->add(new DateInterval('P45D'));
echo $fechaActual->format('d/m/Y H:i:s');

echo "<br>";

// Muestra el número de días que han pasado desde el 1 de enero.
$fechaActual = new DateTime();
echo $fechaActual->diff(new DateTime("2020-01-01"))->format('%a');

echo "<br>";

// Muestra el día de la semana que era el 1 de enero de este año

echo date("l", strtotime("2020/01/01"));

echo "<br>";

?>
</body>
</html>