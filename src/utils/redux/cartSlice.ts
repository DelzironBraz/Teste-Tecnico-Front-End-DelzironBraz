import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../../interface/Product";

let storedProductString: string | null;
let storedProduct: CartProduct[];

if (typeof window !== 'undefined') {
    storedProductString = localStorage.getItem('cartProducts');
    storedProduct = storedProductString !== null ? JSON.parse(storedProductString) : [];
} else {
    storedProduct = [];
}

const calculateTotalValue = (products: CartProduct[]) => {
    return products.reduce((total, product) => total + (product.price * product.count), 0);
};

export const cartSlice = createSlice({
    name: 'cartStore',
    initialState: {
        cartProducts: storedProduct,
        totalProducts: storedProduct.length,
        totalValue: calculateTotalValue(storedProduct),
    },
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.cartProducts.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                state.cartProducts.push({ ...action.payload, count: 1 });
            }
            state.totalProducts = state.cartProducts.length;
            state.totalValue = calculateTotalValue(state.cartProducts);
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const productIndex = state.cartProducts.findIndex(product => product.id === action.payload.id);
            if (productIndex >= 0) {
                state.cartProducts[productIndex] = { ...action.payload, count: state.cartProducts[productIndex].count };
            }
            state.totalValue = calculateTotalValue(state.cartProducts);
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
        updateProductCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
            const productIndex = state.cartProducts.findIndex(product => product.id === action.payload.id);
            if (productIndex >= 0) {
                state.cartProducts[productIndex].count = action.payload.count;
            }
            state.totalValue = calculateTotalValue(state.cartProducts);
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload);
            state.totalProducts = state.cartProducts.length;
            state.totalValue = calculateTotalValue(state.cartProducts);
            localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
        },
    }
});

export const { addProduct, updateProduct, updateProductCount, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
