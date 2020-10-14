"use strict";

let productsArray = [];
let searchBox = null;

function showProducts(products) {
    let productsContainer = document.getElementById("productsContainer");
    while (productsContainer.lastElementChild) {
        productsContainer.removeChild(productsContainer.lastElementChild);
    }

    for (const p of products) {
        productsContainer.appendChild(p.toHTML());
    }
}

async function getProducts() {
    let resp = await Product.getAll();
    for (const p of resp.products) {
        productsArray.push(new Product(p));
    }
    showProducts(productsArray);
}

function filterKeyword(e) {
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
}

window.addEventListener("DOMContentLoaded", e => {
    searchBox = document.getElementById("search");

    getProducts();
    search.addEventListener("keyup", filterKeyword);
});

