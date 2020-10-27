<?php


class Connection
{
    public static function make(): PDO
    {
        $opciones = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_PERSISTENT => true
        );
        try {
            $pdo = new PDO(
                'mysql:host=local;dbname=galeria;charset=utf8',
                'userGaleria',
                'dwes',
                $opciones);
            return $pdo;
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}