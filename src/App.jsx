import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Increment from "./Increment";
import Usestate from "./UseState";
import UseEffect from "./UseEffect";
import UseEffect1 from "./UseEffect1";
import Props from "./Props";



const App=()=>{
  return(
    <>

    <h1>This is app page</h1>
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Layout/>}>
      <Route path="increment" element={<Increment/>}/>
      <Route path="usestate" element={<Usestate/>}/>
      <Route path="useeffect" element={<UseEffect/>}/>
      <Route path="useeffect1" element={<UseEffect1/>}/>
      <Route path="props" element={<Props/>}/>


      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;