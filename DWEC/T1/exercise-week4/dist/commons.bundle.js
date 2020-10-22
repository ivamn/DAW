(self["webpackChunk"] = self["webpackChunk"] || []).push([["commons"],{

/***/ "../templates/product.handlebars":
/*!***************************************!*\
  !*** ../templates/product.handlebars ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"card-img-top\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"mainPhoto") || (depth0 != null ? lookupProperty(depth0,"mainPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mainPhoto","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":44}}}) : helper)))
    + "\">\n<div class=\"card-body\">\n    <h5 class=\"card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":36}}}) : helper)))
    + "</h5>\n    <p class=\"card-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":40}}}) : helper)))
    + "</p>\n    <div class=\"text-right\"><button class=\"btn btn-danger\">Delete</button></div>\n</div>\n<div class=\"card-footer bh-transparent text-muted row\">\n    <div class=\"col\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":33}}}) : helper)))
    + "</div>\n    <div class=\"col text-right\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":41}}}) : helper)))
    + "</div>\n</div>";
},"useData":true});

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! namespace exports */
/*! export SERVER [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER": () => /* binding */ SERVER
/* harmony export */ });


const SERVER = 'http://arturober.com:5007/';

/***/ }),

/***/ "./http.js":
/*!*****************!*\
  !*** ./http.js ***!
  \*****************/
/*! namespace exports */
/*! export Http [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Http": () => /* binding */ Http
/* harmony export */ });


class Http {
    static async ajax(method, url, headers = {}, body = null) {
        const resp = await fetch(url, { method, headers, body });
        if (!resp.ok) throw new Error(resp.statusText);
        if (resp.status != 204) {
            return await resp.json(); // promise
        } else {
            return null;
        }
    }

    static get(url) {
        return Http.ajax('GET', url);
    }

    static post(url, data) {
        return Http.ajax('POST', url, { 'Content-Type': 'application/json' }, JSON.stringify(data));
    }

    static put(url, data) {
        return Http.ajax('PUT', url, { 'Content-Type': 'application/json' }, JSON.stringify(data));
    }

    static delete(url) {
        return Http.ajax('DELETE', url);
    }
}

/***/ }),

/***/ "./product.class.js":
/*!**************************!*\
  !*** ./product.class.js ***!
  \**************************/
/*! namespace exports */
/*! export Product [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => /* binding */ Product
/* harmony export */ });
/* harmony import */ var _templates_product_handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/product.handlebars */ "../templates/product.handlebars");
/* harmony import */ var _templates_product_handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_product_handlebars__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.js */ "./http.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");




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
        return _http_js__WEBPACK_IMPORTED_MODULE_1__.Http.get(_constants_js__WEBPACK_IMPORTED_MODULE_2__.SERVER + 'products');
    }

    post() {
        return _http_js__WEBPACK_IMPORTED_MODULE_1__.Http.post(_constants_js__WEBPACK_IMPORTED_MODULE_2__.SERVER + 'products', this);
    }

    delete() {
        return _http_js__WEBPACK_IMPORTED_MODULE_1__.Http.delete(_constants_js__WEBPACK_IMPORTED_MODULE_2__.SERVER + 'products/' + this.id);
    }

    toHTML() {
        let card = document.createElement('div');
        card.classList.add('card', 'shadow');
        
        let p = new Product({...this});
        p.category = p.category.name;

        let productsHtml = _templates_product_handlebars__WEBPACK_IMPORTED_MODULE_0___default()(p);
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


/***/ })

}]);
//# sourceMappingURL=commons.bundle.js.map