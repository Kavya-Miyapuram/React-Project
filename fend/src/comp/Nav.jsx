
import { Link } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react"
import Ct from "./Ct"
const Nav = () => {
    let { state}=useContext(Ct)
  return (
    <div className="nav">
        <Link to="/">Home</Link>
      {state.token==""?<>  <Link to="/userlogin">UserLogin</Link>
        <Link to="/userregister">UserRegister</Link>
        <Link to="/Merchlogin">MerchLogin</Link>
          <Link to="/Merchregister">MerchReg</Link>
         </>
         :<>
         <Link to="/cart">Cart<button>{state.cartCount}</button></Link>
       {(state.role==="merchant" ||state.role==="merchant" )&& <Link to="/addproduct">AddProduct</Link>}
       {state.role==="merchant" && <Link to="/merchentdashboard">MerchentDashboard</Link>}
        <Link to="/logout">Logout</Link></>}
    </div>
  )
}

export default Nav