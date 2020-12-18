import React, {useState} from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = () =>{
    
  }
  return (
   <section className="section-center">
     <h3>Tired of boaring lorem ipsum?</h3>
     <form className="lorem-form" onSubmit={handleSubmit}>
       <label htmlFor="amount">paragraph: </label>
       <input 
          type="number" 
          name="amount" 
          id="amount" 
          value={count} 
          onChange={(e)=>setCount(e.target.value)}
        />
        <button 
          type="submit" 
          className="btn-generate">
          generate
        </button>
     </form>
   </section>
  );
}

export default App;
