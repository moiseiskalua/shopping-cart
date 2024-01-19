import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json'
import { formartCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
}

const CartItem = ({id, quantity} : CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find( item => item.id === id)

    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="flex items-center">
            <img
                src={item.imgUrl}
                style= {{
                    width: '125px',
                    height: '75px',
                    objectFit: 'cover'
                }}
            />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span 
                    className="text-lg"
                    style={{fontSize: '.65rem'}}
                    >
                        x{quantity}</span>}
                </div>
                <div className="text-lg"
                style={{fontSize: '.65rem'}}>
                    {formartCurrency(item.price)}
                </div>
            </div>
            <div>{formartCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size='sm' onClick={ () => removeFromCart(item.id) }>
                  &times;      
            </Button>
        </Stack>
    )
}
export default CartItem