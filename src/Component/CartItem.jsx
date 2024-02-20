import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { useCart } from '../Reducers/Cart/CartContext';

const CartItem = ({item}) => {
    
    const [qty, setQty] = useState(1);
    const {removeFromCart} = useCart();
    const incQty = () => {
        setQty((prev) => prev + 1);
    }
    const decQty = () => {
        if (qty <= 1) return;
        setQty((prev) => prev - 1);
    }
    return (
        <div>
            <div className=' flex items-center m-2 gap-10'>
                <img className='w-[50px] aspect-square object-cover' src={item.images[0]} alt="" />
                <div className='min-w-56'>
                    {item.title}
                </div>
                <div className='min-w-36'>
                    <p>₹ {Math.round(item.price - item.price * item.discountPercentage / 100)}</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <FiMinus className='cursor-pointer' onClick={decQty} />
                    <div className='p-1 px-3 font-medium bg-slate-200 rounded'>{qty}</div>
                    <IoAdd className='cursor-pointer' onClick={incQty} />
                </div>
                <div> <MdDelete onClick={() => { removeFromCart(item.id) }} size={20} className='cursor-pointer text-red-700' /> </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem