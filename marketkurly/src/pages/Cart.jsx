import Cartlist from '../components/CartList';
import Cartpayment from '../components/CartPayment';

import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <header>장바구니</header>
      <div className='cart-content'>
        <Cartlist />
        <Cartpayment />
      </div>
    </div>
  );
};

export default Cart;
