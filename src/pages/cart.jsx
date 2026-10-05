import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;