import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([])

    const getAllProduct = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            console.log(res.data.products);
            setData(res.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [])
    return (
        <div className='flex flex-wrap justify-center gap-6 my-10 mx-10'>
            {data.map((product) => (
                <div className="rounded overflow-hidden shadow-lg w-1/5 hover:scale-105" key={product.id}>
                    <img className="w-full aspect-[4/3] object-cover" src={product.images[0]} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base max-h-24">{product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Home