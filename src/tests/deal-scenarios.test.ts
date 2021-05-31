import Product from "../interfaces/Product";
import PricingRule from "../interfaces/PricingRule";

import XForYDeal from "../classes/deals/XForYDeal";
import BulkDeal from "../classes/deals/BulkDeal";
import Buy1Get1FreeDeal from "../classes/deals/Buy1Get1FreeDeal";
import RegularDeal from "../classes/deals/RegularDeal";

import Checkout from "../classes/Checkout";

describe("test 3 scenarios of special deals", () => {
    let products: Product[];
    let pricingRules: PricingRule[];
    let co: Checkout;

    beforeEach(() => {
        products = [
            { SKU: "ipd", Name: "Super iPad", Price: 549.99 },
            { SKU: "mbp", Name: "MacBook Pro", Price: 1399.99 },
            { SKU: "atv", Name: "Apple TV", Price: 109.50 },
            { SKU: "vga", Name: "VGA adapter", Price: 30.00 },        
        ];

        pricingRules = [
            new XForYDeal("atv", 3, 2),
            new BulkDeal("ipd", 4, 499.99),
            new Buy1Get1FreeDeal("mbp", "vga"),
            new RegularDeal(),
        ];

        co = new Checkout(pricingRules); 
    });

    test("SKUs scanned: atv, atv, atv, vga", () => {    
        ['atv', 'atv', 'atv', 'vga'].forEach(sku => co.scan(products.find(p => p.SKU === sku)));        
        expect(co.total()).toBe(249.00);
    })

    test("SKUs scanned: atv, ipd, ipd, atv, ipd, ipd, ipd", () => {    
        ['atv', 'ipd', 'ipd', 'atv', 'ipd', 'ipd', 'ipd'].forEach(sku => co.scan(products.find(p => p.SKU === sku)));        
        expect(co.total()).toBe(2718.95);
    })

    test("SKUs scanned: mbp, vga, ipd", () => {    
        ['mbp', 'vga', 'ipd'].forEach(sku => co.scan(products.find(p => p.SKU === sku)));        
        expect(co.total()).toBe(1949.98);
    })
});


