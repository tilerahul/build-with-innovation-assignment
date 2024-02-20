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

  return (
    <ProductContext.Provider value={{ productData, setProductData, getAllProduct}}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);