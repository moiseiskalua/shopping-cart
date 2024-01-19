import { useShoppingCart } from "../context/ShoppingCartContext";
import { formartCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}

const StoreItem = ({id, name, price, imgUrl} : StoreItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
  return (
    <div className="h-100">
        <div>
            <img
                className="object-cover h-[200px] size-full rounded-t-md"
                src={imgUrl}
                alt={imgUrl}
            />
        </div>
        <div className="flex flex-col py-2 px-5 mb-2">
            <div className="flex justify-between mb-4 items-baseline">
                <span className="font-semibold text-xl">{name}</span>
                <span className="font-normal text-lg text-gray-600">{formartCurrency(price)}</span>
            </div>
            <div className="mt-auto">
                {quantity === 0 ?
                <button
                    className="w-full rounded-md bg-blue-700 text-white py-2"
                    onClick={ () => increaseCartQuantity(id)}
                >+ Add to Cart</button> :
                <div className="flex flex-col items-center gap-5">
                    <div className="flex justify-center items-center gap-2">
                        <button className="rounded-md bg-blue-700 w-10 h-11 text-white" onClick={() => decreaseCartQuantity(id)}>-</button>
                        <div>
                            <span className="text-2xl">{quantity}</span> in cart
                        </div>
                        <button className="rounded-md bg-blue-700 w-10 h-11 text-white" onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                    <button className="bg-red-600 text-sm text-white rounded-md p-2" onClick={() => removeFromCart(id)}>Remove</button>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default StoreItem