import CheckoutItem from "../CheckoutItem";

export default class RegularDeal {
    constructor() { }

    Process(checkoutItems: CheckoutItem[]): number {
        let total = 0.0;
        checkoutItems
            .filter(p => p.checked === false)
            .forEach(p => { 
                total += p.product.Price;
                p.checked = true; 
            })
        return total;
    }
}