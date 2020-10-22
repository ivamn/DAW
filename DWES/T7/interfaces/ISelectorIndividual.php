<?php


interface ISelectorIndividual
{
    public function __construct(string $titulo, string $nombre, array $textos, int $seleccionado);

    public function generaSelector();
}