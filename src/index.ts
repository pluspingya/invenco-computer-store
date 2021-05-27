import Product from "./interfaces/Product";
import PricingRule from "./interfaces/PricingRule";

import XForYDeal from "./classes/deals/XForYDeal";
import BulkDeal from "./classes/deals/BulkDeal";
import Buy1Get1FreeDeal from "./classes/deals/Buy1Get1FreeDeal";
import RegularDeal from "./classes/deals/RegularDeal";

import Checkout from "./classes/Checkout";

function main() {
    const products: Product[] = [
        { SKU: "ipd", Name: "Super iPad", Price: 549.99 },
        { SKU: "mbp", Name: "MacBook Pro", Price: 1399.99 },
        { SKU: "atv", Name: "Apple TV", Price: 109.50 },
        { SKU: "vga", Name: "VGA adapter", Price: 30.00 },        
    ];

    const pricingRules: PricingRule[] = [
        new XForYDeal("atv", 3, 2),
        new BulkDeal("ipd", 4, 499.99),
        new Buy1Get1FreeDeal("mbp", "vga"),
        new RegularDeal(), //No deal, just a regular price and must have this rule 
    ];

    const item1 = products[0];
    const item2 = products[1];

    const co: Checkout = new Checkout(pricingRules);
    co.scan(item1);
    co.scan(item2);
    console.log(co.total());
}

main();