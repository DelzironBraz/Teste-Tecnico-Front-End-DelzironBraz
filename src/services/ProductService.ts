import axios from 'axios';

export const productService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/products`);

            if (response.status !== 200) {
                throw new Error('Error fetching products');
            }

            return response.data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    getProductById: async (id: number) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/products/${id}`);

            if (response.status !== 200) {
                throw new Error('Error fetching products');
            }

            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    search: async (searchProduct: string) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/products/search?q${searchProduct}`);

            if (response.status !== 200) {
                throw new Error('Error fetching products');
            }

            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
};
