import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import { useCart } from '../Reducers/Cart/CartContext';
import { useProduct } from '../Reducers/Products/ProductContext';

const Home = () => {
    const [loading, setLoading] = useState(false);

    const {addToCart} = useCart();
    const {productData, getAllProduct} = useProduct();

    useEffect(()=>{
        setLoading(true);
        getAllProduct();
        setLoading(false);
    }, [])
    
    return (
        <div>
            {
                loading ?
                    (<Loader />) :
                    (<>
                        <div className='flex flex-wrap justify-center gap-6 my-10 mx-10'>
                            {productData.map((product) => (
                                <div className="rounded overflow-hidden shadow-lg w-1/5" key={product.id}>
                                    <img className="w-full aspect-[4/3] object-cover" src={product.images[0]} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{product.title}</div>
                                        <p className="text-gray-700 text-base min-h-36">{product.description}</p>
                                        <p className='text-xl font-medium py-2 px-2'>{`₹${product.price - Math.round((product.price * product.discountPercentage) / 100)} `}<span className='text-sm line-through text-slate-500'>{product.price}</span><span className='text-sm text-slate-500'>{` (${product.discountPercentage}% off)`}</span></p>
                                        {
                                            product.stock > 0 ?
                                                (<button onClick={()=>addToCart(product)} className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                                                    Add to cart
                                                </button>) :
                                                (<button className="w-full bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                                    Out of Stock
                                                </button>)
                                        }

                                    </div>
                                </div>
                            ))}
                        </div>
                    </>)
            }
        </div>
    )
}
export default Home