import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalPrice = useSelector(getTotalCartPrice);
  if (!totalQuantity) return;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity}</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>

      <Link Link to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
