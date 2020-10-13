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

    $id = $_GET["id"];

    $contacto = Agenda::getContacto($id);

    echo $contacto;

    ?>
</div>
</body>
</html>
