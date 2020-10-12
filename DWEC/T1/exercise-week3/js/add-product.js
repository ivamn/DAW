"use strict";

let newProductForm = null;
let imagePreview = null;

function loadImage(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        imagePreview.src = reader.result;
    });
}

window.addEventListener("DOMContentLoaded", e => {
    imagePreview = document.getElementById("imgPreview");
    let select = document.getElementById("category");
    let newProductForm = document.getElementById("newProduct");
    newProductForm.image.addEventListener("change", loadImage);
    Http.get(SERVER + "categories").then(data => {
        for (let category of data.categories) {
            let option = document.createElement("option");
            option.setAttribute("value", category.id);
            option.innerText = category.name;
            select.appendChild(option);
        }
    });

    document.querySelector("button[type='submit']").addEventListener("click", e => {
        e.preventDefault();
        if (!newProductForm.title.value || !newProductForm.price.value || !newProductForm.image.value || !newProductForm.description.value || newProductForm.category.value == 0) {
            document.getElementById("errorMsg").classList.toggle("hidden");
            setTimeout(() => {
                document.getElementById("errorMsg").classList.toggle("hidden");
            }, 3000);
        } else {

            let p = new Product({
                id: 0,
                title: newProductForm.title.value,
                description: newProductForm.description.value,
                category: new Number(newProductForm.category.value),
                price: new Number(newProductForm.price.value),
                mainPhoto: imagePreview.src
            });
            p.post().then(data => {
                if (data.product) {
                    location.assign("index.html");
                } else {
                    alert("There has been an error. The item has not been added.")
                }
            });
        }
    })
});