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

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "productsContainer");
    mainDiv.classList.add("card-columns", "mb-4");

    newProductForm.after(mainDiv);

    newProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
		console.log(newProductForm.category.value);
        if (!newProductForm.title.value || !newProductForm.price.value || !newProductForm.image.value || !newProductForm.description.value || newProductForm.category.value == 0) {
            document.getElementById("errorMsg").classList.toggle("hidden");
            setTimeout(() => {
                document.getElementById("errorMsg").classList.toggle("hidden");
            }, 3000);
        } else {
            let card = document.createElement("div");
            card.classList.add("card", "shadow");
            let image = document.createElement("img");
            image.classList.add("card-img-top");
            image.setAttribute("src", document.getElementById("imgPreview").getAttribute("src"));
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
            col.innerText = categories[newProductForm.category.value];
            let colRight = document.createElement("div");
            colRight.classList.add("col", "text-right");
            colRight.innerText = newProductForm.price.value + " €";

            card.append(image, cardBody, cardFooter);
            cardBody.append(cardTitle, cardText);
            cardFooter.append(col, colRight);

            mainDiv.append(card);

            newProductForm.reset();
            document.getElementById("imgPreview").src = "";
        }
    });
});