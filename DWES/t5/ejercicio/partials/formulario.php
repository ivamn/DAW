<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Desarrollo web en entorno servidor</title>
    <meta name="description" content="PHP, PHPStorm">
    <meta name="author" content="Iván Daniel Gallego Torres">
    <style>
        div p {
            display: inline-block;
        }

        input[type=submit] {
            margin: 16px;
        }
    </style>
</head>
<body>
<h1>Búsqueda de canciones</h1>
<form method="post" action="<?php $_SERVER["PHP_SELF"] ?>">
    <div>
        <label for="busqueda">Texto a buscar</label>
        <input type="text" name="busqueda"/>
    </div>
    <div>
        <p>Buscar en: </p>
        <input type="radio" name="filtro" value="titulo">Titulos de canción</input>
        <input type="radio" name="filtro" value="album">Álbum</input>
        <input type="radio" name="filtro" value="ambos" checked>Ambos</input>
    </div>
    <div>
        <label for="genero">Género musical: </label>
        <select name="genero">
            <option selected>Todos</option>
            <option>Blues</option>
            <option>Pop</option>
            <option>Jazz</option>
            <option>Rock</option>
        </select>
    </div>
    <input type="submit" name="buscar" value="Buscar"/>
</form>
</body>
</html>