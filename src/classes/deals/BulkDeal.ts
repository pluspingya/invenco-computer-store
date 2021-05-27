import Product from "../../interfaces/Product";
import CheckoutItem from "../CheckoutItem";
import { getSKU } from "../../utils";

export default class BulkDeal
{
    SKU: string;
    minimumQuantity: number;
    droppedPrice: number;

    constructor(product: Product | string, minimumQuantity: number, droppedPrice: number) {
        this.SKU = getSKU(product);
        this.minimumQuantity = minimumQuantity;
        this.droppedPrice = droppedPrice;
    }

    Process(checkoutItems: CheckoutItem[]) : number {
        let total = 0.0;

        checkoutItems
            .filter(item => item.checked === false && item.product.SKU === this.SKU)
            .forEach((item, index, items) => {
                if (items.length < this.minimumQuantity) {
                    return;
                }
                item.checked = true;
                total += this.droppedPrice;
            });

        return total;
    }
}
