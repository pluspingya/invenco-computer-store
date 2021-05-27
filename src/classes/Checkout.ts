import PricingRule from "../interfaces/PricingRule";
import Product from "../interfaces/Product";
import CheckoutItem from "./CheckoutItem";

export default class Checkout {
    readonly pricingRules: PricingRule[];
    readonly items: Product[];

    constructor(pricingRules: PricingRule[]) {
        this.pricingRules = pricingRules;
        this.items = [];
    }

    scan(product: Product) {
        this.items.push(product);
    }

    total(): number {
        let total = 0.0;

        const checkoutItems = this.items.map(item => new CheckoutItem(item));
        this.pricingRules.forEach(rule => total += rule.Process(checkoutItems));

        return total;
    }
}