import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  return (
    <div className="body">
      <main>
        <h1 className='text-[3rem] w-max m-auto'>Add Note</h1>
        <input type="text" className='outline-[red] block text-black m-auto w-max' />
        <button className='bg-[blue] py-[0rem] px-[1rem] text-[2rem] w-max m-auto block mr-[5rem] rounded-full'>Add</button>

      </main>
    </div>
  )
}

export default App
