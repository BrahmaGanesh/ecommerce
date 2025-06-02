import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
const Navbar=()=>{
  const [username,setUsername] = useState("")
  const [logout,setLogout] = useState(null)
  const navigate=useNavigate("")
const Logout=()=>{
  fetch("http://127.0.0.1:5000/api/logout", )
  .then(res=>res.json())
  .then((data)=>{
    setLogout(data)
  })
}
useEffect(()=>{
  if (!username) {
  setTimeout(()=>{
    // navigate("/login")
    alert("Please login first")
  },1000)
}
},[username])
useEffect(() => {
    if (logout?.status === "Logout") {
      localStorage.setItem("username", JSON.stringify(""));
      setUsername("");
      navigate("/login");
    }
  }, [logout, navigate]);
console.log(logout)
  useEffect(()=>{
    const user=localStorage.getItem("username")
    if (user){
    setUsername(JSON.parse(user))
 } },[])
  console.log(username)
  return (
    <div className="navbar">
     <div style={{display:"flex",alignItems:"center"}}>
       <h1 style={{marginRight:"15px"}}>E Shop</h1>
      <h2>{username && `Welcome ${username}`}</h2>
     </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/wishlist">wishlist</Link></li>
        <li><Link to="/login">Login</Link></li>
        <button style={{background:"orange"}}><Link to="/register" style={{textDecoration:"none",color:"white"}}>Sign Up</Link></button>
        <button onClick={()=>{Logout()}}>Logout</button>
      </ul>
    </div>
  )
}
export default Navbar