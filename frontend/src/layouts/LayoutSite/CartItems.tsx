import React from "react";
import { urlImageProduct } from "../../config";
import { useShoppingContext } from "../../pages/frontend/context/ShoppingContext.tsx";
import {
  FaTrash,
} from "react-icons/fa";

type CartItemProps={
  id:number
  name:string
  price:number
  qty:number
  image:string
}

const CartItem = ({id,name,price,qty,image}:CartItemProps) => {
  const{increaseQty,decreaseQty,removeCartItem}=useShoppingContext()
    return (
      <tr>
       
        <td>
          <img

          style={{maxHeight:"90px"}}
            src={urlImageProduct+"/" +image}
            className="img-fluid"
            alt="hinh1"
          />
        </td>
        <td className="align-middle">{name}</td>
        <td className="text-center align-middle"style={{}}>
          <button type="button" className="btn btn-sm btn-primary ms-10 me-20" onClick={() => decreaseQty(id)}><strong>-</strong></button>
          <span className="item-price " style={{padding:10,}}>{qty}</span>
          <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(id)}><strong>+</strong></button>
        </td>
      
      
        <td className="text-center align-middle"
        style={{fontSize:"30px",fontFamily:"cursive"}}>${qty*price}</td>
         <td>
                <button className="btn btn-sm btn-danger btn-remove"style={{height:"50px",width:"50px",marginTop:25}} onClick={() => removeCartItem(id)}> < FaTrash /> </button>
            </td>
      </tr>
    )
}
 
export default CartItem;