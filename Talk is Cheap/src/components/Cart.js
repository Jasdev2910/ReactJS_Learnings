import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import appStore from "../utils/appStore";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch(appStore);

  const handleClear = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);

  return (
    <div className="flex-col m-4 p-4">
      <div className="flex items-center justify-between w-6/12 m-auto">
        <h1 className="text-center text-2xl font-bold">Cart</h1>
        <button
          onClick={handleClear}
          className="px-4 py-1 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white hover:shadow-2xl hover:-translate-y-1 transition"
        >
          Clear
        </button>
      </div>
      {cartItems?.map((item) => (
        <div className="w-6/12 m-auto">
          <MenuItem menuItem={item} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
