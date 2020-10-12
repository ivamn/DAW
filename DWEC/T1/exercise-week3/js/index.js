"use strict";

let productsArray = [];

function showProducts(products) {
    let productsContainer = document.getElementById("productsContainer");
    while (productsContainer.lastElementChild) {
        productsContainer.removeChild(productsContainer.lastElementChild);
    }

    for (const p of products) {
        productsContainer.appendChild(p.toHTML());
    }
}

window.addEventListener("DOMContentLoaded", e => {
    Product.getAll().then(data => {
        for (const p of data.products) {
            productsArray.push(new Product(p));
        }
        showProducts(productsArray);
    });

    let search = document.getElementById("search");
    search.addEventListener("keyup", e => {
        if (search.value) {
            let filteredProducts = [];
            for (const p of productsArray) {
                if (p.title.toLowerCase().includes(search.value) || p.description.toLowerCase().includes(search.value)) {
                    filteredProducts.push(p);
                }
            }
            showProducts(filteredProducts);
        } else {
            showProducts(productsArray);
        }
    });
});

