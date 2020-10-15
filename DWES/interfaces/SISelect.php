<?php


class SISelect extends SelectorIndividual
{

    public function generaSelector()
    {

        $res = "<label for=\"{$this->getNombre()}\">{$this->getTitulo()}</label><br>
                <select name=\"cars\" id=\"cars\" form=\"carform\">";

        foreach ($this->getTextos() as $value => $texto):
            $selected = $value === $this->getSeleccionado() ? "selected" : "";
            $res = $res . "<option value=\"{$value}\" {$selected}>${texto}</option>";
        endforeach;

        $res = $res . "</select>";

        return $res;
    }
}