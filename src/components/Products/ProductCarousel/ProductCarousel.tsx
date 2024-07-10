import './ProductCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../../interface/Product';
import ProductCard from '../ProductCard/ProductCard';

interface IProductCarousel {
    products: Product[];
    title: string;
}

const ProductCarousel = ({ products, title }: IProductCarousel) => {
    return (
        <section className='product-carousel'>
            <div className='product-carousel-title'>
                <h2>{title}</h2>
            </div>
            <div className='product-carousel-content'>
                <Swiper
                    spaceBetween={0}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        }
                    }}
                >
                    {products.map((product: Product) => (
                        <SwiperSlide>
                            <ProductCard key={product.id} {...product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default ProductCarousel