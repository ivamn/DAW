'use strict';

import {Http} from './http.js';
import {SERVER} from './constants.js';
import {Product} from './product.class.js';

let newProductForm = null;
let imagePreview = null;
let selectCategoriesControl = null;

function loadImage(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        imagePreview.src = reader.result;
    });
}

async function getCategories() {
    let data = await Http.get(SERVER + 'categories');
    for (let category of data.categories) {
        let option = document.createElement('option');
        option.setAttribute('value', category.id);
        option.innerText = category.name;
        selectCategoriesControl.appendChild(option);
    }
}

async function postData(p) {
    try {
        let data = await p.post();
        if (data.product)
            location.assign('index.html');

    } catch (error) {
        alert('Error: ' + error);
    }

}

function submitForm(e) {
    e.preventDefault();
    if (!newProductForm.title.value || !newProductForm.price.value || !newProductForm.image.value || !newProductForm.description.value || newProductForm.category.value == 0) {
        document.getElementById('errorMsg').classList.toggle('hidden');
        setTimeout(() => {
            document.getElementById('errorMsg').classList.toggle('hidden');
        }, 3000);
    } else {
        let title = newProductForm.title.value.trim();
        let price = new Number(newProductForm.price.value);
        let mainPhoto = imagePreview.src;
        let description = newProductForm.description.value.trim();
        let category = new Number(newProductForm.category.value);
        let p = new Product({
            id: 0, title, description, category, price, mainPhoto
        });
        postData(p);
    }
}

window.addEventListener('DOMContentLoaded', e => {
    imagePreview = document.getElementById('imgPreview');
    selectCategoriesControl = document.getElementById('category');
    newProductForm = document.getElementById('newProduct');

    getCategories();

    newProductForm.image.addEventListener('change', loadImage);
    document.querySelector('button[type=\'submit\']').addEventListener('click', submitForm);
});