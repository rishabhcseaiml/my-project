/*function App() {
  let brand ="ford";
  const changeBrand = () =>{
    setBrand("BMW");
  };

  return ( 
    <div>
      <h1>my car </h1>
      <p>brand: {brand} </p>
      <button onClick={changeBrand}>hyundai</button>
    </div>
    
  

  );
}
export default App;
*/
import { useState } from "react"; 
import Counter from "./component/counter";

function App() {
  const [brand, setBrand] = useState("ford");
  
  return(
    <div>
      <Counter />
      <h1>my car </h1>
      <p>brand: {brand} </p>
      <button onClick={() => setBrand("BMW")}>change to BMW</button>
      <button onClick={() => setBrand("Hyundai")}>change to Hyundai</button>
      
    </div>
  );
}
export default App;
