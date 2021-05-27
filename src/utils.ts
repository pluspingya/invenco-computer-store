import Product from "./interfaces/Product";

export function getSKU(product: Product | string) {
    return typeof product === "string" ? product : product.SKU;
}