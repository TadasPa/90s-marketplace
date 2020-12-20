import IProduct from "../types/product";
import ICartProduct from "../types/cartProduct";
import { PRODUCTS_KEY } from "./constants";
import { get, getObject, set } from ".";

export const addProduct = (item: IProduct) => { 
    const exists = !!get(PRODUCTS_KEY);
    
    if (exists) {
        const array: ICartProduct[] = getObject<ICartProduct[]>(PRODUCTS_KEY);
        const existingItemIndex = array.findIndex(({ id }) => id === item.id);
        const existingItem = array[existingItemIndex];
        if (existingItemIndex > -1) {
            array[existingItemIndex] = {...existingItem, amount: existingItem.amount + 1 };
        } else {
            array.push({...item, amount: 1});
        }
        set(PRODUCTS_KEY, array);
    } else { 
        set(PRODUCTS_KEY, [{...item, amount: 1}]);
    }
};

export const removeProduct = (item: IProduct) => { 
    const products = getObject<ICartProduct[]>(PRODUCTS_KEY);
    const itemIndex = products.findIndex(({ id }) => id === item.id);
    products.splice(itemIndex, 1);
    set(PRODUCTS_KEY, products);
}

export const getProducts = (): ICartProduct[] => getObject<ICartProduct[]>(PRODUCTS_KEY);