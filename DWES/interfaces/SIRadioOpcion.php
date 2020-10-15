<?php


class SIRadioOpcion extends SelectorIndividual
{

    public function generaSelector() : string
    {
        $res = "";

        foreach ($this->getTextos() as $value => $texto):
            $selected = $value === $this->getSeleccionado() ? "checked" : "";
            $res = $res . "<input type=\"radio\" id=\"male\" name=\"{$this->getNombre()}\" value=\"{$value}\" {$selected}>
            <label for=\"{$value}\">{$texto}</label><br>";
        endforeach;

        return $res;
    }
}