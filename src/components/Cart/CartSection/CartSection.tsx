import { useSelector } from 'react-redux';
import './CartSection.scss';
import { RootState } from '../../../utils/redux/store';
import { CartProduct } from '../../../interface/Product';
import CartItem from '../CartItem/CartItem';

const CartSection = () => {
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const totalValue = useSelector((state: RootState) => state.cart.totalValue);

    return (
        <div className="cart-section">
            <div className="cart-section-title">
                <h1>Carrinho de Compras</h1>

                <div>
                    <h2>Total: R$ {totalValue.toFixed(2)}</h2>
                </div>
            </div>

            <div className="cart-section-items">
                {cartProducts.map((product: CartProduct) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
}

export default CartSection