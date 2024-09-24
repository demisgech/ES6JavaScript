<?php
interface Store {
    $store=>void;
}
class Products {
    public $items;

    public getItems():boolval {
        return $this->items;
    }
}
const product = new Product();
product->$items = "Banana";