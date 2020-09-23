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
// A partir de una variable que contenga una url:
// $url = 'http://username:password@hostname:9090/path?arq=value#anchor';
// Utiliza la función parse_url para extraer de la url las
// siguientes partes:
// El protocolo utilizado (en el ejemplo http).
// El nombre de usuario (en el ejemplo username).
// El path de la url (en el ejemplo /path)
// El querystring de la url (en el ejemplo arg=value)

$url = 'http://username:password@hostname:9090/path?arq=value#anchor';

echo parse_url($url, PHP_URL_SCHEME);

echo "<br>";

echo parse_url($url, PHP_URL_USER);

echo "<br>";

echo parse_url($url, PHP_URL_PATH);

echo "<br>";

echo parse_url($url, PHP_URL_QUERY);


?>
</body>
</html>