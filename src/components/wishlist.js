import {  useEffect, useState } from "react"
import Navbar from "./navbar"
function Wishlist(){
  const [list, setList] = useState([])
  useEffect(()=>{
    let stored=localStorage.getItem("wishlist")
    if(stored){
      setList(JSON.parse(stored))
    }
  },[])
  const Removelist=(e)=>{
    let updated=list.filter((i)=>(i.id!==e))
    localStorage.setItem("wishlist", JSON.stringify(updated))
    setList(updated)
  }
  return(
    <>
    <Navbar/>
    <div className="wishlist">
       {
      list.length===0 ? (<h1>Empty</h1>):(
        <>
         {
        list.map(item => (
          <>
         <div className="cart-wishlist">
           <img src={item.image_url} alt={item.name} style={{width:"200px",height:"150px"}} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={()=>{
            Removelist(item.id)
          }} style={{background:"red"}}>Remove</button>
         </div>
          </>
        ))
      }</>
      )
     }
    </div>
    </>
  )
}
export default Wishlist