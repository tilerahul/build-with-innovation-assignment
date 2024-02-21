import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [productData, setProductData] = useState([]);

  const getAllProduct = async (search = '') => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
      console.log(res.data.products);
      setProductData(res.data.products); 
      
    } catch (error) {
      console.log(error);
    }
  }
  const sortedProduct = async (sort) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products`);
      
      if(sort === 'lowToHigh'){
        return setProductData(res.data.products.slice().sort((a, b) => a.price - b.price));
      }
      if(sort === 'highToLow'){
        return setProductData(res.data.products.slice().sort((a, b) => b.price - a.price));
      }else{
        return setProductData(res.data.products); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductContext.Provider value={{ productData, setProductData, getAllProduct, sortedProduct}}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);