/* 
    ABOUT ME: The purpose of this interface is just to define what a Product is
    and what properties it has. This is used to provide some typing when an admin creates
    a new product within the product-form.component, or when they retrieve products.
*/
export interface Product {
    title:string;
    price:number;
    category:string;
    imageUrl:string;
}