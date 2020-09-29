<?php
require "canciones.inc.php";

require "partials/formulario.php";

function filter_data(string $input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

function displaySongs(array $canciones)
{
    $canciones = array_filter($canciones, function ($album) {
        return sizeof($album) !== 0;
    });
    array_map(function ($k, $v) {
        $nombresCanciones = array_map(function ($n) {
            return "{$n[0]} ($n[1])";
        }, $v);
        echo nl2br($k . " => " . implode(" - ", $nombresCanciones) . "\n");
    }, array_keys($canciones), $canciones);
}

function busqueda(array $albums, array $options)
{
    $busqueda = $options["busqueda"];
    $genero = $options["genero"];
    $filtro = $options["filtro"];
    if (strtolower($genero) !== "todos") {
        foreach ($albums as $k => $v) {
            $albums[$k] = array_filter($v, function ($c) use ($genero) {
                $c[1];
                return strtolower($c[1]) === strtolower($genero);
            });
        }
    }

    if (strtolower($filtro) === "titulo") {
        foreach ($albums as $k => $v) {
            $albums[$k] = array_filter($v, function ($c) use ($busqueda) {
                return strripos($c[0], $busqueda) !== false;
            });
        }
    } elseif (strtolower($filtro) === "album") {
        $albums = array_filter($albums, function ($k) use ($busqueda) {
            $xd = strripos($k, $busqueda) !== false;
            return $xd;
        }, ARRAY_FILTER_USE_KEY);
    } else {
        echo "Solo se ha buscado por género" . "<br/>";
    }

    return $albums;
}

$canciones = canciones();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $filtro = $_POST["filtro"];
    $genero = $_POST["genero"];
    $busqueda = $_POST["busqueda"];
    $busqueda = filter_data($busqueda);
    if (!empty($busqueda)) {
        $options = ["filtro" => $filtro, "genero" => $genero, "busqueda" => $busqueda];
        $cancionesEncontradas = busqueda($canciones, $options);
        displaySongs($cancionesEncontradas);
    }

}