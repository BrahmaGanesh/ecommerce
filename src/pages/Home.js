import React, { createContext, useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import Navbar from "../components/navbar";
import Ad from "../components/ad";
export const AddCart=createContext("");
const Home = () => {
  const [products, setProducts] =useState([])
  const [wishlist, setWishlist] = useState(() =>
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  useEffect(() => {
    try{
      fetch(" http://127.0.0.1:5000/api/products")
      .then((res)=>{ return res.json() })
      .then((data)=>{
        setProducts(data)
      })
    }catch(error){
      console.log(error)
    }
  },[])

  const [cart, setCart] = useState(()=>
   JSON.parse(localStorage.getItem("cart")) || []
  );
  const addCart=(e)=>{
    let updated;
    if(cart.find((i)=>(i.id ===e.id))){
      updated = cart.filter((r)=>(r.id!==e.id))
    }else{
      updated = [...cart,e]
    }
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated));
  }
console.log(cart);
  const toggleWishlist = (product) => {
    let updated;
    if (wishlist.includes(product.id)) {
      updated = wishlist.filter((id) => id !== product.id);
    } else {
      updated = [...wishlist, product];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <>
    <AddCart.Provider value={{ cart, setCart,wishlist,setWishlist }}>
      <Navbar />
      <Ad />
      <h2>🛒 Product List</h2>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
    </AddCart.Provider>
      </>
  );
};

export default Home;
