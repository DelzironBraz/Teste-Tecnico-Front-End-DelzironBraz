import { useState } from 'react';
import { Product } from '../../../interface/Product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.scss';

interface ProductGridProps {
    products: Product[];
    title: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
    const [visibleCount, setVisibleCount] = useState(15);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    return (
        <section className='product-grid'>
            <div className='product-grid-title'>
                <h2>{title}</h2>
            </div>
            <div className='product-grid-content'>
                {products.slice(0, visibleCount).map((product: Product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            {visibleCount < products.length && (
                <div className='product-grid-footer'>
                    <button onClick={loadMore}>Ver Mais</button>
                </div>
            )}
        </section>
    );
};

export default ProductGrid;
