import ArrayProps from "./ArrayProps"
import ArrayValue from "./ArrayValue"
import Destructring from "./Destructring"
import Props1 from "./Props1"



const Props=()=>{
  const person={
    name:"jay",
    subject:"react js"
  }
    return(
        <>
          <h1>This is props page</h1>
          <Props1  name="jay"  subject="react js"/><br/>
          <h1>This is destructring props</h1>
          <Destructring  name="jay" subject="react js"/>
          <h1>This is array props</h1>
          <ArrayProps  person={person}/>
          <h1>This is array value props</h1>
          <ArrayValue  name="jay" subject="react js"/>
          
        
        </>
    )
}

export default Props