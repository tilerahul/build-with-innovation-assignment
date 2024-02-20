import React from 'react'
import { useCart } from '../Reducers/Cart/CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const { totalItems, totalPrice, cart } = useCart().cartState;
    return (
        <div className='pt-16 m-5 flex items-center justify-center'>
            {totalItems === 0 ? (
                <div className='shadow-lg px-5 py-2 rounded'>
                    Your Cart Is Empty !!
                </div>
            ) : (
                <div className='flex items-center gap-4'>
                    <div className='shadow-lg px-5 py-2 rounded flex items-center'>
                        <div className='m-3'>
                            <div className='font-medium mb-2'>Total Cart Items : {cart.length}</div>
                            <hr />
                            <div>
                                {
                                    cart.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg'>
                        <div className='m-3'>
                            <p className='p-3 font-medium'>Summary :</p>
                            <hr />
                            <p className='p-2'>Total Items : {cart.length}</p>
                            <p className='p-2'>Items Price : {totalPrice}</p>
                            <p className='p-2'>Discounted Price : {cart.length}</p>
                            <hr />
                            <p className='p-2 font-semibold'>Total Price : {cart.length}</p>
                            <button type="button" class="text-white w-full bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Cart