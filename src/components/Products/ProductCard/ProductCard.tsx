import './ProductCard.scss';
import { Rating, styled } from '@mui/material';
import { Product } from '../../../interface/Product';
import { TbShoppingCartFilled } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '../../../utils/redux/cartSlice';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#a54114',
    },
});

const ProductCard = (product: Product) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct(product));
        toast.success('Produto adicionado ao carrinho!');
    };

    return (
        <div className='product-card'>
            <img
                className='product-card-thumbnail'
                src={product.thumbnail}
                alt={product.title}
            />

            <div className='product-card-content'>
                <h3>{product.title}</h3>
                <div className='product-card-content-rating'>
                    <StyledRating
                        name="read-only"
                        value={product.rating}
                        precision={0.5}
                        readOnly
                    />
                    <span>({product.rating})</span>
                </div>
                <p>Por: R$ {product.price}</p>
            </div>

            <div className='product-card-button'>
                <button onClick={handleAddToCart}>
                    <TbShoppingCartFilled />
                    Adicionar ao carrinho
                </button>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default ProductCard;
