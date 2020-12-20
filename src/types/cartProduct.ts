import { IProduct } from "./product";

interface ICartProduct extends IProduct { 
    amount: number;
}

export default ICartProduct;