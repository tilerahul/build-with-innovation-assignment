import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import { useCart } from '../Reducers/Cart/CartContext';
import { useProduct } from '../Reducers/Products/ProductContext';
import { useAuth } from '../Reducers/Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('');
    const {isAuthenticated} = useAuth().state;
    const navigate = useNavigate();

    const { addToCart } = useCart();
    const { productData, sortedProduct } = useProduct();

    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        setLoading(true);
        sortedProduct(sort);
        setLoading(false);
    }, [sort])

    return (
        <div>
            {
                loading ?
                    (<Loader />) :
                    (<>
                        <div className='flex justify-between m-4 mt-3 ml-4'>
                            <p className=' font-medium'>Total Product : {productData.length}</p>
                            <div className='flex'>
                                <label htmlFor="sort" className='p-2 mx-2'>
                                    <input type="radio" id='sort' name='sort' className='mx-2'
                                    checked = {sort === "lowToHigh"}
                                    onChange={()=>setSort('lowToHigh')}
                                    />
                                    Price Low To High
                                </label>
                                <label htmlFor="sort" className='p-2 mx-2'>
                                    <input type="radio" id='sort' name='sort' className='mx-2'
                                    checked = {sort === "highToLow"}
                                    onChange={()=>setSort('highToLow')}
                                    />
                                    Price High To Low
                                </label>
                            </div>
                        </div>
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
                                                (<button onClick={() => addToCart(product)} className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
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