import {  useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login=()=>{
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [data,setData]=useState("")
  const navigate=useNavigate()

  const SubmitHandle=async(e)=>{
    e.preventDefault()
    try{
      const res= await fetch("http://127.0.0.1:5000/api/login",{
      method:"post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username,password})
    })
    const result= await res.json()
    setData(result)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
  if (data.status === "success") {
    localStorage.setItem("username", JSON.stringify(username));
    navigate("/");
    setPassword("");
  }
}, [data, username, navigate]);

  return (
    <>
    <form onSubmit={SubmitHandle}>
      <label>Username</label>
      <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter username"></input>
      <label>Password</label>
      <input type="password" name="password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}></input>
      <button type="submit">Submit</button>
    </form>
    <button><Link to={"/register"} >Register</Link></button>
    {data && <p>{data.status}</p>}
    </>
  )
}


export default Login
