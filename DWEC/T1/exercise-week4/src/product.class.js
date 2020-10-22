import productsTemplate from '../templates/product.handlebars';
import {Http} from './http.js';
import {SERVER} from './constants.js';

export class Product {
    constructor({ id, title, description, category, price, mainPhoto }) {
        this.id = id ? id : null;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.mainPhoto = mainPhoto;
    }

    static getAll() {
        return Http.get(SERVER + 'products');
    }

    post() {
        return Http.post(SERVER + 'products', this);
    }

    delete() {
        return Http.delete(SERVER + 'products/' + this.id);
    }

    toHTML() {
        let card = document.createElement('div');
        card.classList.add('card', 'shadow');
        
        let p = new Product({...this});
        p.category = p.category.name;

        let productsHtml = productsTemplate(p);
        card.innerHTML = productsHtml;

        card.querySelector('button.btn-danger').addEventListener('click', async e => {
            try {
                await this.delete();
                card.remove();
            } catch (error) {
                alert('Error: ' + error);
            }
        });

        return card;
    }
}
