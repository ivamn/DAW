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
    require_once __DIR__ . "/" . "Contacto.php";

    $id = $_GET["id"] ?? "";

    if ($id === "") {
        die("No se ha recibido el contacto");
    }

    $agenda = Agenda::getInstance();

    $contacto = $agenda->getContacto($id);

    echo $contacto;

    ?>
</div>
</body>
</html>
