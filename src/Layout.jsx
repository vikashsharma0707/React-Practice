import { Link, Outlet } from "react-router-dom";



const Layout=()=>{
    return(
      <>
  
     
      <Link to="increment">Increment</Link>
      <Link to="usestate">Usestate</Link>
      <Link to="useeffect">UseEffect</Link>
      <Link to="useeffect1">UseEffect1</Link>
      <Link to="props">Props</Link>

      <Outlet/>
      </>
    )
  }
  
  export default Layout;