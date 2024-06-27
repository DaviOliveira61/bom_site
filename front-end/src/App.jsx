import { useState } from 'react'
import './index.css';
import { Button } from "./components/ui/button";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl'>Hello Vite </h1>
      <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
    </>
  )
}

export default App;
