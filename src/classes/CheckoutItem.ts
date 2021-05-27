import Product from "../interfaces/Product";

export default class CheckoutItem {
    product: Product;
    checked: boolean;

    constructor(product: Product) {
        this.product = product;
        this.checked = false;
    }
}