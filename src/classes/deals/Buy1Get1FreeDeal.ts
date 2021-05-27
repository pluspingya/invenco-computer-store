import Product from "../../interfaces/Product";
import CheckoutItem from "../CheckoutItem";
import { getSKU } from "../../utils";

export default class Buy1Get1FreeDeal
{
    SKU1: string;
    SKU2: string;
    
    constructor(product1: Product | string, product2: Product | string) {
        this.SKU1 = getSKU(product1);
        this.SKU2 = getSKU(product2);
    }

    Process(checkoutItems: CheckoutItem[]): number {
        let total = 0.0;
        
        for(let i=0, n=checkoutItems.length; i<n; i++) {
            if (checkoutItems[i].checked === true || checkoutItems[i].product.SKU != this.SKU1) {
                continue;
            }
            const iFree = checkoutItems.findIndex(item => item.checked === false && item.product.SKU === this.SKU2);
            if (iFree === -1) {
                continue;
            }
            checkoutItems[i].checked = true;
            checkoutItems[iFree].checked = true;
            total += checkoutItems[i].product.Price;
        }

        return total;
    }
}