import Product from "../../interfaces/Product";
import CheckoutItem from "../CheckoutItem";
import { getSKU } from "../../utils";

export default class XForYDeal 
{
    SKU: string;
    X: number;
    Y: number;

    constructor(product: Product | string, X: number, Y: number) {        
        this.SKU = getSKU(product);
        this.X = X;
        this.Y = Y;
    }

    Process(checkoutItems: CheckoutItem[]): number {
        let total = 0.0;
        let indexes: number[] = [];

        checkoutItems
            .filter(p => p.checked === false && p.product.SKU === this.SKU)
            .forEach((p, index, items) => {
                indexes.push(index);
                if (indexes.length < this.X) {                    
                    return;
                }
                indexes.forEach(i => items[i].checked = true);
                indexes = [];
                total += p.product.Price * this.Y;
            });

        return total;
    }
}