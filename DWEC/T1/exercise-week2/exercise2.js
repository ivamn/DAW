"use strict";

let newProductForm = null;
let errorMsg = null;
let categories = ["None", "Electronics", "Motor and vehicles", "Sports and hobbies", "Other"];

function loadImage(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    });
}

window.addEventListener("DOMContentLoaded", e => {
    newProductForm = document.getElementById("newProduct");
    newProductForm.image.addEventListener("change", loadImage);

    newProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!newProductForm.title.value || !newProductForm.price.value || !newProductForm.image.value || !newProductForm.description.value) {
            document.getElementById("errorMsg").classList.toggle("hidden");
            setTimeout(() => {
                document.getElementById("errorMsg").classList.toggle("hidden");
            }, 3000);
        } else {
            let card = document.createElement("div");
            card.classList.add("card", "shadow");
            let image = document.createElement("image");
            image.classList.add("card-img-top");
            image.setAttribute("src", document.getElementById("imgPreview").getAttribute("src"));
            //image.setAttribute("src", newProductForm.image.value);
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = newProductForm.title.value;
            let cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = newProductForm.description.value;
            let cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer", "bh-transparent", "text-muted", "row");
            let col = document.createElement("div");
            col.classList.add("col");
            col.innerText = categories[newProductForm.select.value];
            let colRight = document.createElement("div");
            colRight.classList.add("col", "text-right");
            colRight.innerText = newProductForm.price.value + " €";

            card.appendChild(image);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardFooter.appendChild(col);
            cardFooter.appendChild(colRight);

            document.getElementById("productsContainer").appendChild(card);

            newProductForm.reset();

            /*
            <div class="card shadow">
                <img class="card-img-top" src="./img/chicken.jpg">
                <div class="card-body">
                    <h5 class="card-title">Product title</h5>
                    <p class="card-text">This is the description.</p>
                </div>
                <div class="card-footer bg-transparent text-muted row">
                    <div class="col">Category</div>
                    <div class="col text-right">Price €</div>
                </div>
            </div>
            */
        }
    });
});