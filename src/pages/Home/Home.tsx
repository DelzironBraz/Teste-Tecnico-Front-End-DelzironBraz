import './Home.scss';
import { useQuery } from 'react-query';
import { productService } from '../../services/ProductService';
import Loading from '../../components/Loading/Loading';
import Toast, { notify } from '../../components/Toast/Toast';
import ProductGrid from '../../components/Products/ProductsGrid/ProductGrid';
import ProductCarousel from '../../components/Products/ProductCarousel/ProductCarousel';

const Home = () => {
    const { isLoading, isError, error, data: products } = useQuery('products', () => productService.getAllProducts());
    console.info(products);

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        notify(error as string);
        return <Toast />
    }

    return (
        <main className='home'>
            <ProductCarousel products={products.slice(0, 10)} title='Mais Vendidos' />
            <ProductCarousel products={products.slice(10, 20)} title='Ofertas do dia' />
            <ProductCarousel products={products.slice(20, 30)} title='Oferta Relâmpago' />
            {products && (<ProductGrid products={products.slice(0, 30)} title='Descobertas do dia' />)}
        </main>
    )
}

export default Home;
