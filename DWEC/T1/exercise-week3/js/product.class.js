class Product {
    constructor({ id, title, description, category, price, mainPhoto }) {
        this.id = id ? id : null;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.mainPhoto = mainPhoto;
    }

    static getAll() {
        return Http.get(SERVER + "products");
    }

    post() {
        return Http.post(SERVER + "products", this);
    }

    delete() {
        return Http.delete(SERVER + "products/" + this.id);
    }

    toHTML() {
        let card = document.createElement("div");
        card.classList.add("card", "shadow");
        let image = document.createElement("img");
        image.classList.add("card-img-top");
        image.setAttribute("src", this.mainPhoto);
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = this.title;
        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = this.description;
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer", "bh-transparent", "text-muted", "row");
        let col = document.createElement("div");
        col.classList.add("col");
        col.innerText = this.category.name;
        let colRight = document.createElement("div");
        colRight.classList.add("col", "text-right");
        colRight.innerText = this.price + " €";

        let deleteDiv = document.createElement("div");
        deleteDiv.classList.add("text-right");
        let deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", async e => {
            try {
                await this.delete();
                card.remove();
            } catch (error) {
                alert("Error: " + error);
            }
        });
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.innerText = "Delete";

        deleteDiv.append(deleteButton);

        card.append(image, cardBody, cardFooter);
        cardBody.append(cardTitle, cardText, deleteDiv);
        cardFooter.append(col, colRight);

        return card;
    }
}
