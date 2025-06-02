const ProductCard=({product, addToCart, toggleWishlist, wishlist })=>{
  return (
   <div className="card">
      <img src={product.image_url} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => toggleWishlist(product)}>
        {wishlist.includes(product.id) ? "💖 Remove" : "🤍 Wishlist"}
      </button>
    </div>
  )
}
export default ProductCard