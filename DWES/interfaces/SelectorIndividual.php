<?php


abstract class SelectorIndividual implements ISelectorIndividual
{
    private string $titulo;
    private string $nombre;
    private array $textos;
    private int $seleccionado;

    public function __construct(string $titulo, string $nombre, array $textos, int $seleccionado)
    {
        $this->titulo = $titulo;
        $this->nombre = $nombre;
        $this->textos = $textos;
        $this->seleccionado = $seleccionado;
    }

    public abstract function generaSelector();

    /**
     * @return string
     */
    public function getTitulo(): string
    {
        return $this->titulo;
    }

    /**
     * @param string $titulo
     */
    public function setTitulo(string $titulo): void
    {
        $this->titulo = $titulo;
    }

    /**
     * @return string
     */
    public function getNombre(): string
    {
        return $this->nombre;
    }

    /**
     * @param string $nombre
     */
    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    /**
     * @return array
     */
    public function getTextos(): array
    {
        return $this->textos;
    }

    /**
     * @param array $textos
     */
    public function setTextos(array $textos): void
    {
        $this->textos = $textos;
    }

    /**
     * @return int
     */
    public function getSeleccionado(): int
    {
        return $this->seleccionado;
    }

    /**
     * @param int $seleccionado
     */
    public function setSeleccionado(int $seleccionado): void
    {
        $this->seleccionado = $seleccionado;
    }


}