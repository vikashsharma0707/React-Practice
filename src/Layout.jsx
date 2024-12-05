import { Link, Outlet } from "react-router-dom";



const Layout=()=>{
    return(
      <>
  
     
      <Link to="increment">Increment</Link>
      <Link to="usestate">Usestate</Link>
      <Link to="useeffect">UseEffect</Link>
      <Link to="useeffect1">UseEffect1</Link>
      <Link to="props">Props</Link>
      <Link to="useref">Useref</Link>
      <Link to="useref1">Useref1</Link>

      <Outlet/>
      </>
    )
  }
  
  export default Layout;