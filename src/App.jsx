import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const listArr = ['Books']

  const [list, setList] = useState('')
  const [arrlist,setArrList]=useState(listArr)
  // font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  const handleSubmit=(e)=>{
    e.preventDefault();
   setArrList(arrlist.concat(list))
    setList('')
  }
  console.log(listArr)
  return (
    <div className="body">
      <main>
        <h1 className='text-[3rem] w-max m-auto'>Add Note</h1>
        <form onSubmit={handleSubmit}>        
          <input 
          type="text"
          value={list}
           onChange={(l)=>setList(l.target.value)} />


          <button type='submit' className='' onClick={()=>{
          }}>Add</button>
          <ul className='block w-max m-auto'>
           { arrlist.map((a,index)=>(
           <li key={`${index}-${a[index]}`}>{a}</li> 
           ))}
          </ul>
        </form>
      </main>
    </div>
  )
}

export default App
