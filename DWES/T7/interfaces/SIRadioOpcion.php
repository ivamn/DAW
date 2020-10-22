<?php


class SIRadioOpcion extends SelectorIndividual
{

    public function generaSelector() : string
    {
        $res = "";

        foreach ($this->getTextos() as $value => $texto):
            $selected = $this->getSeleccionado() >= 0 && $value === $this->getSeleccionado() ? "checked" : "";
            $res = $res . "<input type=\"radio\" id=\"{$value}\" name=\"{$this->getNombre()}\" value=\"{$value}\" {$selected}>
            <label for=\"{$value}\">{$texto}</label><br>";
        endforeach;

        return $res;
    }
}