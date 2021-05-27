import CheckoutItem from '../classes/CheckoutItem';

export default interface PricingRule {
    Process(checkoutItems: CheckoutItem[]): number;
}