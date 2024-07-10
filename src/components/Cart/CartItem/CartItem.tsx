import { useDispatch, useSelector } from 'react-redux';
import './CartItem.scss';
import { removeProduct, updateProductCount } from '../../../utils/redux/cartSlice';
import { CartProduct } from '../../../interface/Product';
import { RootState } from '../../../utils/redux/store';

const CartItem = ({ product }: { product: CartProduct }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);

    const handleRemove = (id: number) => {
        dispatch(removeProduct(id));
    };

    const handleIncrease = (id: number) => {
        const product = cartProducts.find(product => product.id === id);
        if (product) {
            dispatch(updateProductCount({ id, count: product.count + 1 }));
        }
    };

    const handleDecrease = (id: number) => {
        const product = cartProducts.find(product => product.id === id);
        if (product && product.count > 1) {
            dispatch(updateProductCount({ id, count: product.count - 1 }));
        }
    };
    return (
        <div className="cart-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="cart-item-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Preço: ${product.price}</p>
                <div className="cart-item-actions">
                    <div className="cart-item-actions-quantity">
                        <button onClick={() => handleDecrease(product.id)}>-</button>
                        <p>{product.count}</p>
                        <button onClick={() => handleIncrease(product.id)}>+</button>
                    </div>
                    <button onClick={() => handleRemove(product.id)}>Remover</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem