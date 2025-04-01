
import './App.css'
import Batsman from './Batsman';
import Counter from './counter';
import Users from './users';

function App() {
  function handleClick(){
    alert('i am clicked.')
  }

  const handleClick2 =() => {
    alert('clicked 2')

  }
  const handleAdd5= (num)=>{
    const newNum=num+5;
    alert(newNum)
  }
 
  return (
    <>
    
     
      <h3>Vite + React</h3>
      <Users></Users>
      <Batsman></Batsman>
      <Counter></Counter>
     {/* <button onClick="handleClick()">Click me</button> */}
     <button onClick={handleClick}>Click me</button>
     <button onClick={handleClick2}>Click me2</button>
     <button onClick={()=>handleAdd5(10)}>click add 5</button>
     
      
    </>
  )
}

export default App
